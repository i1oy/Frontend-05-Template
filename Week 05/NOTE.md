# 学习笔记

## Proxy 与双向绑定

### Proxy的基本用法

Proxy 是 ES6 中新增的特性。
MDN的介绍（由于翻译的意思看着有点怪，因此直接拷贝的英文的介绍）：

    The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.

`Proxy` 会在另一个对象上创建了一个代理对象，
可以对代理对象的基本操作行为进行拦截和重定义（例如，get, set等）。

使用 `Proxy` 的代码具有强大的用途，但是代码的预期性也会变差。
因此主要应用于底层库。

    在 Vue 3 中，双向绑定的实现代码由 `Object.defineProperty` 切换到了 `Proxy`（也保留了原来的版本，用于支持IE浏览器）。

### 模拟 reactive 实现原理

在实现模拟 reactive 功能的过程中，
通过使用新建一个 `effect` 来实现对对象属性变化的监听。

利用 Map 结构记录监听时间到具体的属性上。


