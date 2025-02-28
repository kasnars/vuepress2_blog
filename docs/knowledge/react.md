---
title: React知识点总结
date: 2022-02-09
tags:
 - React
 - 面经
categories:
 - 前端总结 
---




# React知识点总结

## 组件基础

### react事件机制
::: details 答案
```jsx
<div onClick={this.handleClick.bind(this)}>点我</div>
```
React并不是将click事件绑定到了div的真实DOM上，而是在document处监听了所有的事件，当事件发生并且冒泡到document处的时候，React将事件内容封装并交由真正的处理函数运行。这样的方式不仅仅减少了内存的消耗，还能在组件挂在销毁时统一订阅和移除事件。
:::

### 合成事件
::: details 答案
- JSX 上写的事件并没有绑定在对应的真实 DOM 上，而是通过事件代理的方式，将所有的事件都统一绑定在了 document 上。这样的方式不仅减少了内存消耗，还能在组件挂载销毁时统一订阅和移除事件。
- 另外冒泡到 document 上的事件也不是原生浏览器事件，而是 React 自己实现的合成事件（SyntheticEvent）。因此我们如果不想要事件冒泡的话，调用 event.stopPropagation 是无效的，而应该调用 event.preventDefault。
:::

### 合成事件的目的
::: details 答案
- 兼容所有浏览器，更好的跨平台；
- 将事件统一存放在一个数组，避免频繁的新增与删除（垃圾回收）。
- 方便 react 统一管理和事务机制。
:::

### React的事件和普通原生事件有什么不同
::: details 答案
- 对于事件名称命名方式，原生事件为全小写，react 事件采用小驼峰；
- 对于事件函数处理语法，原生事件为字符串，react 事件为函数；
- react 事件不能采用 return false 的方式来阻止浏览器的默认行为，而必须要地明确地调用preventDefault()来阻止默认行为。
:::

### React事件与原生事件的执行顺序
::: details 答案
- 事件的执行顺序为原生事件先执行，合成事件后执行。
- 合成事件会冒泡绑定到 document 上，所以尽量避免原生事件与合成事件混用，如果原生事件阻止冒泡，可能会导致合成事件不执行，因为需要冒泡到document 上合成事件才会执行。
:::

### React 组件中怎么做事件代理？它的原理是什么？
::: details 答案
- React基于Virtual DOM实现了一个SyntheticEvent层（合成事件层），事件处理器会接收到一个合成事件对象的实例，所有的事件都自动绑定在最外层上。
:::

### React底层对合成事件做了什么
::: details 答案
- 事件委派
    - React会把所有的事件绑定到结构的最外层，使用统一的事件监听器，这个事件监听器上维持了一个映射来保存所有组件内部事件监听和处理函数
- 自动绑定
    - React组件中，每个方法的上下文都会指向该组件的实例，即自动绑定this为当前组件。
:::

### HOC是什么
::: details 答案
- 高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧。它是一种基于 React 的组合特性而形成的设计模式。  
- 简言之，HOC是一种组件的设计模式，HOC接受一个组件和额外的参数（如果需要），返回一个新的组件。HOC 是纯函数，没有副作用。
:::

### HOC的优缺点
::: details 答案
- 优点∶ 逻辑服用、不影响被包裹组件的内部逻辑。  
- 缺点∶ hoc传递给被包裹组件的props容易和被包裹后的组件重名，进而被覆盖
:::

### Render props是什么
::: details 答案
- "render prop"是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术 类似vue的props
:::

### props的优缺点
::: details 答案
- 优点：数据共享、代码复用，将组件内的state作为props传递给调用者，将渲染逻辑交给调用者。
- 缺点：无法在 return 语句外访问数据、多层嵌套写法不够优雅
:::

### Hook是什么
::: details 答案
- Hook是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。通过自定义hook，可以复用代码逻辑。
:::

### Hook的优点
::: details 答案
- 使用直观；
- 解决hoc的prop 重名问题；
- 解决render props 因共享数据 而出现嵌套地狱的问题；
- 能在return之外使用数据的问题。
:::

### Component, Element, Instance 之间有什么区别和联系
::: details 答案
- 元素 
    - 一个元素element是一个普通对象(plain object)，描述了对于一个DOM节点或者其他组件component，你想让它在屏幕上呈现成什么样子。元素element可以在它的属性props中包含其他元素(译注:用于形成元素树)。创建一个React元素element成本很低。元素element创建之后是不可变的
- 组件
    - 一个组件component可以通过多种方式声明。可以是带有一个render()方法的类，简单点也可以定义为一个函数。这两种情况下，它都把属性props作为输入，把返回的一棵元素树作为输出。
- 实例
    - 一个实例instance是你在所写的组件类component class中使用关键字this所指向的东西(译注:组件实例)。它用来存储本地状态和响应生命周期事件很有用。
- 函数式组件(Functional component)根本没有实例instance。类组件(Class component)有实例instance
:::

### 对componentWillReceiveProps 的理解
::: details 答案
- 该方法当props发生变化时执行，初始化render时不执行，在这个回调函数里面，你可以根据属性的变化，通过调用this.setState()来更新你的组件状态，旧的属性还是可以通过this.props来获取,这里调用更新状态是安全的，并不会触发额外的render调用。
- 一般用于父组件状态更新时子组件的重新渲染。
:::

### 哪些方法会触发React的重新渲染
::: details 答案
- setState()方法被调用 (传入的值为null的时候不会重新渲染)
- 父组件重新渲染，只要父组件重新渲染，无论props是否变化，子组件都将重新渲染
:::

### 重新渲染时render会做些什么
::: details 答案
- 会对新旧 VNode 进行对比，也就是我们所说的Diff算法
- 对新旧两棵树进行一个深度优先遍历，这样每一个节点都会一个标记，在到深度遍历的时候，每遍历到一和个节点，就把该节点和新的节点树进行对比，如果有差异就放到一个对象里面
- 遍历差异对象，根据差异的类型，根据对应对规则更新VNode
:::

### React声明组件有哪几种方法
::: details 答案
- 函数式定义的无状态组件
- ES5原生方式React.createClass定义的组件(会自动绑定函数，导致不必要的性能开销)
- ES6形式的extends React.Component定义的组件
:::

### 有状态组件和无状态组件的区别和特点
::: details 答案
- 有状态组件
    - 是类组件
    - 有继承
    - 可以使用this
    - 可以使用react的生命周期
    - 内部使用 state，维护自身状态的变化，有状态组件根据外部组件传入的 props 和自身的 state进行渲染。
- 无状态组件
    - 不依赖自身的状态state
    - 可以是类组件或者函数组件。
    - 可以完全避免使用 this 关键字。（由于使用的是箭头函数事件无需绑定）
    - 组件内部不维护 state ，只根据外部组件传入的 props 进行渲染的组件，当 props 改变时，组件重新渲染。
:::

### React里的Fragment是什么
::: details 答案
- React 中的一个常见模式是一个组件返回多个元素。Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。
- *即将其作为一个占位的标签，用来包裹内部所有元素使其变成一个大标签*
:::

### React如何获取页面内dom元素
::: details 答案
- 字符串格式：
    ```jsx
    <p ref="info">span</p>
    ```
- 函数格式：
    ```jsx
    <p ref={ele => this.info = ele}></p>
    <!-- ref对应一个方法，并传一个参数作为节点的实例 -->
    ```
- createRef()方法 React16
    ```jsx
    class MyComponent extends React.Component {
        constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    render() {
        return <div ref={this.myRef} />;
    }
}
    ```
:::

### render阶段可以访问refs吗？为什么？
::: details 答案
- 不能，render阶段里dom还未生成，获取需要在pre-commit阶段和commit阶段
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/98a52a67abd14d8cb2ba1fc00c0662a2~tplv-k3u1fbpfcp-watermark.awebp)
:::

### React中受控组件与非受控组件是什么
::: details 答案
- 受控组件:在使用表单来收集用户输入时，例如`<input><select><textearea>`等元素都要绑定一个change事件，当表单的状态发生变化，就会触发onChange事件，更新组件的state。这种组件在React中被称为受控组件，
- 非受控组件:如果一个表单组件没有value props（单选和复选按钮对应的是checked props）时，就可以称为非受控组件。在非受控组件中，可以使用一个ref来从DOM获得表单值。而不是为每个状态更新编写一个事件处理程序。
:::

### React里的构造函数有什么用
::: details 答案
- 通过将对象分配给this.state来初始化本地状态
- 将事件处理程序方法绑定到实例上
:::


## 数据管理

### React setState后发生了什么
::: details 答案
- 在 React 得到元素树之后，React 会自动计算出新的树与老树的节点差异，然后根据差异对界面进行最小化重渲染。
- 如果在短时间内频繁setState。React会将state的改变压入栈中，在合适的时机，批量更新state和视图，达到提高性能的效果。
:::

### setState是同步还是异步
::: details 答案
- setState 并不是单纯同步/异步的，它的表现会因调用场景的不同而不同。。
- 在源码中，通过 isBatchingUpdates 来判断setState 是先存进 state 队列还是直接更新，如果值为 true 则执行异步操作，为 false 则直接更新。
    - 异步： 在 React 可以控制的地方，就为 true，比如在 React 生命周期事件和合成事件中，都会走合并操作，延迟更新的策略。
    - 同步： 在 React 无法控制的地方，比如原生事件，具体就是在 addEventListener 、setTimeout、setInterval 等事件中，就只能同步更新。
:::

### React中setState的第二个参数作用是什么？
::: details 答案
- setState 的第二个参数是一个可选的回调函数。这个回调函数将在组件重新渲染后执行。等价于在 componentDidUpdate 生命周期内执行
:::

### React中的setState和replaceState的区别是什么？
::: details 答案
-  setState 是修改其中的部分状态，相当于 Object.assign，只是覆盖，不会减少原来的状态。
- 而replaceState 是完全替换原来的状态，相当于赋值，将原来的 state 替换为另一个对象，如果新状态属性减少，那么 state 中就没有这个状态了。
:::

## 生命周期

### React生命周期主要分成哪几个阶段
::: details 答案
- 装载阶段（Mount），组件第一次在DOM树中被渲染的过程；
- 更新过程（Update），组件状态发生变化，重新更新渲染的过程；
- 卸载过程（Unmount），组件从DOM树中被移除的过程；
:::

### 挂载阶段有哪些生命周期方法
::: details 答案
- constructor
- getDerivedStateFromProps
- render
- componentDidMount
:::

### 更新阶段有哪些生命周期方法
::: details 答案
- getDerivedStateFromProps
- shouldComponentUpdate
- render
- getSnapshotBeforeUpdate
- componentDidUpdate
:::

### 卸载阶段有哪些生命周期方法
::: details 答案
- componentWillUnmount()
:::

### 如果没有调用 setState，props 值也没有变化，是不是组件就不会重新渲染？
::: details 答案
- 会 只要不是null 无论值有没有变化都会重新渲染
- 可以调用shouldComponentUpdate方法来控制更新后是否需要渲染，可以比较 this.props 和 nextProps ，this.state 和 nextState 值是否变化，来确认返回 true 或者 false
:::

### 组件卸载阶段用来干什么
::: details 答案
- 清除 timer，取消网络请求或清除
- 取消在 componentDidMount() 中创建的订阅等；
:::

### React常见生命周期的运行流程
::: details 答案
1. 挂载阶段，首先执行constructor构造方法，来创建组件
2. 创建完成之后，就会执行render方法，该方法会返回需要渲染的内容
3. 随后，React会将需要渲染的内容挂载到DOM树上
4. 挂载完成之后就会执行componentDidMount生命周期函数
5. 如果我们给组件创建一个props（用于组件通信）、调用setState（更改state中的数据）、调用forceUpdate（强制更新组件）时，都会重新调用render函数
6. render函数重新执行之后，就会重新进行DOM树的挂载
7. 挂载完成之后就会执行componentDidUpdate生命周期函数
8. 当移除组件时，就会执行componentWillUnmount生命周期函数

- *constructor() -> componentWillMount() -> render() -> componentDidMount()*
:::

## 组件通信

### 组件通信方式有哪些
::: details 答案
- ⽗组件向⼦组件通讯: ⽗组件可以向⼦组件通过传 props 的⽅式，向⼦组件进⾏通讯
- ⼦组件向⽗组件通讯: props+回调的⽅式，⽗组件向⼦组件传递props进⾏通讯，此props为作⽤域为⽗组件⾃身的函 数，⼦组件调⽤该函数，将⼦组件想要传递的信息，作为参数，传递到⽗组件的作⽤域中
- 兄弟组件通信: 找到这两个兄弟节点共同的⽗节点,结合上⾯两种⽅式由⽗节点转发信息进⾏通信
- 跨层级通信: Context 设计⽬的是为了共享那些对于⼀个组件树⽽⾔是“全局”的数据，例如当前认证的⽤户、主题或⾸选语⾔，对于跨越多层的全局数据通过 Context 通信再适合不过
- 发布订阅模式: 发布者发布事件，订阅者监听事件并做出反应,我们可以通过引⼊event模块进⾏通信
- 全局状态管理⼯具: 借助Redux或者Mobx等全局状态管理⼯具进⾏通信,这种⼯具会维护⼀个全局状态中⼼Store,并根据不同的事件产⽣新的状态
:::

## 路由

### react-router实现的思想
::: details 答案
- 基于 history 库来实现上述不同的客户端路由实现思想，并且能够保存历史记录等，磨平浏览器差异，上层无感知
- 通过维护的列表，在每次 URL 发生变化的回收，通过配置的 路由路径，匹配到对应的 Component，并且 render
:::

### 如何配置 React-Router 实现路由切换
::: details 答案
- 使用Route 组件
```jsx
// when location = { pathname: '/about' }
<Route path='/about' component={About}/> // renders <About/>
<Route path='/contact' component={Contact}/> // renders null
<Route component={Always}/> // renders <Always/>
```
:::

### React-Router里的switch是什么
::: details 答案
```jsx
// <Switch> 用于将 <Route> 分组。
//一个 <Switch> 会遍历其所有的子 <Route>元素，并仅渲染与当前地址匹配的第一个元素。
<Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
</Switch>

```
:::

### React-Router怎么设置重定向？
::: details 答案
```jsx
// 使用<Redirect>组件实现路由的重定向：
<Switch>
  <Redirect from='/users/:id' to='/users/profile/:id'/>
  <Route path='/users/profile/:id' component={Profile}/>
</Switch>
```
:::

### react-router 里的 Link 标签和 a 标签的区别
::: details 答案
从最终渲染的 DOM 来看，这两者都是链接，都是 标签，区别是∶
&lt;Link&gt;是react-router 里实现路由跳转的链接，一般配合&lt;Router&gt; 使用，react-router接管了其默认的链接跳转行为，区别于传统的页面跳转，&lt;Link&gt; 的“跳转”行为只会触发相匹配的&lt;Router&gt;对应的页面内容更新，而不会刷新整个页面。
:::

### react-router中的link做了哪些事情
::: details 答案
- 有onclick那就执行onclick
- click的时候阻止a标签默认事件
- 根据跳转href(即是to)，用history (web前端路由两种方式之一，history & hash)跳转，此时只是链接变了，并没有刷新页面而a标签就是普通的超链接了，用于从当前页面跳转到href指向的另一 个页面(非锚点情况)。
:::

### React-Router如何获取URL的参数？
::: details 答案
- get传值：
    - 路由配置还是普通的配置，如：'admin'，传参方式如：'admin?id='1111''。通过this.props.location.search获取url获取到一个字符串'?id='1111'
可以用url，qs，querystring，浏览器提供的api URLSearchParams对象或者自己封装的方法去解析出id的值。
- 动态路由传值
    - 路由需要配置成动态路由：如path='/admin/:id'，传参方式，如'admin/111'。通过this.props.match.params.id 取得url中的动态路由id部分的值，除此之外还可以通过useParams（Hooks）来获取
- 通过query或state传值
    - {pathname:'/admin',query:'111',state:'111'};。通过this.props.location.state或this.props.location.query来获取即可，传递的参数可以是对象、数组等，但是存在缺点就是只要刷新页面，参数就会丢失。
:::

### React-Router获取历史对象
::: details 答案
```jsx
BrowserRouter 创建的 URL 格式：xxx.com/path
HashRouter 创建的 URL 格式：xxx.com/#/path
```
:::

### react-router实现精准匹配
::: details 答案
- exact
```jsx
// exact属性：它的作用就是精确匹配路径，经常与<Switch> 联合使用。只有当 URL 和该 <Route> 的 path 属性完全一致的情况下才能匹配上
import { Switch, Route} from 'react-router-dom'
   
<Switch>
   <Route exact path="/" component={Home}></Route>
   <Route exact path="/login" component={Login}></Route>
</Switch>

```
:::

## Redux

### 对Redux的理解，Redux主要拿来做什么
::: details 答案
- Redux是一个用来管理数据状态和UI状态的JavaScript应用工具。随着JavaScript单页应用（SPA）开发日趋复杂， JavaScript需要管理比任何时候都要多的state（状态）， Redux就是降低管理难度的。
-  单纯的Redux只是一个状态机，是没有UI呈现的，react- redux作用是将Redux的状态机和React的UI呈现绑定在一起，当你dispatch action改变state的时候，会自动更新页面。
:::

### Redux工作流程
::: details 答案
- const store= createStore（fn）生成数据;
- action: {type: Symble('action01), payload:'payload' }定义行为;
- dispatch发起action：store.dispatch(doSomething('action001'));
- reducer：处理action，返回新的state;
--------
通俗解释
- 首先，用户（通过View）发出Action，发出方式就用到了dispatch方法
- 然后，Store自动调用Reducer，并且传入两个参数：当前State和收到的Action，Reducer会返回新的State
- State—旦有变化，Store就会调用监听函数，来更新View

:::

### Redux中异步请求如何处理
::: details 答案
借助异步中间件 
1. redux-thunk
2. redux-saga

:::

### Redux 怎么实现属性传递，介绍下原理
::: details 答案
react-redux 数据传输∶ view-->action-->reducer-->store-->view
```
view 上的AddClick 事件通过mapDispatchToProps 把数据传到action ---> click:()=>dispatch(ADD)
action 的ADD 传到reducer上
reducer传到store上 const store = createStore(reducer);
store再通过 mapStateToProps 映射穿到view上text:State.text
```
:::

### Redux 中间件是什么？
::: details 答案
- Redux 的中间件提供的是位于 action 被发起之后，到达 reducer 之前的扩展点
> 增加前
>> view -→> action -> reducer -> store  

> 增加后
>> view -> action -> middleware -> reducer -> store 
- 在这一环节可以做一些"副作用"的操作，如异步请求、打印日志等。
:::

### Redux 状态管理器和变量挂载到 window 中有什么区别
::: details 答案
- 两者都是存储数据以供后期使用。但是Redux状态更改可回溯——Time travel，数据多了的时候可以很清晰的知道改动在哪里发生，完整的提供了一套状态管理模式。
:::

### mobox 和 redux 有什么区别？
::: details 答案
- 共同点
    - 为了解决状态管理混乱，无法有效同步的问题统一维护管理应用状态;
    - 某一状态只有一个可信数据来源（通常命名为store，指状态容器）;
    - 操作更新状态方式统一，并且可控（通常以action方式提供更新状态的途径）;
    - 支持将store与React组件连接，如react-redux，mobx- react;
--------
- 不同点
    - redux将数据保存在单一的store中，mobx将数据保存在分散的多个store中
    - redux使用plain object保存数据，需要手动处理变化后的操作;mobx适用observable保存数据，数据变化后自动处理响应的操作
    - redux使用不可变状态，这意味着状态是只读的，不能直接去修改它，而是应该返回一个新的状态，同时使用纯函数;mobx中的状态是可变的，可以直接对其进行修改
    - mobx相对来说比较简单，在其中有很多的抽象，mobx更多的使用面向对象的编程思维;redux会比较复杂，因为其中的函数式编程思想掌握起来不是那么容易，同时需要借助一系列的中间件来处理异步和副作用
    - mobx中有更多的抽象和封装，调试会比较困难，同时结果也难以预测;而redux提供能够进行时间回溯的开发工具，同时其纯函数以及更少的抽象，让调试变得更加的容易
:::

### Redux和vuex的相同与不同
::: details 答案
- 区别
    - Vuex改进了Redux中的Action和Reducer函数，以mutations变化函数取代Reducer，无需switch，只需在对应的mutation函数里改变state值即可
    - Vuex由于Vue自动重新渲染的特性，无需订阅重新渲染函数，只要生成新的State即可
- 共同点
    - 单—的数据源
    - 变化可以预测
    - redux与vuex都是对mvvm思想的服务，将数据从视图中抽离的一种方案。
:::

## Hooks

### 为什么 useState 要使用数组而不是对象
::: details 答案
- 如果 useState 返回的是数组，那么使用者可以对数组中的元素命名，代码看起来也比较干净
- 如果 useState 返回的是对象，在解构对象的时候必须要和 useState 内部实现返回的对象同名，想要使用多次的话，必须得设置别名才能使用返回值
:::

### React Hooks 解决了哪些问题？
::: details 答案
- 在组件之间复用状态逻辑很难
- 复杂组件变得难以理解
- 难以理解的 class
:::

### React Hook 的使用限制有哪些？
::: details 答案
- 不要在循环、条件或嵌套函数中调用 Hook；
- 必须在 React 的函数组件中调用 Hook。  

*因为 Hooks 的设计是基于数组实现。在调用时按顺序加入数组中，如果使用循环、条件或嵌套函数很有可能导致数组取值错位，执行错误的 Hook。当然，实质上 React 的源码里不是数组，是链表。*
:::

### useEffect 与 useLayoutEffect 的相同与不同
::: details 答案
- useEffect 与 useLayoutEffect 两者都是用于处理副作用
- useEffect 在 React 的渲染过程中是被异步调用的，用于绝大多数场景；而 useLayoutEffect 会在所有的 DOM 变更之后同步调用，主要用于处理 DOM 操作、调整样式、避免页面闪烁等问题。也正因为是同步处理，所以需要避免在 useLayoutEffect 做计算量较大的耗时任务从而造成阻塞。  
*useLayoutEffect总是比useEffect先执行*
:::

### 使用useState时候，使用push，pop，splice等直接更改数组对象的坑
::: details 答案
- 使用push直接更改数组无法获取到新值，应该采用析构方式(...arr, newItem)
```jsx
function Indicatorfilter() {
  let [num,setNums] = useState([0,1,2,3])
  const test = () => {
    // 这里坑是直接采用push去更新num
    // setNums(num)是无法更新num的
    // 必须使用num = [...num ,1]
    num.push(1)
    // num = [...num ,1]
    setNums(num)
  }
return (
    <div className='filter'>
      <div onClick={test}>测试</div>
        <div>
          {num.map((item,index) => (
              <div key={index}>{item}</div>
          ))}
      </div>
    </div>
  )
}
```
:::

## 虚拟dom

### 为什么要用虚拟dom
::: details 答案
1. 保证性能下限，在不进行手动优化的情况下，提供过得去的性能
2. 跨平台 Virtual DOM本质上是JavaScript的对象，它可以很方便的跨平台操作，比如服务端渲染、uniapp等。
:::

### React Diff算法的流程
::: details 答案
1. 真实的 DOM 首先会映射为虚拟 DOM；
2. 当虚拟 DOM 发生变化后，就会根据差距计算生成 patch，这个 patch 是一个结构化的数据，内容包含了增加、更新、移除等；
3. 根据 patch 去更新真实的 DOM，反馈到用户的界面上。  
![diff算法流程](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/246e03a02e3e48ff941f921843bd8676~tplv-k3u1fbpfcp-watermark.awebp)
:::

### react diff算法优化策略
::: details 答案
- 策略一：忽略节点跨层级操作场景，提升比对效率。（基于树进行对比）
- 策略二：如果组件的 class 一致，则默认为相似的树结构，否则默认为不同的树结构。（基于组件进行对比）
- 策略三：同一层级的子节点，可以通过标记 key 的方式进行列表对比。（基于节点进行对比）
:::

### react key是做什么的？为什么需要key
::: details 答案
- Keys 是 React 用于追踪哪些列表中元素被修改、被添加或者被移除的辅助标识。在开发过程中，我们需要保证某个元素的 key 在其同级元素中具有唯一性。
:::

### react和vue的diff算法有何不同
::: details 答案
- 自 React 16 起，引入了 Fiber 架构。为了使整个更新过程可随时暂停恢复，节点与树分别采用了 FiberNode 与 FiberTree 进行重构。fiberNode 使用了双链表的结构，可以直接找到兄弟节点与子节点。整个更新过程由 current 与 workInProgress 两株树双缓冲完成。workInProgress 更新完成后，再通过修改 current 相关指针指向新节点。
- Vue 的整体 diff 策略与 React 对齐，虽然缺乏时间切片能力，但这并不意味着 Vue 的性能更差，因为在 Vue 3 初期引入过，后期因为收益不高移除掉了。除了高帧率动画，在 Vue 中其他的场景几乎都可以使用防抖和节流去提高响应性能。
:::

## 其他

### 如何实现数据持久化
::: details 答案
- redux-persist。redux-persist会将redux的store中的数据缓存到浏览器的localStorage中。
:::

### 对比一下vue和react
::: details 答案
- 相同
    - 都将注意力集中保持在核心库，而将其他功能如路由和全局状态管理交给相关的库
    - 都有自己的构建工具，能让你得到一个根据最佳实践设置的项目模板。
    - 都使用了Virtual DOM（虚拟DOM）提高重绘性能
    - 都有props的概念，允许组件间的数据传递
    - 都鼓励组件化应用，将应用分拆成一个个功能明确的模块，提高复用性
- 不同
    - Vue默认支持数据双向绑定，而React一直提倡单向数据流
    - Vue宣称可以更快地计算出Virtual DOM的差异，这是由于它在渲染过程中，会跟踪每一个组件的依赖关系，不需要重新渲染整个组件树。
    - 对于React而言，每当应用的状态被改变时，全部子组件都会重新渲染。当然，这可以通过 PureComponent/shouldComponentUpdate这个生命周期方法来进行控制，但Vue将此视为默认的优化。
    - Vue鼓励写近似常规HTML的模板。写起来很接近标准 HTML元素，只是多了一些属性。React推荐你所有的模板通用JavaScript的语法扩展——JSX书写。
    - Vue 通过 getter/setter 以及一些函数的劫持，能精确知道数据变化，不需要特别的优化就能达到很好的性能
    - React 默认是通过比较引用的方式进行的，如果不优化（PureComponent/shouldComponentUpdate）可能导致大量不必要的vDOM的重新渲染。这是因为 Vue 使用的是可变数据，而React更强调数据的不可变。
    - react可以通过高阶组件（Higher Order Components-- HOC）来扩展，而vue需要通过mixins来扩展。
:::

### React的状态提升是什么？
::: details 答案
- 将多个组件需要共享的状态提升到它们最近的父组件上，在父组件上改变这个状态然后通过props分发给子组件。
:::






*该页面数据由本人编写+网上论坛整理所得*  

*参考数据地址*
- [「2021」高频前端面试题汇总之React篇（上） -CUGGZ](https://juejin.cn/post/6941546135827775525)
- [「2021」高频前端面试题汇总之React篇（下） -CUGGZ](https://juejin.cn/post/6940942549305524238)