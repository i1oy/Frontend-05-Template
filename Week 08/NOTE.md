# 学习笔记

## 浏览器工作原理总论

浏览器工作的基本流程：

```text
URL  --HTTP-->  HTML  --parse-->  DOM  --css computing-->
DOM with CSS  --layout-->  DOM with position  --render-->
Bitmap
```

## 有限状态机

- 每个状态都是一个机器
    在每一个机器里，可以做计算、存储、输出；
    所有的这些机器接受的输入是一致的；
    状态机的每个机器本身没有状态，纯函数；
- 每个机器都知道下一个状态
    每个机器都有确定的下一个状态(Moore)，摩尔型有限状态机;
    每个机器根据输入决定下一个状态(Mealy)，米利型有限状态机。

JavaScript 的有限状态机(Mealy):

```JavaScript
// 每个函数是一个状态
// 函数参数就是输入input
function state(input) {
    // 在函数中处理每个状态的逻辑
    return next;    // 返回值作为下一个状态
}

//////// 以下是调用 ////////
while (input) {
    // 获取输入
    state = state(input);   // 将状态机的返回值作为下一个状态
}
```

## HTTP 的协议解析

### ISO-OSI 7层网络模型

由下向上：物理层、数据链路层、网络层、传输层、会话层、表示层、应用层

其中物理层和数据链路层对应着 4G/5G/WiFi等；
网络层对应 IP协议；
传输层对应 TCP/UDP等；
会话层、表示层、应用层对应 HTTP等；

在 Node 中 TCP/UDP 对应 `require("net")`；
HTTP 对应 `require("http")`。


