---
title: JavaScript常见bug处理
date: 2023-09-04
tags:
 - JavaScript
categories:
 - BUG记录
---

### 控制台打开的情况下卡死
在测试环境中，打开控制台不久，就会逐渐卡死，内存泄漏  

```js
主要的原因是因为console.log在不断的打印一个10m大小的数据，轮询调用打印，window下的变量没有被及时回收，导致内存泄漏卡死
```