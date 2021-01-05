# 学习笔记

## Range API

```JavaScript
// 手动指定起止点
var range = new Range();
range.setStart(element, 9);
range.setEnd(element, 5);

// 通过getSelection获取range
var range = document.getSelection().getRangeAt(0);
```

Range的两个常规操作：

```JavaScript
// 获取range中的内容
var fragment = range.extractContents();

// 在range的位置插入内容
range.insertNode(document.createTextNode('Hello'));
```

## CSSOM

## CSSOM View

## 其他API

### API分类作业
