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





















