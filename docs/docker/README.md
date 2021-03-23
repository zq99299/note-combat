# docker

## docker 相关知识笔记

- [基本操作](https://zq99299.github.io/note-book/posts/docker/#docker)

- [系统学习、比较完整的](https://zq99299.github.io/mysql-tutorial/ali-new-retail/09/02.html)

  从 0 开始学习使用 docker、分布式 Docker 环境 Swarm 组网

- [管理 Docker 数据卷](https://zq99299.github.io/mysql-tutorial/ali-new-retail/09/04.html#%E7%AE%A1%E7%90%86-docker-%E6%95%B0%E6%8D%AE%E5%8D%B7)

## 关于 docker-compose 快速上手知识

里面的网络让我晕了。我们需要明确的有以下几点：

- 容器之间通信不能使用 localhost ，因为 localhost 指向的是容器自己

- 通过 docker-compose 启动容器的话，会默认创建一个网络

  默认值为：`docker-compose.yml` 当前所在文件夹  +  配置中指定的网络名称，如 `目录_网络`
  
- 不同网络之间的容器不能直接通信（通过什么方式访问？笔者暂时不知道）

- 相同网络直接访问是通过 `容器名:端口`

那么现在有如下的一个配置：

```
|- es
  |- docker-compose.yml
```

```yml
services:
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:5.6.10
    container_name: elasticsearch			# 容器名
    environment:
      - cluster.name=docker-cluster
    volumes:
      - esdata:/usr/share/elasticsearch/data
      - ./custom_elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml 
    ports:
      - 9200:9200
      - 9300:9300
    networks:
      - localnet							# 参与的网络
  kibana:
    image: docker.elastic.co/kibana/kibana:5.6.10
    container_name: kibana					# 容器名
    volumes:
      - ./kibana.yml:/usr/share/kibana/config/kibana.yml
    ports:
      - 5601:5601
    networks:
      - localnet    
volumes:
  esdata:
    driver: local 

networks:									# 创建一个网络
  localnet:
```

在 es 目录下通过 `docker-compose up` 启动服务后，那么得出以下信息：

- 创建一个 `es_localnet` 的网络

  如果配置文件中没有配置 networks，则会创建一个 `es_default` 的默认网络

- kibana 配置文件中要指向这里的 elasticsearch 的话，需要写 `http://elasticsearch:9200`



### 网络

```
# 查看网络
docker network ls
# 移除网络
docker remove 网络名
```

###  docker-compose 命令

```bash
# 前台启动一键更新服务; 需要在 docker-compose.yml 文件同级目录
# 后面跟参数 -d, 则是后台
docker-compose up

# 销毁容器,后面加参与  -v 会把网络和卷也销毁
docker-compose down

# 查看日志
# 后面增加服务名则查看指定的服务日志
# -f 参数：持续的输出日志
# -t 参数：显示时间戳
docker-compose logs
```

### 不同配置的容器通信

前面说过，一个 `docker-compose.yml` 如果不配置会创建默认的，反正是以目录来创建，也就是说不同配置的服务，加入的默认或则自定义的网络其实不在同一个，那么如何加入同一个已经存在的网络呢？

```yml
networks: 
 default:
    external:
      name: elastic_default
```

上述通过配置，默认加入的网络为  `external` 外部的，该网络在使用 `docker-compose down -v` 时，不会被删除，会直接跳过；

所以，在开发环境中，为了简单，还是使用同一份  `docker-compose.xml` 配置来部署测试环境的中间件，比较省事

## 开发环境-部署 docker elastic

> Elastic 版本：5.6.10
>
> [官方教程](https://www.elastic.co/guide/en/elasticsearch/reference/5.6/docker.html)

```bash
docker pull docker.elastic.co/elasticsearch/elasticsearch:5.6.10

# 开发模式下快速启动一个 elastic
docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:5.6.10

# 创建数据卷
docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -v elasticdata:/usr/share/elasticsearch/data --privileged -v full_path_to/custom_elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml docker.elastic.co/elasticsearch/elasticsearch:5.6.10
```

- 第一个 `-v` 挂载了一个卷：数据目录存储
- 第二个 `-v` 挂载了本地的一个文件：elastic 的配置文件

使用 docker-compose，`docker-compose.yml`

```yml
services:
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:5.6.10
    container_name: elasticsearch
    environment:
      - cluster.name=docker-cluster
      - bootstrap.memory_lock=true
    volumes:
      - esdata:/usr/share/elasticsearch/data
      - ./custom_elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml 
    ports:
      - 9200:9200
      - 9300:9300
volumes:
  esdata:
    driver: local 
```

custom_elasticsearch.yml

```yml
discovery:
    type: single-node  # 单节点模式
network:
    host: 0.0.0.0	   # 开放远程访问

xpack:
    security:
        enabled: false  # 关闭用户名密码保护
```



## 开发环境-部署 docker kibana

>Kibana 版本：5.6.10
>
>[官方教程](https://www.elastic.co/guide/en/kibana/5.6/_pulling_the_image.html)

```
docker pull docker.elastic.co/kibana/kibana:5.6.10
```

docker-compose.yml

```yml
services:
  kibana:
    image: docker.elastic.co/kibana/kibana:5.6.10
    volumes:
      - ./kibana.yml:/usr/share/kibana/config/kibana.yml
```

kibana.yml

```yml
server:
  host: "0.0.0.0"	# 开放远程访问
elasticsearch:
   url: http://elasticsearch:9200/	  # 通过服务名链接容器中的其他 es 服务
```



## RabbitMQ 3 部署

docker-compose.yml

```yml
services:
    rabbitmq:
        image: rabbitmq:3-management
        container_name: rabbitmq
        environment:
          - hostname=localhost
        volumes:
          # 注意数据目录，不能写 /var/lib/rabbitmq/ ，否则启动后会导致 cookie 文件的权限问题启动失败
          - ./rabbitmq/data:/var/lib/rabbitmq/mnesia
          - ./rabbitmq/log:/var/log/rabbitmq
          - ./rabbitmq.conf:/etc/rabbitmq/rabbitmq.conf 
        ports:
          - 15672:15672
          - 5672:5672
```

rabbitmq.conf

```
loopback_users.guest = false
listeners.tcp.default = 5672
management.tcp.port = 15672
```

