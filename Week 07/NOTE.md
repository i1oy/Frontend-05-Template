# 学习笔记

## 运算符和表达式

### 语法树和运算符优先级的关系

运算符由高到低：

- Member 运算符
    - `a.b`
    - `a[b]`
    - foo`string`: 函数名+反引号+字符串
    - `super.c`
    - `super['c']`
    - `new.target`
    - `new Foo()`
    - 在取属性的时候，会使用到`Reference`类型，该类型不在7种语言类型之中，属于标准中的类型；delete, assign就会使用到`Reference`；如果执行加法或减法运算，就会对该类型进行解引用。
- Call 运算符
    - `foo()`
    - `super()`
    - `foo()['b']`
    - `foo().b`
    - foo()`abc`
- Left Handside & Right Handside
- Update, 自增运算，Right Handside
- Unary
    - delete a.b
    - void foo()
    - typeof a
    - +a
    - -a
    - ~a
    - !a
    - await a
- Exponental
    - **, JavaScript中唯一一个右结合的运算符: `3**2**3==3**(2**3)`
- Multiplicative: `* / %`
- Additive: `+ -`
- Shift: `<< >> >>>`
- Relationship: `< > <= >= instanceof in`
- Equality: `== != === !==`
- Bitwise: `& ^ |`
- Logical: `&& ||`, 短路逻辑
- Conditional: `a ? b : c`, 短路逻辑

## 类型转换

### 对象的拆箱转换

- ToPrimitive
- toString vs. valuesOf
- Symbol.toPrimitive

如果定义了`Symbol.toPrimitive`，就会忽略其他两个方法；

去掉`Symbol.toPrimitive`定义后，
当进行加法运算时，会优先调用`valueOf`方法，
当对象作为另一对象的属性名时，则优先调用`toString`方法。

### 布尔型转换

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

## 运行时相关概念

### Completion Record

Completion Record 主要用于描述语句的执行结果，其构成：

- `[[type]]`: normal, break, continue, return, or throw
- `[[value]]`: 基本类型
- `[[target]]`: label

## 简单语句和复合语句

### 简单语句

- ExpressionStatement: 表达式语句
- EmptyStatement
- DebuggerStament
- ThrowStatement: 抛出异常
- ContinueStatement
- BreakStatement
- ReturnStatement

### 复合语句

- BlockStatement
- IfStatement
- SwitchStatement: 效率一般，且容易出错，因此不如使用`if-else if`来替代
- IterationStatement
- WithStatement
- LabelledStatement
- TryStatement

## Declaration

- FunctionDeclaration
- GeneratorDeclaration
- AsyncFunctionDeclaration
- AsyncGeneratorDeclaration
- VariableStatement
- ClassDeclaration: `class`
- LexicalDeclaration: `const,let`

## 宏任务和微任务

- 宏任务
- 微任务（Promise）

### 事件循环

1. 获取代码
2. 执行代码
3. 等待获取代码
