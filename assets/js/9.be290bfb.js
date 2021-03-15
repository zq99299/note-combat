(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{386:function(s,a,t){"use strict";t.r(a);var e=t(13),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[s._v("#")]),s._v(" docker")]),s._v(" "),t("h2",{attrs:{id:"docker-相关知识笔记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-相关知识笔记"}},[s._v("#")]),s._v(" docker 相关知识笔记")]),s._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://zq99299.github.io/note-book/posts/docker/#docker",target:"_blank",rel:"noopener noreferrer"}},[s._v("基本操作"),t("OutboundLink")],1)])]),s._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://zq99299.github.io/mysql-tutorial/ali-new-retail/09/02.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("系统学习、比较完整的"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("从 0 开始学习使用 docker、分布式 Docker 环境 Swarm 组网")])]),s._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://zq99299.github.io/mysql-tutorial/ali-new-retail/09/04.html#%E7%AE%A1%E7%90%86-docker-%E6%95%B0%E6%8D%AE%E5%8D%B7",target:"_blank",rel:"noopener noreferrer"}},[s._v("管理 Docker 数据卷"),t("OutboundLink")],1)])])]),s._v(" "),t("h2",{attrs:{id:"关于-docker-compose-快速上手知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于-docker-compose-快速上手知识"}},[s._v("#")]),s._v(" 关于 docker-compose 快速上手知识")]),s._v(" "),t("p",[s._v("里面的网络让我晕了。我们需要明确的有以下几点：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("容器之间通信不能使用 localhost ，因为 localhost 指向的是容器自己")])]),s._v(" "),t("li",[t("p",[s._v("通过 docker-compose 启动容器的话，会默认创建一个网络")]),s._v(" "),t("p",[s._v("默认值为："),t("code",[s._v("docker-compose.yml")]),s._v(" 当前所在文件夹  +  配置中指定的网络名称，如 "),t("code",[s._v("目录_网络")])])]),s._v(" "),t("li",[t("p",[s._v("不同网络之间的容器不能直接通信（通过什么方式访问？笔者暂时不知道）")])]),s._v(" "),t("li",[t("p",[s._v("相同网络直接访问是通过 "),t("code",[s._v("容器名:端口")])])])]),s._v(" "),t("p",[s._v("那么现在有如下的一个配置：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("|- es\n  |- docker-compose.yml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("elasticsearch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" docker.elastic.co/elasticsearch/elasticsearch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("5.6.10\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" elasticsearch\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 容器名")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" cluster.name=docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("cluster\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" esdata"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/share/elasticsearch/data\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./custom_elasticsearch.yml"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/share/elasticsearch/config/elasticsearch.yml \n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 9200"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 9300"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9300")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" localnet\t\t\t\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 参与的网络")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kibana")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" docker.elastic.co/kibana/kibana"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("5.6.10\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kibana\t\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 容器名")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./kibana.yml"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/share/kibana/config/kibana.yml\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 5601"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5601")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" localnet    \n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("esdata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("driver")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" local \n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\t\t\t\t\t\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建一个网络")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("localnet")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br")])]),t("p",[s._v("在 es 目录下通过 "),t("code",[s._v("docker-compose up")]),s._v(" 启动服务后，那么得出以下信息：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("创建一个 "),t("code",[s._v("es_localnet")]),s._v(" 的网络")]),s._v(" "),t("p",[s._v("如果配置文件中没有配置 networks，则会创建一个 "),t("code",[s._v("es_default")]),s._v(" 的默认网络")])]),s._v(" "),t("li",[t("p",[s._v("kibana 配置文件中要指向这里的 elasticsearch 的话，需要写 "),t("code",[s._v("http://elasticsearch:9200")])])])]),s._v(" "),t("h3",{attrs:{id:"网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络"}},[s._v("#")]),s._v(" 网络")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# 查看网络\ndocker network ls\n# 移除网络\ndocker remove 网络名\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"docker-compose-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-命令"}},[s._v("#")]),s._v(" docker-compose 命令")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 前台启动一键更新服务; 需要在 docker-compose.yml 文件同级目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 后面跟参数 -d, 则是后台")]),s._v("\ndocker-compose up\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 销毁容器,后面加参与  -v 会把网络和卷也销毁")]),s._v("\ndocker-compose down\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看日志")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 后面增加服务名则查看指定的服务日志")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -f 参数：持续的输出日志")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -t 参数：显示时间戳")]),s._v("\ndocker-compose logs\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"不同配置的容器通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不同配置的容器通信"}},[s._v("#")]),s._v(" 不同配置的容器通信")]),s._v(" "),t("p",[s._v("前面说过，一个 "),t("code",[s._v("docker-compose.yml")]),s._v(" 如果不配置会创建默认的，反正是以目录来创建，也就是说不同配置的服务，加入的默认或则自定义的网络其实不在同一个，那么如何加入同一个已经存在的网络呢？")]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \n "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("default")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("external")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" elastic_default\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("上述通过配置，默认加入的网络为  "),t("code",[s._v("external")]),s._v(" 外部的，该网络在使用 "),t("code",[s._v("docker-compose down -v")]),s._v(" 时，不会被删除，会直接跳过；")]),s._v(" "),t("p",[s._v("所以，在开发环境中，为了简单，还是使用同一份  "),t("code",[s._v("docker-compose.xml")]),s._v(" 配置来部署测试环境的中间件，比较省事")]),s._v(" "),t("h2",{attrs:{id:"开发环境-部署-docker-elastic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发环境-部署-docker-elastic"}},[s._v("#")]),s._v(" 开发环境-部署 docker elastic")]),s._v(" "),t("blockquote",[t("p",[s._v("Elastic 版本：5.6.10")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/5.6/docker.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方教程"),t("OutboundLink")],1)])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker pull docker.elastic.co/elasticsearch/elasticsearch:5.6.10\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开发模式下快速启动一个 elastic")]),s._v("\ndocker run -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v(":9200 -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9300")]),s._v(":9300 -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"discovery.type=single-node"')]),s._v(" docker.elastic.co/elasticsearch/elasticsearch:5.6.10\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建数据卷")]),s._v("\ndocker run -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v(":9200 -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9300")]),s._v(":9300 -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"discovery.type=single-node"')]),s._v(" -v elasticdata:/usr/share/elasticsearch/data --privileged -v full_path_to/custom_elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml docker.elastic.co/elasticsearch/elasticsearch:5.6.10\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("ul",[t("li",[s._v("第一个 "),t("code",[s._v("-v")]),s._v(" 挂载了一个卷：数据目录存储")]),s._v(" "),t("li",[s._v("第二个 "),t("code",[s._v("-v")]),s._v(" 挂载了本地的一个文件：elastic 的配置文件")])]),s._v(" "),t("p",[s._v("使用 docker-compose，"),t("code",[s._v("docker-compose.yml")])]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("elasticsearch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" docker.elastic.co/elasticsearch/elasticsearch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("5.6.10\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" elasticsearch\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" cluster.name=docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("cluster\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" bootstrap.memory_lock=true\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" esdata"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/share/elasticsearch/data\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./custom_elasticsearch.yml"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/share/elasticsearch/config/elasticsearch.yml \n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 9200"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 9300"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9300")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("esdata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("driver")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" local \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("custom_elasticsearch.yml")]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("discovery")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" single"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("node  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 单节点模式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("network")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0.0.0.0\t   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开放远程访问")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("xpack")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("security")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("enabled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭用户名密码保护")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"开发环境-部署-docker-kibana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发环境-部署-docker-kibana"}},[s._v("#")]),s._v(" 开发环境-部署 docker kibana")]),s._v(" "),t("blockquote",[t("p",[s._v("Kibana 版本：5.6.10")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.elastic.co/guide/en/kibana/5.6/_pulling_the_image.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方教程"),t("OutboundLink")],1)])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker pull docker.elastic.co/kibana/kibana:5.6.10\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("docker-compose.yml")]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kibana")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" docker.elastic.co/kibana/kibana"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("5.6.10\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./kibana.yml"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/share/kibana/config/kibana.yml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("kibana.yml")]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.0.0"')]),s._v("\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开放远程访问")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("elasticsearch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" http"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//elasticsearch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("9200/\t  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过服务名链接容器中的其他 es 服务")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);