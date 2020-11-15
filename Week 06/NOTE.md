# 学习笔记

## 泛用语言分类方法

### 按语法分类

- 非形式语言：语法没有严格的定义，例如中文、英文
- 形式语言：语法严谨且严格，例如计算机编程语言

乔姆斯基谱系（形式语言的一种分类谱系）：

- 0型 无限制文法
- 1型 上下文相关文法
- 2型 上下文无关文法
- 3型 正则文法（正规文法）

## 产生式

BNF（巴斯科-诺尔范式）

- 使用尖括号括起来的名称来表示语法结构名
- 语法结构分成基础结构和需要用其他语法结构定义的复合结构
    基础结构称终结符；
    复合结构称非终结符
- 引号和中间的字符表示终结符
- 可以有括号
- `*`表示重复多次
- `｜`表示或
- `+`表示至少一次

## 深入理解产生式

总体来说，这块内容有点晦涩，感觉是与编译原理的内容相关。
在此记录一些课上的结论性内容：

JavaScript 总体上属于上下文无关文法，表达式部分大体是正则文法。
其中存在两个特例：

```JavaScript
{
    get a {return 1},
    get: 1
}
// ** 乘方预算符，右结合，不属于正则文法
2 ** 1 ** 2; // 4
```

但是从严格的角度来说，JS 应该属于上下文相关文法。
因为存在一个特例的情况时，就应该认为属于更泛的文法。

## 现代语言的分类

### 形式语言-用途

数据描述语言：
    `JSON, HTML, XAML, YAML, SQL, CSS`

编程语言：
    `C, C++, C#, Java, JavaScript, Python, Ruby, Perl, Lisp, T-SQL, Clojure, Haskell, Go, Kotlin, Scale, Swift, Objective-C, PHP, R, VB, Matlab`

### 形式语言-表达形式

声明式语言(大部分数据描述语言都是声明式语言)：
    `JSON, HTML, XAML, YAML, SQL, CSS, Lisp, Clojure, Haskell`

命令式语言：
    `C, C++, C#, Java, JavaScript, Python, Ruby, Perl, T-SQL, Go, Scale, Swift, Objective-C, PHP, R, VB`
