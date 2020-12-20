# 学习笔记

## CSS 2.1总体结构

- @charset
- @import
- rules
    - @media
    - @page
    - rule

## @规则

`@media` 基于一个或多个媒体查询的结果来应用样式表的一部分;
`@keyframes` 定义动画;
`@fontface` 理论上能定义一切字体，由此衍生出来 `icon font`;

## CSS的规则

规则分为了 选择器 和 声明(key, value) 两个部分。

选择器部分目前主要关注 `Level 3` 的标准（`Level 4`处于Working Draft）；
Key部分关注`Variable`的内容；

## 选择器

- 简单选择器:
    - `*`
    - `div svg|a`
    - `.cls`
    - `#id`
    - `[attr=value]`
    - `:hover`, 伪类
    - `::before`, 伪元素

- 复合选择器
    - `<简单选择器><简单选择器><简单选择器>`
    - `*或者div必须写在最前面`

- 复杂选择器
    - `<复合选择器><sp><复合选择器>`
    - `<复合选择器>">"<复合选择器>`
    - `<复合选择器>"~"<复合选择器>`
    - `<复合选择器>"+"<复合选择器>`
    - `<复合选择器>"||"<复合选择器>`, CSS Level 4, 选择表格中的某一列

## 选择器优先级

- 简单选择器计数

## 伪类

- 链接
    - :any-link
    - :link :visited
    - :hover
    - :active
    - :focus
    - :target

- 树结构
    - :empty, 判断是否具有子标签
    - `:nth-child()`
    - `:nth-last-child()`
    - `:first-child :last-child :only-child`

- 逻辑型
    - :not, 大部分浏览器支持

避免使用过于复杂的选择器，如果出现过于复杂的选择器应该适当考虑HTML结构的合理性。

## 伪元素

- `::before`
- `::after`
- `::first-line`
- `::first-letter`

## 思考题

为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢？

因为第一个字符是比较确定的元素，设置float之类的，渲染起来比较容易；
但是第一行文字的内容会由于显示页面宽度的改变，导致第一行所包含的内容发生变化，
从而增加影响渲染效率。
