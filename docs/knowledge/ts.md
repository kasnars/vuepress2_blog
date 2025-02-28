---
title: TypeScript知识点总结
date: 2022-02-08
tags:
 - TypeScript
 - 面经
categories:
 - 前端总结 
---


# TypeScript知识点总结
## TS基础概念
### TS的优缺点，为什么要用TS
::: details 点击查看
- 代码的可读性和可维护性(类型提醒)
- 编译阶段就能发现很多错误，避免线上bug
- 增强了编辑器和IDE的功能，方便代码补全，接口提示等
-------------
- 学习成本增加，接口，泛型等前端原本不常用的概念
- 前期会增加一些开发成本
- 一些js库和框架需要对ts做兼容，例如vue2对ts的支持就不好
- ts的编译需要时间，项目大后打包编译时间耗费比js大
:::

## TS语法
### TS里常见的类型
::: details 点击查看
常用：
- boolean, number, string, array, enum, any, void  
不常用：
- tuple null undefined never
:::
### interface和type的区别
::: details 点击查看
- interface可以进行类型继承，type不行
```ts
interface Hero {
  name: string;
  age: number;
  skill: string;
  skinNum?: number;
  say(): string; // say函数返回值为string
  [propname: string]: any; // 当前Hero可定义任意字符串类型的key
}
// 继承
interface littleSoldier extends Hero {
  rush(): string;
}
// 任意类型
interface IAnyObject {
  [key: string]: any;
}

type Hero = {
  name: string,
  age: number,
  skill: string,
  skinNum?: number,
};

```
:::
### 数组类型及对象数组类型声明
::: details 点击查看代码
```ts
interface IItem {
  id: number;
  name: string;
  isGod: boolean;
}
// 对象数组
const objectArr: IItem[] = [{ id: 1, name: '俊劫', isGod: true }];
// or
const objectArr: Array<IItem> = [{ id: 1, name: '俊劫', isGod: true }];

// 普通数组
const numberArr: number[] = [1, 2, 3];

const arr: (number | string)[] = [1, "string", 2];

```
:::
### tuple和array的区别
::: details 点击查看代码  

array仅需要类型对应，而tuple需要对应位置(下标)的类型以及数量全部对应才行
```ts
// 数组 某个位置的值可以是注解中的任何一个
const LOL: (string | number)[] = ["zed", 25, "darts"];

// 元祖 每一项数据类型必须一致
const LOL: [string, string, number] = ["zed", "darts", 25];

```
:::
### 联合类型|和交叉类型&
::: details 点击查看代码
```ts
// anjiao 某胖博主爱好
interface Waiter {
  anjiao: boolean;
  say: () => {};
}

interface Teacher {
  anjiao: boolean;
  skill: () => {};
}

// 联合类型
function judgeWho(animal: Waiter | Teacher) {}
// 交叉类型 
// 同名类型会进行合并，同名基础类型属性的合并返回：never
// 同名非基础类型属性可以正常合并
function judgeWho(jishi: Waiter & Teacher) {}

```
:::
### 泛型<>是什么
::: details 点击查看代码
- 泛型<>表示一个暂不确定的类型，具体的类型在调用的时候传入，T仅仅是一个占位符
```ts
// T 自定义名称
function myFun<T>(params: T[]) {
  return params;
}
myFun <string> (["123", "456"]);

// 定义多个泛型
function join<T, P>(first: T, second: P) {
  return `${first}${second}`;
}
join <number, string> (1, "2");

```
:::
### 断言是什么
::: details 点击查看代码
- as或者<>表示断言，指定当前值的类型
- jsx中必须用as
```ts
function judgeWho(animal: Waiter | Teacher) {
  if (animal.anjiao) {
    (animal as Teacher).skill();
  }else{
    (animal as Waiter).say();
  }
}

```
:::
### never和void的区别
::: details 点击查看
- void表示没有任何类型，never表示永远不存在的值的类型
:::

### TS类里有哪些关键字
::: details 点击查看
- public
- private 类的外部不可用，继承也不行
- protected 类的外部不可用，继承可以
- public readOnly xxx 只读属性
- static funcXXX 静态方法，不需要 new 就可以调用
- abstract funcXXX 抽象类，所有子类都必须要实现 funcXXX
:::

## TS常见工具类型
### Readonly<>
::: details 点击查看
- 将T中所有类型设为只读
```ts
type JUserModel3 = Readonly<UserModel>

// =
type JUserModel3 = {
    readonly name: string;
    readonly age?: number | undefined;
    readonly sex: number;
}

```
:::
### Pick<>
::: details 点击查看
- 在一个声明好的对象中，挑选一部分出来组成一个新的声明对象
```ts
interface Todo {
  title: string;
  description: string;
  done: boolean;
}

type TodoBase = Pick<Todo, "title" | "done">;

// =
type TodoBase = {
    title: string;
    done: boolean;
}

```
:::
### NonNullable<>
::: details 点击查看
- 去掉T中的所有null和undefined类型
:::



*该页面数据由本人编写+网上论坛整理所得*  

*参考数据地址*
- [一篇够用的TypeScript总结](https://juejin.cn/post/6981728323051192357)