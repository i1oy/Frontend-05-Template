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

## 使用 Range 实现 DOM 精确操作

基本拖拽的实践技巧：

- 在 mousedown 的事件中去监听 mouseup 和 mousemove，保证逻辑正确性和性能的高效性。
- 在 document 上去监听 mouseup 和 mousemove，避免“拖断”的现象。
- 使用 transform 来移动 DOM 对象。

正常流里的拖拽：

通过使用 Range 来实现精确的操作；
使用 `Range.getBoundingClientReact()`(CSSOM API) 获取位置信息;
使用 `Range.insertNode()` 方法将元素插入到指定位置。

全局禁止选中的代码实现

```js
document.addEventListener("selectstart", event => {
    event.preventDefault();
});
```
