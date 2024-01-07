## devDependencies
如果某些包只有在项目开发阶段会用到，在项目上线之后不会用到，则建议将这些包记录到devDependencies节点中。
```
npm install webpack -D
```

## 解决下包速度慢的问题
**淘宝NPM镜像服务器**
```
# 查看当前的下包镜像源
npm config get registry
# 切换到淘宝镜像源
npm config set registry=https://registry.npm.taobao.org
```

## nrm
更加方便切换镜像源
```
# 通过npm包管理器，将nrm安装全局可用的工具
npm install nrm -g
# 查看所有可用的镜像源
nrm ls
# 切换到taobao 镜像
nrm use taobao
```