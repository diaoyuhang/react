# React基础
## JSX
在JSX中可以通过大括号语法{}识别JS中的表达式，比如常见的变量、函数调用，方法调用等等

**注意：**if语句、switch语句、变量声明属于语句，不是表达式，不能出现在{}中

### JSX循环集合

```jsx
const list = [
  { id: 1, name: "vue" },
  { id: 2, name: "vue" },
  { id: 3, name: "vue" },
];

function App() {
  return (
    <div className="App">
      <ul>
        {list.map((item) => (
          <li key={item.key}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

### JSX条件渲染

```jsx
const flag = true;
{/**条件渲染 */}
function App() {
  return (
    <div className="App">
     {flag && <span>this is &&</span>}
        <br></br>
        {flag ? <span>this is ?</span> : <span>this is :</span>}
    </div>
  );
}
```

### JSX复杂条件渲染

```jsx
const type = 4;
function getByType(){
  if(type==1){
    return "<span >aaaaaaaaaaaa</span>"
  }else if(type == 2){
    return "<span >bbbbbbbbbb</span>"
  }else if(type== 3){
    return "<span >ccccccccccc</span>"
  }
  return "<span style='color:red'>未知</span>"
}

function App() {
  return (
    <div className="App">
     {getByType()}
    </div>
  );
}
```

## 事件

**注意：**不能直接写函数调用，这里事件绑定需要一个函数引用

```jsx
const handleClick = (name,e)=>{
  console.log('========'+name,e)
}

function App() {
  return (
    <div className="App">
      <button onClick={(e)=>handleClick('jack',e)}>click me</button>
    </div>
  );
}
```

## useState

useState是React Hook函数，允许我们向组件添加一个状态变量，从而控制影响组件的渲染结果；

和普通的js变量不同的是，状态变量一旦发生变化组件的视图UI也会随着变化（数据驱动视图）

```jsx
//useState是一个函数，返回的是一个数组
//数组中的第一个参数是状态变量，第二个参数是set函数用来修改状态变量
//useState的参数将作为count的初始值
import {useState} from 'react'
const [count,setCount] = useState(0)
```

**注意：**状态不可变，状态被认为是只读的，我们应该始终替换它而不是修改它，直接修改不能引发视图更新

## 组件基础样式方案

 ```jsx
 {/*行内样式*/}
 const style = {
     color:'red',
     fontSize:'50px'
 }
 <span style={style}></span>
 
 {/*通过class类名控制*/}
 .foo{
     color:'blue'
 }
 <span className="foo"></span>
 ```

## React获取DOM

useRef生成ref对象，绑定到dom标签上

dom可用时，ref.current获取dom，渲染完毕之后dom生成之后才可用

```jsx
  const inputRef = useRef(null);
  function showDOM() {
    console.log(inputRef);
    console.dir(inputRef);
    console.log(inputRef.current);
    console.dir(inputRef.current);
  }

{/**获取DOM */}
        <input type="text" ref={inputRef}></input>
        <button onClick={showDOM}>获取dom</button>
```

## uuid

```jpx
npm install uuid

import {v4 as uuidV4} from "uuid"

uuidV4();
```

## 时间工具

```jpx
npm install dayjs

dayjs(new Date()).format("YYYY-MM-DD hh:mm:ss");
```

## 组件通信

1. 父组件传递数据-在子组件标签上绑定属性
2. 子组件接收数据 -子组件通过props参数接受数据
3. props是只读对象，不能直接修改，父组件的数据只能由父组件修改

```jsx

function Son(props) {
  console.log(props.name);
  return <div>this is Son</div>;
}

function App() {
    const [list3, setList3] = useState([{ num: 1 }, { num: 3 }, { num: 2 }]);
    
  return (
   <div>
          <Son name={list3}></Son>
        </div>
  );
}
```

**子传父**

在子组件中调用父组件中的函数

```jsx
function Son2({ onGetSonMsg }) {
  const msg = "this is son2 message";
  return (
    <div>
      <button onClick={() => onGetSonMsg(msg)}>sendMsg</button>
    </div>
  );
}


function App() {
  const getSonMsg = (msg) => {
    console.log(msg);
  };
    
  return (
   <Son2 onGetSonMsg={getSonMsg}>这是子组件2的元素</Son2>
  );
}
```

**兄弟组件通信**

通过父组件进行兄弟组件之间的数据传递

**Context机制跨层级通信**

1. 使用cretaeContext方法创建一个上下文对象Ctx；
2. 再顶层组件（App） 中通过Ctx.Provider组件提供数据；
3. 再底层组件（B）中通过useContext钩子函数获取消费数据；

```jsx
function A(){
  return (<div>this is A component <B></B></div>);
}

function B(){
  const appMsg = useContext(msgContext)
  return (<div>this is B component,{appMsg}</div>)
}

function App() {
      const appMsg = "this is appMsg";
  return (
   <div className="App">
      <msgContext.Provider value={appMsg}>
      this is App
      <A></A>
      </msgContext.Provider>
      </div>
  );
}
```

## useEffect的基础使用

需求：在组件渲染完毕之后，立刻从服务端获取频道列表数据并显示到页面中

语法：useEffect(()=>{},[])

```json
import { useEffect } from "react";

useEffect(() => {
    async function getList(){
      const res = await fetch(URL)
      const jsonRes =await res.json()
    }
    getList()
  },[])
```

参数1是一个函数，可以把它叫做副作用函数，在函数内部可以放置要执行的操作；

参数2是一个数据（可选参数），在数组放置依赖项，不同依赖项会影响第一个参数函数的执行，当时一个空数组时，函数只会在组件渲染完毕之后执行一次

**用于React组件中创建不是由事件引起而是渲染本身引起的操作**

- 没有传入第二个参数，组件初始化完成，组件发生变化都会执行第一参数函数；
- 第二个参数函数传入空数组，只会在初始渲染后执行一次；
- 传入特定依赖项，初始化执行，依赖项变化时执行

## useEffect 清除副作用

在useEffect中编写的由渲染本身引起的对接组件外部的操作，社区也经常把它叫做副作用操作，比如在useEffect中开启一个定时器，我们想在组件卸载时把这个定时器卸载掉，这个过程叫做清理副作用。

**说明：**清除副作用的函数最常见的执行时机是在组件卸载自动执行。

```jsx
function Son(){
        useEffect(()=>{
        const timer= setInterval(()=>{
            console.log('定时器执行中。。。')
        },1000);
            return ()=>{
                clearInterval(timer);
            }
        },[]);
    return "this is son"
}

function App(){
    const [show,setShow] = useState(true);
    return (
    <div>
        {show&&<Son></Son>}
            <button onClick={()=>setShow(false)></button>
        </div>
        
    )
}
```

## 自定义hook函数

```jsx
function useToogle(){
    const [value,setValue] =useState(true);
    const toogle = ()=> setValue(!value);
    return {value,toolge};
}

function App(){
    const {value,toogle} = useToogle();
    return (
    	<div>
        	{value && <div>this is div</div>}
            <button onclick={toogle}>toogle</button>
        </div>
    )
}
```

## ReactHook使用规则

使用规则

1. 只能在组件中或者其他自定义Hook函数中调用；
2. 只能在组件的顶层调用，不能嵌套在if、for、其他函数中

















