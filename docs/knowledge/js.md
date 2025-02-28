---
title: JavaScript知识点总结
date: 2022-02-15
tags:
 - JavaScript
 - 面经
categories:
 - 前端总结 
---



# JavaScript知识点总结

## 语法基础

### 值类型与引用类型
::: details 答案
- 值类型复制后改变值不会改变原始值，而引用类型改变会导致原先的值也被改变
```js
let a = 1
let b = a
b++
// a   1
// b   2
```
```js
let a = { c: 1}
let b = a
b.c = 2
// a.c   2
// b.c   2
```
- 值类型的值直接存在栈中，而引用类型值存在堆中，栈中存放的只是引用地址
:::

### 值类型和引用类型分开处理的原因
::: details 答案
- 提高性能
- 减少内存消耗
:::

### typeof方法可以识别哪些类型
::: details 答案
- 识别出所有的值类型
- 识别函数
- 判断是否为引用类型（Object）数组对象用typeof全部返回object
```js
console.log(typeof 2);               // number
console.log(typeof true);            // boolean
console.log(typeof 'str');           // string
console.log(typeof []);              // object    
console.log(typeof function(){});    // function
console.log(typeof {});              // object
console.log(typeof undefined);       // undefined
console.log(typeof null);            // object
```
:::

### instanceof
::: details 答案
- instanceof可以正确判断对象的类型，其内部运行机制是判断在其原型链中能否找到该类型的原型。
- instanceof只能正确判断引用数据类型，而不能判断基本数据类型
```js
console.log(2 instanceof Number);                    // false
console.log(true instanceof Boolean);                // false 
console.log('str' instanceof String);                // false 
 
console.log([] instanceof Array);                    // true
console.log(function(){} instanceof Function);       // true
console.log({} instanceof Object);                   // true

```
:::

### 什么时候出现字符串拼接
::: details 答案
- 只要加号两边有一个为字符串，则此“+”被视为字符串拼接
```js
true + '10' //true10
```
:::

### constructor有什么用
::: details 答案
1. 用作构造函数
2. 用来判断类型
```js
console.log((2).constructor === Number); // true
console.log((true).constructor === Boolean); // true
console.log(('str').constructor === String); // true
console.log(([]).constructor === Array); // true
console.log((function() {}).constructor === Function); // true
console.log(({}).constructor === Object); // true
```
- 如果原型被改变的话，则不能通过构造函数访问他的类型
```js
function Fn(){};
 
Fn.prototype = new Array();
 
var f = new Fn();
 
console.log(f.constructor===Fn);    // false
console.log(f.constructor===Array); // true

```
:::

### Object.prototype.toString.call()
::: details 答案
- 使用 Object 对象的原型方法 toString 来判断数据类型：
```js
var a = Object.prototype.toString;
 
console.log(a.call(2));
console.log(a.call(true));
console.log(a.call('str'));
console.log(a.call([]));
console.log(a.call(function(){}));
console.log(a.call({}));
console.log(a.call(undefined));
console.log(a.call(null));

```
:::

### 同样是检测对象obj调用toString方法，obj.toString()的结果和Object.prototype.toString.call(obj)的结果不一样，这是为什么？
::: details 答案
- 这是因为toString是Object的原型方法，而Array、function等类型作为Object的实例，都重写了toString方法。
:::

### 判断是否为数组的方式有哪些
::: details 答案
- Object.prototype.toString.call()
- 通过原型链做判断
```js
obj.__proto__ === Array.prototype;
```
- 通过ES6的Array.isArray()做判断
- 通过instanceof做判断
- 通过Array.prototype.isPrototypeOf
:::

### null和undefined区别
::: details 答案
- Undefined 和 Null 都是基本数据类型，这两个基本数据类型分别都只有一个值，就是 undefined 和 null
- undefined 代表的含义是未定义，null 代表的含义是空对象
- 一般变量声明了但还没有定义的时候会返回 undefined，null主要用于赋值给一些可能会返回对象的变量，作为初始化。
:::

### typeof null 的结果是什么，为什么？
::: details 答案
- typeof null 的结果是Object。
- null的类型标签也是000，和Object的类型标签一样，所以会被判定为Object。
```js
// js底层数据标签（机器码）
000: object   - 当前存储的数据指向一个对象。
  1: int      - 当前存储的数据是一个 31 位的有符号整数。
010: double   - 当前存储的数据指向一个双精度的浮点数。
100: string   - 当前存储的数据指向一个字符串。
110: boolean  - 当前存储的数据是布尔值。
// null全为0 与obj相同
// undefined的值是 (-2)30(一个超出整数范围的数字)；
```
:::

### instanceof原理以及实现(手撕instanceof)
::: details 答案
- instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。
```js
function myInstanceof(left, right) {
  // 获取对象的原型
  let proto = Object.getPrototypeOf(left)
  // 获取构造函数的 prototype 对象
  let prototype = right.prototype; 
 
  // 判断构造函数的 prototype 对象是否在对象的原型链上
  while (true) {
    if (!proto) return false;
    if (proto === prototype) return true;
    // 如果没有找到，就继续从其原型上找，Object.getPrototypeOf方法用来获取指定对象的原型
    proto = Object.getPrototypeOf(proto);
  }
}
```
:::

### 为什么0.1+0.2 ! == 0.3，如何让其相等 
::: details 答案
- 遵循IEEE 754标准，使用64位固定长度来表示 浮点运算精度丢失
```js
(n1 + n2).toFixed(2) // 注意，toFixed为四舍五入
```
:::

### 如何获取安全的undefined值
::: details 答案
- 因为undefined是一个标识符，所有可以被用来当作变量使用和赋值，但是会影响正常判断，想要获取安全的undefined可以通过void 0 来获取

:::
### type of NaN？
::: details 答案
```js
typeof NaN; // "number"

```
- NaN 是一个特殊值，它和自身不相等，是唯一一个非自反（自反，reflexive，即 x === x 不成立）的值。而 NaN !== NaN 为 true。
:::

### isNaN 和 Number.isNaN 函数的区别？
::: details 答案
- 函数 isNaN 接收参数后，会尝试将这个参数转换为数值，任何不能被转换为数值的的值都会返回 true，因此非数字值传入也会返回 true ，会影响 NaN 的判断。
- 函数 Number.isNaN 会首先判断传入参数是否为数字，如果是数字再继续判断是否为 NaN ，不会进行数据类型的转换，这种方法对于 NaN 的判断更为准确。
- *总结：Number.isNaN会先判断是不是数字，而isNaN不会，导致isNaN判断非数字的值时会直接返回NaN*

:::

### ==的转换规则
::: details 答案
1. 首先会判断两者类型是否相同，相同的话就比较两者的大小；
2. 类型不相同的话，就会进行类型转换；
3. 会先判断是否在对比 null 和 undefined，是的话就会返回 true
```js
null == undefined   //true
```
4. 判断两者类型是否为 string 和 number，是的话就会将字符串转换为 number
5. 判断其中一方是否为 boolean，是的话就会把 boolean 转为 number 再进行判断
6. 判断其中一方是否为 object 且另一方为 string、number 或者 symbol，是的话就会把 object 转为原始类型再进行判断
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c451c19e23dd4726b3f36223b6c18a1e~tplv-k3u1fbpfcp-watermark.awebp)
:::

### 其他值转字符串的规则
::: details 答案
1. Null 和 Undefined 类型 ，null 转换为 "null"，undefined 转换为 "undefined"
2. Boolean 类型，true 转换为 "true"，false 转换为 "false"
3. Number 类型的值直接转换，不过那些极小和极大的数字会使用指数形式
4. Symbol 类型的值直接转换，但是只允许显式强制类型转换，使用隐式强制类型转换会产生错误
5. 对普通对象来说，除非自行定义 toString() 方法，否则会调用 toString()（Object.prototype.toString()）来返回内部属性 [[Class]] 的值，如"[object Object]"。如果对象有自己的 toString() 方法，字符串化时就会调用该方法并使用其返回值。
:::

### 其他值到数字值的转换规则？
::: details 答案
1. Undefined 类型的值转换为 NaN。
2. Null 类型的值转换为 0。
3. Boolean 类型的值，true 转换为 1，false 转换为 0。
4. String 类型的值转换如同使用 Number() 函数进行转换，如果包含非数字值则转换为 NaN，空字符串为 0。
5. Symbol 类型的值不能转换为数字，会报错。
6. 对象（包括数组）会首先被转换为相应的基本类型值，如果返回的是非数字的基本类型值，则再遵循以上规则将其强制转换为数字。
:::

### 哪些值在转换为布尔值的时候会被转为false
::: details 答案
```js
以下这些是假值： • undefined • null • false • +0、-0 和 NaN • ""
```
- 除了这7个值以外都会被转为true
:::

### Object.is() 与比较操作符 “===”、“==” 的区别？
::: details 答案
- 使用双等号（==）进行相等判断时，如果两边的类型不一致，则会进行强制类型转化后再进行比较。
- 使用三等号（===）进行相等判断时，如果两边的类型不一致时，不会做强制类型准换，直接返回 false。
- 使用 Object.is 来进行相等判断时，一般情况下和三等号的判断相同，它处理了一些特殊的情况，比如 -0 和 +0 不再相等，两个 NaN 是相等的。
:::

### 什么是 JavaScript 中的包装类型？
::: details 答案
- 在 JavaScript 中，基本类型是没有属性和方法的，但是为了便于操作基本类型的值，在调用基本类型的属性或方法时 JavaScript 会在后台隐式地将基本类型的值转换为对象.
```js
const a = "abc";
a.length; // 3
a.toUpperCase(); // "ABC"
// 在访问'abc'.length时，JavaScript 将'abc'在后台转换成String('abc')，然后再访问其length属性。
```
- JavaScript也可以使用Object函数显式地将基本类型转换为包装类型
- 也可以使用valueOf方法将包装类型倒转成基本类型
:::

### new一个对象的过程
::: details 答案
1. 创建一个对象
2. 将构造函数的作用域赋给新对象（也就是将对象的__proto__属性指向构造函数的prototype属性）
3. 指向构造函数中的代码，构造函数中的this指向该对象（也就是为这个对象添加属性和方法）
4. 返回新的对象
:::


## es6

### let、const、var的区别
::: details 答案
1. 块级作用域
2. 变量提升
3. 给全局添加属性： 浏览器的全局对象是window，Node的全局对象是global。var声明的变量为全局变量，并且会将该变量添加为全局对象的属性，但是let和const不会。
4. 重复声明： var声明变量时，可以重复声明变量，后声明的同名变量会覆盖之前声明的遍历。const和let不允许重复声明变量。
5. 暂时性死区
6. 初始值设置： 在变量声明时，var 和 let 可以不用设置初始值。而const声明变量必须设置初始值。
7. 指针指向： let和const都是ES6新增的用于创建变量的语法。 let创建的变量是可以更改指针指向（可以重新赋值）。但const声明的变量是不允许改变指针的指向。
:::

### const对象的属性可以修改吗
::: details 答案
- const保证的并不是变量的值不能改动，而是变量指向的那个内存地址不能改动。对于基本类型的数据（数值、字符串、布尔值），其值就保存在变量指向的那个内存地址，因此等同于常量。
:::

### new一个箭头函数会怎么样
::: details 答案
- 箭头函数是ES6中的提出来的，它没有prototype，也没有自己的this指向，更不可以使用arguments参数，所以不能New一个箭头函数。

:::

### 箭头函数与普通函数的区别
::: details 答案
- 箭头函数比普通函数更加简洁
- 箭头函数没有自己的this
- 箭头函数继承来的this指向永远不会改变
- call()、apply()、bind()等方法不能改变箭头函数中this的指向
- 箭头函数不能作为构造函数使用
- 箭头函数没有自己的arguments
- 箭头函数没有prototype
- 箭头函数不能用作Generator函数，不能使用yeild关键字
:::

### 箭头函数的this指向哪里
::: details 答案
- 箭头函数不同于传统JavaScript中的函数，箭头函数并没有属于⾃⼰的this，它所谓的this是捕获其所在上下⽂的 this 值，作为⾃⼰的 this 值，并且由于没有属于⾃⼰的this
:::

### Proxy可以实现什么功能
::: details 答案
- 在 Vue3.0 中通过 Proxy 来替换原本的 Object.defineProperty 来实现数据响应式。
- Proxy 是 ES6 中新增的功能，它可以用来自定义对象中的操作。
```js
let p = new Proxy(target, handler)
// target 代表需要添加代理的对象，handler 用来自定义对象中的操作，比如可以用来自定义 set 或者 get 函数。
```
:::

### 对 rest 参数的理解
::: details 答案
- 扩展运算符被用在函数形参上时，它还可以把一个分离的参数序列整合成一个数组
```js
function mutiple(...args) {
  let result = 1;
  for (var val of args) {
    result *= val;
  }
  return result;
}
mutiple(1, 2, 3, 4) // 24

```
:::

## JavaScript基础

### new操作符的实现原理
::: details 答案
1. 首先创建了一个新的空对象
2. 设置原型，将对象的原型设置为函数的 prototype 对象。
3. 让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）
4. 判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。

:::

### Map和Objct的区别
::: details 答案

|   | Map  | Object|
|  ----  | ----  | --- |
| 意外的键  | 	Map默认情况不包含任何键，只包含显式插入的键 | 	Object 有一个原型, 原型链上的键名有可能和自己在对象上的设置的键名产生冲突。|
| 键的类型  | Map的键可以是任意值，包括函数、对象或任意基本类型。 | 	Object 的键必须是 String 或是Symbol。 |
| 键的顺序  | Map 中的 key 是有序的。因此，当迭代的时候， Map 对象以插入的顺序返回键值 | Object 的键是无序的 |
| Size  | Map 的键值对个数可以轻易地通过size 属性获取 | Object 的键值对个数只能手动计算 |
| 迭代  | Map 是 iterable 的，所以可以直接被迭代 | 迭代Object需要以某种方式获取它的键然后才能迭代。 |
| 性能  | 	在频繁增删键值对的场景下表现更好。 | 在频繁添加和删除键值对的场景下未作出优化。 |

:::

### map和weakMap的区别

::: details 答案
- WeakMap 结构与 Map 结构类似，也是用于生成键值对的集合。但是 WeakMap 只接受对象作为键名（ null 除外），不接受其他类型的值作为键名。而且 WeakMap 的键名所指向的对象，不计入垃圾回收机制。
:::

### 对Json的理解
::: details 答案
- JSON 是一种基于文本的轻量级的数据交换格式。它可以被任何的编程语言读取和作为数据格式来传递。

- 因为 JSON 的语法是基于 js 的，因此很容易将 JSON 和 js 中的对象弄混，但是应该注意的是 JSON 和 js 中的对象不是一回事，JSON 中对象格式更加严格，比如说在 JSON 中属性值不能为函数，不能出现 NaN 这样的属性值等，因此大多数的 js 对象是不符合 JSON 对象的格式的。

:::

###  JavaScript脚本延迟加载的方式有哪些？

::: details 答案
- defer 属性： 给 js 脚本添加 defer 属性，这个属性会让脚本的加载与文档的解析同步解析，然后在文档解析完成后再执行这个脚本文件，这样的话就能使页面的渲染不被阻塞。多个设置了 defer 属性的脚本按规范来说最后是顺序执行的，但是在一些浏览器中可能不是这样。
- async 属性： 给 js 脚本添加 async 属性，这个属性会使脚本异步加载，不会阻塞页面的解析过程，但是当脚本加载完成后立即执行 js 脚本，这个时候如果文档没有解析完成的话同样会阻塞。多个 async 属性的脚本的执行顺序是不可预测的，一般不会按照代码的顺序依次执行。
- 动态创建 DOM 方式： 动态创建 DOM 标签的方式，可以对文档的加载事件进行监听，当文档加载完成后再动态的创建 script 标签来引入 js 脚本。
- 使用 setTimeout 延迟方法： 设置一个定时器来延迟加载js脚本文件
让 JS 最后加载： 将 js 脚本放在文档的底部，来使 js 脚本尽可能的在最后来加载执行。
:::

### 如何遍历类数组

::: details 答案
- 使用call方法
```js
function foo(){ 
  Array.prototype.forEach.call(arguments, a => console.log(a))
}

```
- 使用Array.from方法将类数组转化成数组
- 使用展开运算符将类数组转化成数组
:::

### ES6模块与CommonJS模块有什么异同
::: details 答案
- 不同
  - CommonJS是对模块的浅拷⻉，ES6 Module是对模块的引⽤，即ES6 Module只存只读，不能改变其值，也就是指针指向不能变，类似const
  - import的接⼝是read-only（只读状态），不能修改其变量值。 即不能修改其变量的指针指向，但可以改变变量内部指针指向，可以对commonJS对重新赋值（改变指针指向），但是对ES6 Module赋值会编译报错
- 共同点
  - CommonJS和ES6 Module都可以对引⼊的对象进⾏赋值，即对对象内部属性的值进⾏改变。
:::

### 如何判断一个对象是否属于某个类
::: details 答案
- 第一种方式，使用 instanceof 运算符来判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。
- 第二种方式，通过对象的 constructor 属性来判断，对象的 constructor 属性指向该对象的构造函数，但是这种方式不是很安全，因为 constructor 属性可以被改写。
- 第三种方式，如果需要判断的是某个内置的引用类型的话，可以使用 Object.prototype.toString() 方法来打印对象的[[Class]] 属性来进行判断。
:::

### for...in和for...of的区别
::: details 答案
- for…of 遍历获取的是对象的键值，for…in 获取的是对象的键名；
- for… in 会遍历对象的整个原型链，性能非常差不推荐使用，而 for … of 只遍历当前对象不会遍历原型链；
- 对于数组的遍历，for…in 会返回数组中所有可枚举的属性(包括原型链上可枚举的属性)，for…of 只返回数组的下标对应的属性值；

- 总结：for...in 循环主要是为了遍历对象而生，不适用于遍历数组；for...of 循环可以用来遍历数组、类数组对象，字符串、Set、Map 以及 Generator 对象。
:::