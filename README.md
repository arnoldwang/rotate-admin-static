先安装nodejs

npm install gulp -g
npm install

执行以下2个进程
gulp && gulp watch
node server.js

#windows 用户注意 browserify 有个bug会导致生成的文件问空白
https://github.com/substack/node-browserify/issues/740

修复的方法如下
找到node_modules/browserify/index.js
line 683 改成 
```
if (self.files.indexOf(id) === -1 && !self._bundleExternal && id[0] !== '/' && id[0] !== '.') {
```


请用http打开本项目