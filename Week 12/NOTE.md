# 学习笔记

## 正常流排版

1. 收集盒进行；
2. 计算盒在行中的排布；
3. 计算行排布；

## 正常流的行级排布

## 正常流的块级排布

Margin Collapse 只会发生正常流的 BFC 里。

## BFC 合并

- Block Container: 里面有 BFC 的
    - 能容纳正常流的盒，里面就有BFC；
- Block-level Box: 外面有BFC的
- Block Box = Block Container + Block-level Box:
    里外都有BFC

### Block Container

- block
- inline-block
- table-cell
- flex item
- grid cell
- table-caption

### Block-level Box

Block Level

- display: block
- display: flex
- display: table
- display: grid
...

Inline Level

- display: inline-block
- display: inline-flex
- display: inline-table
- display: inline-grid
...

### 创建BFC的情况

- floats: 浮动元素
- absolutely positioned elements: 绝对定位元素
- block containers (such as inline-block, table-cells, and table-captions) that are not block boxes,
    - flex items
    - grid cell
    - ...
- and block boxes with 'overflow' other than 'visible': 除了overflow属性为visible的block boxes


## Flex排版

1. 收集盒进行；
2. 计算盒在主轴方向的排布；
3. 计算盒在交叉轴方向的排布；

### 计算主轴方向

- 找出所有flex元素；
- 将主轴方向的剩余尺寸按比例分配给这些元素；
- 若剩余空间为负数，所有flex元素为0，等比压缩剩余元素；

### 计算交叉轴方向

- 根据每行中最大元素尺寸计算行高；
- 根据行高`flex-align`和`item-align`，确定元素的具体位置；

## 动画

### Animation

- `@keyframes`定义关键帧
- `animation`使用动画

## 绘制

- 几何图形
    - border
    - box-shadow
    - border-radiua
- 文字
    - font
    - text-decoration
- 位图
    - backgroud-image
