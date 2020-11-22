# 学习笔记

## 类型转换

布尔型的变量与字符串进行双等号比较时，
会先将布尔型变量转换为 Number。
由此带来的结果是给人一种反直觉的感受：

```JavaScript
'' + false;     // 'false'
false == 'false';   // false
false == '0';   // true
false == ' ';   // true
false == '';    // true
```
