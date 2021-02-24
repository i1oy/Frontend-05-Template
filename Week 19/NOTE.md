# 学习笔记

## 1. 实现一个线上 Web 服务 ｜ 初始化 Server

虚拟机安装（略）；

## 2. 实现一个线上 Web 服务 ｜ 利用 Express ，编写服务器（一）

安装 `express-generator`: `npx express-generator`;

清除掉router、views等内容；

TIPS:

    npm 的 scripts 命令是 start 的时候，可以不需要通过 `npm run` 来执行。

## 3. 实现一个线上 Web 服务 ｜ 利用 Express ，编写服务器（二）

通过 scp 命令传输文件到远程主机(`-P` 指定传输时使用的端口，默认为22)。

TIPS:

    将整个文件夹上传到服务器，不建议在服务器上执行`npm install`，
    由于无法保证所有依赖包遵循`semantic version`，重新执行install可能导致包不一致的问题；
    或者通过package-lock.json来保证一致性（生产环境中使用`npm ci`命令）。

    npm ci: 1. 先会删除掉 node_modules ；
            2. 使用 package-lock.json 下载确切版本的依赖包；
            3. 工程中必须要有 package-lock.json 文件；
            4. ci 命令不会修改 package-lock.json 文件；

## 4. 实现一个发布系统 ｜ 使用 node 启动一个简单的 Server

使用 `http.createServer` 创建一个简单服务器。

## 5. 实现一个发布系统 ｜ 编写简单的发送请求的功能

使用 `http.request` 发起请求。

## 6. 实现一个发布系统 ｜ 简单了解 Node.js 的流

[Node.js的流式传输](https://nodejs.org/docs/latest-v13.x/api/stream.html#stream_class_stream_readable)

流式传输需要使用 POST 方法， 同时在请求的 headers 参数中添加
`'Content-Type': 'application/octet-stream'`

## 7. 实现一个发布系统 ｜ 改造 server

在服务端创建写入流(`createWriteStream`), 将本地文件传输到服务端。

## 8. 实现一个发布系统 ｜ 实现多文件发布

使用 Node.js 中的压缩包: `Archiver`, `unzipper`;

使用 Stream 的 `pipe` 方法，将一个可读的流导入到可写的流中。

利用压缩、解压实现多文件传输；利用`pipe`方法简化传输代码
