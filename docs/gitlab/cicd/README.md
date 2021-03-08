# CI/CD

> [官方文档](https://docs.gitlab.com/ee/ci/README.html)

基本概念之类的这里不再赘述，要使用 CI/CD 的前提是需要安装 GitLab Runner 并注册到你的 GitLab 服务器上，所有的 CI/CD 就是在该 Runner 上进行处理交互

对于 GitLab Runner 安装笔者这里没有机会实践，也不进行，使用已经安装好的单机 docker 环境来自动化打包 boot 程序为 docker 镜像

至于初体验，官网 [开始](https://docs.gitlab.com/ee/ci/quick_start/#create-a-gitlab-ciyml-file) 里已经给出了例子，全部是使用 echo 命令输出，定义了几个 job 作业，可以自己去实验下

学习路径：

1. 先把环境搭建起来， gitlab 服务器、gitlab runner 注册上
2. CI/DI 官方文档中的开始、流水线、job 等概念先读一遍
3. [.gitlab-ci.yml 章节](https://docs.gitlab.com/ee/ci/yaml/README.html)，可以参考这里的内容完成自己的 yml 编写

## 打包 bootJar

```yml
# 默认设置，所有作业都默认使用这里的配置
default:
  tags:
    - package  # 表示使用哪一个 runner 来运行

### 定义阶段执行顺序
# 官网文档：https://docs.gitlab.com/ee/ci/yaml/README.html#stage
# 含义：一个阶段的所有作业必须在下一个阶段执行之前完成
# 默认的阶段有：.pre、build、test、deploy、.post 其中 .pre 和 .post 永远是在最开始和最后执行（其他的可以被自定义的顺序控制），而不管在这里定义的顺序是什么
# 可自定义阶段，按照你要让他们运行的顺序进行排序，同一阶段可以并行运行（前提是配置了并行数量）
## 这里自定义了执行顺序
stages:
  - build
  - test
  - dockerBuild  # 新增了一个自定义的 dockerBuild 阶段
  - deploy


## 定义作业名称
build-bootJar:
  # 定义阶段，用于执行顺序的控制
  stage: build
  # 使用镜像运行，选择有 gradle 的镜像
  image: bj-docker.xxx.com/gradle:6.7.1-jdk8
  # 定义执行脚本
  script:
    # /builds/data/project-citest/.gradle
    - echo "exec bootJar, gradle：`pwd`/.gradle"
    - export GRADLE_USER_HOME=`pwd`/.gradle
    # 执行 gradle 的时候打印 info 日志信息，可以看到下载依赖的请求
    - gradle bootJar --info
    - ls -l $GRADLE_USER_HOME;
    - ls -l build/libs/
```

这样就定义了一个执行 gradle 执行 bootJar 生成 boot jar 包的作业。

这里在执行的时候，你会发现每次构建都很耗时（通过 `gradle bootJar --info` ），通过 `--info` 看到控制台上输出的日志信息，大部分耗时都在重新下载 jar 包依赖了，我们考虑使用缓存来缓存这些内容

## 缓存 gradle 的 jar 包依赖

给作业增加了 cache 配置，有关变量使用相关的请看本章中的变量章节

```yml
## 定义作业名称
build-bootJar:
  # 定义阶段，用于执行顺序的控制
  stage: build
  # 使用镜像运行，选择有 gradle 的镜像
  image: bj-docker.runshopstore.com/gradle:6.7.1-jdk8
  # 定义执行脚本
  script:
    # /builds/data/project-citest/.gradle
    - echo "exec bootJar, gradle：`pwd`/.gradle"
    - export GRADLE_USER_HOME=`pwd`/.gradle
    # 执行 gradle 的时候打印 info 日志信息，可以看到下载依赖的请求
    - gradle bootJar --info
    - ls -l $GRADLE_USER_HOME;
    - ls -l build/libs/
  ### 缓存
  # 缓存依赖原理和最佳实践：https://docs.gitlab.com/ee/ci/yaml/README.html#cache
  # 缓存语法：https://docs.gitlab.com/ee/ci/yaml/README.html#cache
  cache:
    # 使用预定义变量，项目名称 作为缓存的 key，目的是为了该项目的所有分支都使用该缓存
    ## 所有预定义变量
    # 官方文档：https://docs.gitlab.com/ee/ci/variables/predefined_variables.html
    # 官方支持的变量，可以直接使用，而不用定义的变量
    key: "$CI_PROJECT_NAME"
    # 要缓存的内容有哪些？
    # 在上面定义了  GRADLE_USER_HOME ，那么 gradle 的相关工作目录则就在该目录下，使用了 pwd，则是当前的项目目录下，所以这里使用相对路径就能获取到
    paths:
      # image 使用的是 gradle:6.7.1-jdk8，意思是该镜像已经安装了 gradle 6.7.1，
      # 如果要使用项目相同的 wrapper 里面的版本，则需要缓存该目录，不用每次都下载 gradle 了，但是所有使用 gradle 的地方需要改成 gradlew
      - .gradle/wrapper
      # gradle 的 jar 包依赖全部下载到这个地方
      - .gradle/caches
    ## 缓存策略
    # 默认是 pull-push，执行作业前，先下载缓存文件到指定目录，作业完成后，再上传
    policy: pull-push
```

查看缓存是否成功，可以看 ci 控制台输出的内容

```bash
...
# 在作业执行前显示了一条 Restoring cache
# 这个就是在还原缓存，没有其他信息，因为我们是第一次执行
Restoring cache
....
# 这里是上面 script 中执行的内容，目的是为了看看 gradle 工作目录下有哪些文件
$ ls -l $GRADLE_USER_HOME;
total 40
drwxr-xr-x 7 root root 4096 Mar  8 06:35 6.7.1
drwxr-xr-x 2 root root 4096 Mar  8 06:34 buildOutputCleanup
drwxr-xr-x 7 root root 4096 Mar  8 06:29 caches		# 这个是 jar 包依赖文件目录
drwxr-xr-x 2 root root 4096 Mar  8 06:30 checksums
drwxr-xr-x 2 root root 4096 Mar  8 06:35 configuration-cache
drwxr-xr-x 3 root root 4096 Mar  8 06:29 daemon
drwxr-xr-x 2 root root 4096 Mar  8 06:34 jdks
drwxr-xr-x 5 root root 4096 Mar  8 06:29 native
drwxr-xr-x 3 root root 4096 Mar  8 06:29 notifications
drwxr-xr-x 2 root root 4096 Mar  8 06:35 vcs-1

# bootJar 也出来了
$ ls -l build/libs/
total 16648
-rw-r--r-- 1 root root 17047394 Mar  8 06:35 citest-0.0.1-SNAPSHOT.jar
Saving cache for successful job
00:02

# 下面是开始创建缓存了
Creating cache project-citest...
# .gradle/wrapper 没有匹配到文件，这个是我们没有使用 gradlew 命令，是正常的
WARNING: .gradle/wrapper: no matching files    
# 这里找到了 1086 个文件或则目录，说明缓存生效了
.gradle/caches: found 1086 matching files and directories 
# 没有提供 URL，缓存将不会上传到共享缓存服务器。缓存将只存储在本地。
No URL provided, cache will be not uploaded to shared cache server. Cache will be stored only locally. 
Created cache
Cleaning up file based variables
00:01
Job succeeded
```

下面再次修改文件，上传后，查看缓存 Restoring cache 步骤的输出信息是什么

```bash
...
Restoring cache
Checking cache for project-citest...
# 没有提供网址，缓存将不会从共享缓存服务器下载。相反，将提取缓存的本地版本。
No URL provided, cache will not be downloaded from shared cache server. Instead a local version of cache will be extracted. 
# 成功提取缓存
Successfully extracted cache
...
....
Saving cache for successful job
00:02
Creating cache project-citest...
WARNING: .gradle/wrapper: no matching files        
.gradle/caches: found 1086 matching files and directories 
No URL provided, cache will be not uploaded to shared cache server. Cache will be stored only locally. 
Created cache
Cleaning up file based variables
00:01
Job succeeded
```

可以看到缓存已经生效了，它将缓存保存到了本地（应该是 GitLab Runner 机器上，我们这里实验的 GitLab Runner 是单机版的 docker）

下面在另外一个任务中尝试获取我们打好的 bootJar 包

```yml
# 将 jar 包打成 image
dockerBuild:
  stage: dockerBuild
  script:
    - ls -l build/libs/
```

如果不使用  image ，则 gitlab 会默认使用 ruby:2.6 这个 image 来执行我们的 script，那么上述结果如下

```
$ ls -l build/libs/
ls: cannot access 'build/libs/': No such file or directory
```

这个肯定是找不到的。在官网文档中就解释了 [缓存与工件](https://docs.gitlab.com/ee/ci/caching/#cache-vs-artifacts)，artifacts （工件）用于阶段之间传递阶段的结果

## 配置 artifacts 

```yml
 build-bootJar:
  ...
  artifacts:
    paths:
      - build/libs/*.jar
    expire_in: 1 days
```

控制台输出

```bash
Uploading artifacts for successful job
00:02
Uploading artifacts...
build/libs/*.jar: found 1 matching files and directories 
Uploading artifacts as "archive" to coordinator... ok  id=42690 responseStatus=201 Created token=15iuajwR
```

那么在 dockerBuild 流程中的输出关键信息如下

```bash
Downloading artifacts
00:01
Downloading artifacts for build-bootJar (42690)...
Downloading artifacts from coordinator... ok        id=42690 responseStatus=200 OK token=15iuajwR
Executing "step_script" stage of the job script
00:01
$ ls -l build/libs/
total 16648
-rw-r--r-- 1 root root 17047394 Mar  8 07:20 citest-0.0.1-SNAPSHOT.jar
```

## 使用 docker 打成 image

实现思路

1. 使用有 docker 功能的 image

2. 使用命令登录到私有  docker： 

   ```bash
   echo "密码" | docker login -u "用户名" --password-stdin "私有 docker 仓地址 "
   ```

3. 完成 docker build 和 push 操作

在此之前，需要准备一个 Dockerfile 文件，从上面的测试学习中可知，我们操作的目录是在项目目录下，这个从控制台的日志输出中能看到

```bash
...
Getting source from Git repository
00:01
Fetching changes with git depth set to 50...
# 重新调整这个仓库
Reinitialized existing Git repository in /builds/data/project-citest/.git/
# checkout
Checking out 6de1661f as main...
```

那么我们的思路就是，在我们的项目中编写一份 Dockerfile 文件，然后在这个作业中，执行这个文件打包镜像

具体代码如下

Dockerfile 

```bash
FROM xxx/openjdk:8u212-jre-slim

# 定义工作目录
WORKDIR /app

# 复制 build/libs/*.jar 并重命名为 app.jar
# 这里写的 *.jar 事实上，我们知道只会产生一个 jar 包
# 这里的路径，是作业中下载的工件路径
COPY build/libs/*.jar app.jar

EXPOSE 80

ENTRYPOINT  ["java", "-jar", "app.jar"]
```

作业定义如下

```yml
### 将 jar 包打成 image
## 实现思路
#  1. 使用有 docker 功能的 image
#  2. 使用命令登录到私有 docker： echo "密码" | docker login -u "用户名" --password-stdin "私有 docker 仓地址 "
#  3. 完成 docker 操作
dockerBuild:
  image: xxx/docker:stable
  stage: dockerBuild
  script:
    - ls -l build/libs/
    # 这里使用了自定义的环境变量
    # 这个变量配置入口在项目的 -/settings/ci_cd，设置 -> CI/CD 页面中的 变量 中
    # 分为项目独有变量 和 群组变量（该群组下的项目可以直接使用）
    - echo "$xx_BUILD_REGISTRY_PASSWORD" | docker login -u "$xx_BUILD_REGISTRY_USER" --password-stdin "$xx_BUILD_REGISTRY"
    - image_version="1.0"
    - image_name="${xx_BUILD_REGISTRY}/project-test/citest"
    - echo $image_name
    # -f 指定 Dockerfile 路径
    # 一条语句写不下，还可以换行写，注意下这个语法
    - docker build -f ./Dockerfile
      --tag "$image_name:$image_version"
      .
    - docker push "$image_name:$image_version"
  ### needs 用于无序执行作业，可以将作业之间的关系可视化为有向无环图
  # 官方文档：https://docs.gitlab.com/ee/ci/yaml/README.html#needs
  # needs:[] 定义，但是不定义依赖的作业，表示 立即执行，需要注意的是它忽略了 stages 定义的执行顺序，类似于可以和其他作业并行执行，这里是立即执行
  # needs:[xxx] 必须要等待 xxx 作业完成，才能执行该作业
  needs:
    - job: build-bootJar
      #依赖 build-bootJar，并且需要下载它产生的工件，也就是之前打出来的 xx.jar
      artifacts: true
  ### rules 用于在管道中包括或排除作业，简单说就是符合条件的才会执行该作业
  # 官方文档：https://docs.gitlab.com/ee/ci/yaml/README.html#rules
  # 它可以写多个规则（条件），规则将按顺序进行评估，直到第一个匹配为止
  rules:
    # 这里判定触发 CI 的分支是 main 才执行该作业
    - if: "$CI_COMMIT_REF_NAME  == 'main'"
      when: on_success
```

已经完成了目标，另外，在这基础上应该已经明白了核心的流程配置，后续可以个性化自己的配置。

## 一些关键文档配置路径

- [变量](https://docs.gitlab.com/ee/ci/variables/README.html) ：和 linux 中的变量一致，可以直接引用，如 $CI_JOB_STAGE
- [所有预定义的变量](https://docs.gitlab.com/ee/ci/variables/predefined_variables.html) 官方支持的变量，可以直接使用，而不用定义的变量
- [锚点](https://docs.gitlab.com/ee/ci/yaml/README.html#anchors) yml 语法，可以用来定义一些公共配置的模板，在使用的地方引用即可
- CI/DI 替代锚点的语法 [extends](https://docs.gitlab.com/ee/ci/yaml/README.html#stage)
- [阶段 / stages](https://docs.gitlab.com/ee/ci/yaml/README.html#stage)：定义作业执行顺序
- [needs](https://docs.gitlab.com/ee/ci/yaml/README.html#needs)：用于无序执行作业，可以定义依赖某个作业完成后才执行
- 缓存 / cache ：[缓存依赖原理和最佳实践](https://docs.gitlab.com/ee/ci/yaml/README.html#cache)、[缓存语法](https://docs.gitlab.com/ee/ci/yaml/README.html#cache)
-  [缓存与工件/artifacts ](https://docs.gitlab.com/ee/ci/caching/#cache-vs-artifacts) 
- [规则 / rules](https://docs.gitlab.com/ee/ci/yaml/README.html#rules)：用于条件判定，在哪些条件下可以执行该作业
- 其他的还是需要通读 [.gitlab-ci.yml 参考文档](https://docs.gitlab.com/ee/ci/yaml/README.html#job-keywords)

## 生产级配置写法

## 一些个性化作业

## 版本号生成 semantic-release

[semantic-release](https://github.com/semantic-release/semantic-release)：可以用该工具生成版本号，有 docker 封装好的镜像，在该镜像上直接使用

```yml
version:
  stage: version
  image: xxx/semantic-release:17.1.1
  script:
    # 只在这些分支上才执行 semantic-release 命令
    - if [ $CI_COMMIT_REF_NAME == 'alpha' -o $CI_COMMIT_REF_NAME  == 'master' ];
      then
      semantic-release;
      fi
    - if [ ! -f ./.version ];
      then
      echo "VERSION=${xxx_BUILD_VERSION:-$(date +%Y%m%d%H%M%S)}">.version;
      fi
    - cat .version
  artifacts:
    paths:
      - .version
    expire_in: 1 days
```

感觉这里写的版本号生成，并没有使用上 semantic-release 真正的功能，仅仅是自己写了一个日期作为版本号
