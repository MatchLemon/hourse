# vue-hourse

## 项目运行
* 1 git clobe remote url
* 2 cd vue-horse
* 3 npm install  使用 npm 安装依赖,(如果没有node环境建议先安装nvm)
* 4 测试环境运行 npm run dev
## 生产环境配置
> 使用npm run build 编译文件。部署在nginx服务器下

## server config
> download nginx
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
