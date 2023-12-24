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





