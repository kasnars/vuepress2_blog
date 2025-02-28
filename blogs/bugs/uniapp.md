---
title: uniapp常见bug处理
date: 2022-02-22
tags:
 - uni-app
categories:
 - BUG记录
---

### uni-app编写支付宝小程序时，地图组件的图片在安卓12下无法显示
- 安卓12以下以及ios需要用'/staic/xxx/xxx.png'的方式寻找
- 而安卓12需要通过'../../xxxx.png'相对路径的方式寻找
#### 解决方法
```js
onLoad(){
    try {
    const res = uni.getSystemInfoSync();
        this.systemVer = res.system
        this.systemPlat = res.platform
    } catch (e) {
        // error
    }
}

// methods
iconPathCompatible(path){
	return this.systemVer >= 12 && this.systemPlat === 'android' ? `../..${path}`:path
}
// 在设置path的时候把'/staic/xxxxxx'用这个函数包裹返回
```