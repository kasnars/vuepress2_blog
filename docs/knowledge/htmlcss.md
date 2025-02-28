---
title: HTML+CSS知识点总结
date: 2024-03-12
tags:
 - HTML
 - CSS
 - 面经
categories:
 - 前端总结 
---

## HTML相关

### HTML语义化的意义
::: details 答案
- 让人更容易读懂，增加代码的可读性，提升合作效率
- 让机器更容易读懂，利于SEO优化，无障碍阅读等功能
:::

### 块状元素和内联元素有哪些
::: details 答案
- 块状： display:block;display:table;div,h1,table,ul,ol,p
- 内联： display:inline;display:inline-block;span,img,input,button
:::



## CSS相关
### 盒模型宽度计算
::: details 答案
- offsetWidth = (内容宽度+内边距+边框)【无外边框】
:::

### margin纵向重叠是什么
::: details 答案
- 相邻的margin-top和margin-bottom会重叠，中间的空标签也会被重叠（塌陷）
:::

### margin各个方向的负值有什么效果
::: details 答案
- top，left为负值时，元素分别向上和左移动
- right为负时，右侧元素往左移动（右侧元素向自身靠近）
- bottom为负时，下方元素上移（下方元素向自身靠近）
:::

### 什么是BFC
::: details 答案
- 块级格式化上下文
- 一块独立渲染须臾，内部元素的渲染不会影响边界外元素
:::

### 形成BFC条件
::: details 答案
- 设置float（不为none）
- postion为absolute或fixed
- overflow不是visable
- displ为felx或者line-block等
:::

### 如何利用BFC清除浮动
::: details 答案
- overflow：hidden
:::

### 圣杯布局与双飞翼布局
::: details 答案
- 三栏布局，两侧内容固定，中间内容自适应
- 用于PC布局
- 实现方法
```css
float，position：absolute，flex，table，grid
/* 思路： float：1.两侧margin可以用负值2.防止中间的内容重叠一个padding一个margin */
```
:::

### 手写clearfix
::: details 答案
```css
.clearfix::after{
    content:'';
    display:table;
    clear:both;
}
```
:::

### flex常用属性
::: details 答案
```css
div{ 
    /* 主轴对齐方向 */
    flex-direction 
    /* 主轴对齐方式x */
    justify-content
    /* 交叉轴对齐方式y */
    align-item
    /* 换行 */
    flex-wary
    /* 子元素基于自身对齐 */
    align-flex
}
```
:::

### 基于flex实现一个三点骰子
::: details 答案
```css
.box{
    display:flex;
    justify-content:space-between;
}
.item:nth-child(2){
    align-self:center;
}
.item:nth-child(3){
    align-self:flex-end;
}
```
:::

### absolute和relative定位之间的区别
::: details 答案
- relative是根据自身来定位
- absolute是根据最近一层的定位元素定位（父元素往上找有absolute，relative，fixed的元素，没有的话直接找body）
:::

### 实现居中对齐
::: details 答案
- inline元素： text-align:center
- block元素: margin:0 auto
- absolute:left50%；margin-left:负值
:::

### 实现垂直居中
::: details 答案
- inline元素： line-height = 自身的height
- absolute:
    1. top;50%+margin-top负值
    2. transfrom(-50%,-50%)
    3. top,bottom,left,right都为0的时候：margin:auto
:::

### line-height继承逻辑
::: details 答案
- 具体数值直接继承
- 写比例则继承比例（1/2）
- 百分比情况下继承百分比计算后的值
:::

### rem是什么
::: details 答案
- 相对于根元素（html）的大小单位（em是相对于夫元素）
:::

### 响应式常见方案
::: details 答案
- media-query: 根据不同屏幕去设置html里的font-size
:::

### vh，vw是什么，相比rem有什么优势
::: details 答案
- rem的弊端： 具有阶梯型，需要一级一级设置
- 1vw为网页视口宽度的1/100
- 1vh为网页视口宽度的1/100
- vmax取两者的最大值，vmin取两者最小值
- window.innerHeight = 100vh
:::

### 网页视口尺寸是什么
::: details 答案
- 屏幕高度：window.screen.height
- 网页视口: window.innerHeight
- body高度: document.body.clientHeight
:::

