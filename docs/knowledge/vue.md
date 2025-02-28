---
title: Vue知识点总结
date: 2022-02-08
tags:
 - Vue
 - 面经
categories:
 - 前端总结 
---

# Vue知识点总结

## vue概念相关

### vue和react，angular的相同处
::: details 答案
- Vue 借鉴了 angular 的模板和数据绑定技术，又借鉴了 react 的组件化和虚拟 DOM 技术
:::

### 谈谈对vue的理解
::: details 答案
- 渐进式 JavaScript 框架、核心库加插件、动态创建用户界面（异步获取后台数据，数据展示在界面）
- MVVM 模式；代码简洁体积小，运行效率高，适合移动PC端开发；本身只关注 UI （和 react 相似），可以轻松引入 Vue 插件或其他的第三方库进行开发
:::

### MVVM是什么
::: details 答案
- Model-View-ViewModel ， Model 表示数据模型层。 view 表示视图层， ViewModel 是 View 和 Model 层的桥梁，数据绑定到 viewModel 层并自动渲染到页面中，视图变化通知 viewModel 层更新数据。
:::

## vue基础

::: tip
该部分为vue基础使用部分，如果不能回答出80%左右证明vue还不够熟悉
:::

### vue有哪些生命周期 
::: details 答案
- beforeCreate ：实例初始化之后，数据观测之前调用
- created：实例创建完之后调用。实例完成：数据观测、属性和方法的运算、 watch/event 事件回调。无 $el .
- beforeMount：在挂载之前调用，相关 render 函数首次被调用
- mounted：数据挂载了并被新创建的vm.$el替换，并挂载到实例上去之后调用该钩子。
- beforeUpdate：数据更新前调用，发生在虚拟DOM重新渲染和打补丁，在这之后会调用该钩子。
- updated：由于数据更改导致的虚拟DOM重新渲染和打补丁，在这之后会调用该钩子。
- beforeDestroy：实例销毁前调用，实例仍然可用。
- destroyed：实例销毁之后调用，调用后，Vue实例指示的所有东西都会解绑，所有事件监听器和所有子实例都会被移除
:::

### vue哪些生命周期常用，分别拿来干什么
::: details 答案
- created：实例已经创建完成，因为他是最早触发的，所以可以进行一些数据、资源的请求。(但一般不在这里发送网络请求，具体见下题)
- mounted：实例已经挂载完成，可以进行一些DOM操作，网络请求等。
- beforeUpdate：可以在这个钩子中进一步的更改状态，不会触发重渲染。
- updated：可以执行依赖于DOM的操作，但是要避免更改状态，可能会导致更新无线循环！！！
- destroyed：可以执行一些优化操作，清空计时器，解除绑定事件。
:::

### keep-alive 是什么
::: details 答案
- 把切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染。用作缓存当前组件。
- activated keep-alive组件激活时调用，该钩子在服务器端渲染期间不被调用。
- deactivated keep-alive组件停用时调用，该钩子在服务端渲染期间不被调用。
:::

### keep-alive对生命周期的影响
::: details 答案
新增两个keep-alive自身的生命周期
- activated keep-alive组件激活时调用，该钩子在服务器端渲染期间不被调用。
- deactivated keep-alive组件停用时调用，该钩子在服务端渲染期间不被调用。
:::

### 网络请求放在哪个生命周期，为什么
::: details 答案
- 一般放在 mounted 中，保证逻辑统一性，因为生命周期是同步执行的， ajax 是异步执行的。
- 但服务端渲染时 （ssr） 统一放在 created 中，因为服务端渲染不支持 mounted 方法
:::

### 什么时候使用beforeDestory
::: details 答案
- 当前页面使用 $on ，需要解绑事件。清楚定时器。解除事件绑定， scroll mousemove 。
:::


### 父子组件生命周期调用顺序
::: details 答案
- 渲染顺序：先父后子，完成顺序：先子后父
- 更新顺序：父更新导致子更新，子更新完成后父
- 销毁顺序：先父后子，完成顺序：先子后父
- **熟悉koa的可以联想洋葱圈模型**
:::

### 父子组件通信的方法
::: details 答案
- 父亲提供数据通过属性 props传给儿子；儿子通过 $on 绑父亲的事件，再通过 $emit 触发自己的事件（发布订阅）
- 利用父子关系 $parent 、 $children 
- 父组件提供数据，子组件注入。 provide 、 inject ，插件用得多
- ref 获取组件实例，调用组件的属性、方法
- 跨组件通信 Event Bus （Vue.prototype.bus = new Vue）其实基于bus=newVue）其实基于on与$emit
- vuex 状态管理实现通信
:::

### VUE3中所新增的父子通信方法
::: details 答案
- provide，inject
- 父组件用provide提供数据，子组件用inject接收
:::

### computed 和 watch对比
::: details 答案
- computed：默认computed也是一个watcher具备缓存，只有当依赖的数据变化时才会计算, 当数据没有变化时, 它会读取缓存数据。如果一个数据依赖于其他数据，使用 computed。
- 每次都需要执行函数。 watch 更适用于数据变化时的异步操作。如果需要在某个数据变化时做一些事情，使用watch。
:::

### v-if和v-show的区别
::: details 答案
- v-if 如果条件不成立不会渲染当前指令所在节点的DOM元素。
- v-show 只是切换当前DOM的显示与隐藏(dom已经被渲染了)。
- 需要频繁切换的时候用v-show，很少切换或者仅仅做逻辑判断用v-for，减少没必要的重复渲染，提升性能
:::

### v-for和v-if为什么不能连用
::: details 答案
- v-for 会比 v-if 的优先级更高，连用的话会把 v-if 的每个元素都添加一下，造成性能问题。
* tips:关于v-for与v-if谁的优先级更高网上众说纷纭，但是这两个优先级确实有区别
:::

### v-html 会导致哪些问题
::: details 答案
- XSS攻击
- v-html 会替换标签内部的元素
:::

### 为什么vue里的data是一个函数
::: details 答案
避免组件中的数据互相影响。同一个组件被复用多次会创建多个实例，如果 data 是一个对象的话，这些实例用的是同一个构造函数。为了保证组件的数据独立，要求每个组件都必须通过 data 函数返回一个对象作为组件的状态。
:::

### 为什么要使用异步组件
::: details 答案
- 节省打包出的结果，异步组件分开打包，采用jsonp的方式进行加载，有效解决文件过大的问题。
- 核心就是包组件定义变成一个函数，依赖 import（） 语法，可以实现文件的分割加载。
:::

### action和mutation的区别
::: details 答案
- mutation 是同步更新， $watch 严格模式下会报错
- action 是异步操作，可以获取数据后调用 mutation 提交最终数据
:::

### 插槽是什么
::: details 答案
- 创建组件虚拟节点时，会将组件儿子的虚拟节点保存起来。当初始化组件时，通过插槽属性将儿子进行分类 {a:[vnode],b[vnode]}
- 渲染组件时会拿对应的 slot 属性的节点进行替换操作。（插槽的作用域为父组件）
:::

### 作用域插槽是什么
::: details 答案
- 作用域插槽在解析的时候不会作为组件的孩子节点。会解析成函数，当子组件渲染时，会调用此函数进行渲染。
- 普通插槽渲染的作用域是父组件，作用域插槽的渲染作用域是当前子组件。
:::

### vue中相同逻辑如何抽离
::: details 答案
- vue.mixin方法（vue2）
- 但是mixin并不好，有很多的副作用，比如重名冲突等
:::

### vue性能优化
::: details 答案
四个方面：代码层面，用户体验层面，vue自身，浏览器层面
1. 代码
    - 事件代理
    - keep-alive
    - 拆分组件
    - key 保证唯一性
    - 路由懒加载、异步组件
    - 防抖节流
2. 用户
    - app-skeleton 骨架屏
    - pwa
3. vue框架打包加载等
    - 第三方模块按需导入（ babel-plugin-component ）
    - 图片懒加载
4. 浏览器
    - seo优化，预渲染
:::


## vue原理

### vue2如何实现响应式数据(响应式数据原理)
::: details 答案
- 利用Object.defineProperty 重新定义 data 中所有的属性， Object.defineProperty 可以使数据的获取与设置增加一个拦截的功能，拦截属性的获取，进行依赖收集。拦截属性的更新操作，进行通知。
- 具体过程(进阶):首先Vue使用 initData 初始化用户传入的参数，然后使用  new Observer 对数据进行观测，如果数据是一个对象类型就会调用 this.walk（value） 对对象进行处理，内部使用  defineeReactive  循环对象属性定义响应式变化，核心就是使用 Object.defineProperty 重新定义数据。
:::

### vue如何监听数组变化
::: details 答案
- 是用来函数劫持的方式，重写了数组方法（pop 、 push 、 shift 、 unshift 、 splice 、 sort 、 reverse），具体呢就是更改了数组的原型，更改成自己的，用户调数组的一些方法的时候，走的就是自己的方法，然后通知视图去更新。  
- 数组里每一项可能是对象，那么我就是会对数组的每一项进行观测，（且只有数组里的对象才能进行观测，观测过的也不会进行观测）
- vue3：改用 proxy ，可直接监听对象数组的变化。
:::

### 描述组件渲染和更新的过程
::: details 答案
- 渲染组件时，会通过 vue.extend() 方法构建子组件的构造函数，并进行实例化。最终手动调用 $mount() 进行挂载。
- 更新组件时会进行 patchVnode 流程，核心就是 diff 算法。
:::


### vue事件绑定原理
::: details 答案
- 原生 DOM 的绑定：Vue在创建真实DOM时会调用 createElm ，默认会调用 invokeCreateHooks 。会遍历当前平台下相对的属性处理代码，其中就有 updateDOMListeners 方法，内部会传入 add（） 方法
- 组件绑定事件，原生事件，自定义事件：组件绑定之间是通过Vue中自定义的 $on 方法实现的。
:::

### v-model的原理
::: details 答案
- v-model 可以看成是 value+input 方法的语法糖（组件）。原生的 v-model ，会根据标签的不同生成不同的事件与属性。解析一个指令来。
- 自己实现v-model：自己写 model 属性，里面放上 prop 和 event
:::

### vue渲染是异步还是同步，为什么？
::: details 答案
- vue是组件级更新，如果不采用异步更新的话，每次其中一部分改变都会导致整个大组件重新渲染，影响性能，所以vue会在本轮更新结束后异步更新视图，核心思想是nextTick
- 自己实现v-model：自己写 model 属性，里面放上 prop 和 event
- 异步更新原理(进阶): 通知 watcher进行更新， subs[i].update 依次调用 watcher 的 update ， queueWatcher 将watcher 去重放入队列， nextTick（ flushSchedulerQueue ）在下一tick中刷新watcher队列（异步）
:::

### 谈谈$nextTick
::: details 答案
- 用于异步获取dom节点 原因是因为vue异步渲染
- 异步方法，异步渲染最后一步，与JS事件循环联系紧密。主要使用了宏任务微任务（setTimeout、promise那些），定义了一个异步方法，多次调用nextTick会将方法存入队列，通过异步方法清空当前队列。
:::

### Vuex 是什么？并且谈谈工作原理？有什么用？
::: details 答案
- vuex是一个专为vue打造的状态管理模式
- vuex组成：
    - state：state是存储的单一状态，是存储的基本数据。
    - Getters：getters是store的计算属性，对state的加工，是派生出来的数据。
    - Mutations： mutations提交更改数据，使用store.commit方法更改state存储的状态。（mutations同步函数）。
    - Actions：actions像一个装饰器，提交mutation，而不是直接变更状态。（actions可以包含任何异步操作）。
    - Module： Module是store分割的模块，每个模块拥有自己的state、getters、mutations、actions。
- 为什么要用vuex？：
    - vuex，多组件共享状态。
    - 多个视图依赖于同一状态。
    - 来自不同视图的行为需要变更同一状态。
:::

### 如何从虚拟dom转化为真实dom
::: details 答案
涉及到Vue中的模板编译原理，主要过程：
1. 将模板转换成 ast 树， ast 用对象来描述真实的JS语法（将真实DOM转换成虚拟DOM）
2. 优化树
3. 将 ast 树生成代码
:::

### 什么是vnode？vnode如何描述dom结构
::: details 答案
虚拟节点就是用一个对象来描述一个真实的DOM元素。首先将 template （真实DOM）先转成 ast ， ast 树通过 codegen 生成 render 函数， render 函数里的 _c 方法将它转为虚拟dom
- template -> ast -> render -> dom
:::

### 手写一段vnode(进阶)
::: details 答案
```js
// real dom
<div id="container"><p></p></div>
// 下面就描述了上面的dom

// vnode
let obj = {
  tag: 'div',
  data: {
    id: 'container'
  },
  children: [{
    tag: 'p',
    data: {},
    children: []
  }]
}

// render
render () {
  return _c('div', {id: 'container'}, _c('p', {}))
}
```
:::
### diff算法的时间复杂度
::: details 答案
- O(n)  

个树的完全 diff 算法是一个时间复杂度为 O(n*3） ，vue进行优化转化成 O(n) 。
:::

### 对vue中diff的理解以及运作方式
::: details 答案
- 最小量更新， key 很重要。这个可以是这个节点的唯一标识，告诉 diff 算法，在更改前后它们是同一个DOM节点 （v-for需要key的原因）
- 只有是同一个虚拟节点才会进行精细化比较，否则就是暴力删除旧的，插入新的。
- 只进行同层比较，不会进行跨层比较。
:::

### diff算法的优化策略(进阶)
::: details 答案
四种命中查找，四个指针
- 旧前与新前（先比开头，后插入和删除节点的这种情况）
- 旧后与新后（比结尾，前插入或删除的情况）
- 旧前与新后（头与尾比，此种发生了，涉及移动节点，那么新前指向的节点，移动到旧后之后）
- 旧后与新前（尾与头比，此种发生了，涉及移动节点，那么新前指向的节点，移动到旧前之前）
:::



*该页面数据由本人编写+网上论坛整理所得*  

*参考数据地址*
- [化身面试官出30+Vue面试题，超级干货（附答案）｜牛气冲天新年征文](https://juejin.cn/post/6930897845369356295)