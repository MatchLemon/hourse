# vue-house

## 项目运行
-* 1 git clobe remote url
* 2 cd vue-horse
* 3 npm install  使用 npm 安装依赖,(如果没有node环境建议先安装nvm)
* 4 测试环境运行 npm run dev
## 生产环境配置
> 使用npm run build 编译文件。部署在nginx服务器下

## Server config
> ## Download nginx
````
    server {
        listen       10000;
        server_name  localhost;
        location / {
            proxy_pass   http://localhost:8088;
        }
        location /api/ {
            proxy_pass   http://www.dingshengfangchan.com/api/;
        }
    }
 ````
 > ## vsdftp ssh
 配置ssh 在 `～/.ssh/authorized_keys `
> ## profile
export JAVA_HOME=/usr/application/jdk1.8.0_144
export M2_HOME=/usr/application/apache-maven-3.5.0
export PATH=$JAVA_HOME/bin:$M2_HOME/bin:$PATH
export JRE_HOME=$JAVA_HOME/jre
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar

> CronTab
 '0 */2 * * * /srv/house/home-backend/build.sh>>/srv/house/home-backend/build-log.log'
