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
```

