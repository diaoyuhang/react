import classnames from "classnames";
import _ from "lodash";
import { createContext, useContext, useRef, useState } from "react";
import "./a.css";
import { useEffect } from "react";

const num = 9;

const list = [
  { id: 1, name: "vue" },
  { id: 2, name: "vue" },
  { id: 3, name: "vue" },
];

const flag = true;

const type = 4;

function getByType() {
  if (type === 1) {
    return "<span >aaaaaaaaaaaa</span>";
  } else if (type === 2) {
    return "<span >bbbbbbbbbb</span>";
  } else if (type === 3) {
    return "<span >ccccccccccc</span>";
  }
  return "<span style='color:red'>未知</span>";
}

function Son(props) {
  console.log(props.name);
  return <div>this is Son，{props.name}</div>;
}

function Son2({ onGetSonMsg }) {
  const msg = "this is son2 message";
  return (
    <div>
      <button onClick={() => onGetSonMsg(msg)}>sendMsg</button>
    </div>
  );
}

const msgContext = createContext();

function A(){
  return (<div>this is A component <B></B></div>);
}

function B(){
  const appMsg = useContext(msgContext)
  return (<div>this is B component,{appMsg}</div>)
}

function App() {
  const tabs = [
    { type: "hot", text: "最热" },
    { type: "time", text: "最新" },
  ];

  const [ty, setType] = useState("hot");

  function changeClass(aa) {
    console.log(aa);
    setType(aa);
  }

  const [list2, setList2] = useState([{ num: 1 }, { num: 3 }, { num: 2 }]);
  const list3 = _.orderBy(list2, "num", "desc");
  console.log(list3);

  const [inputValue, setInputValue] = useState("");
  const inputRef2 = useRef(null);
  var inputChangeVar = function inputChange(value) {
    console.log(value);
    setInputValue(value);
  };

  const inputRef = useRef(null);

  const addNumVar = function addNum() {
    setList2([...list2, { num: inputRef.current.value }]);
  };

  const clearInputValueVar = function () {
    console.log("clearInputValueVar");
    setInputValue("");
    inputRef2.current.focus();
  };
  const [sonMsg, setSonMsg] = useState("");

  const getSonMsg = (msg) => {
    console.log(msg);
    setSonMsg(msg);
  };

  const appMsg = "this is appMsg";

  // useEffect(() => {
  //   async function getList(){
  //     const res = await fetch(URL)
  //     const jsonRes =await res.json()
  //   }
  //   getList()
  // },[])

  return (
    <div className="App">




      <msgContext.Provider value={appMsg}>
      this is App
      <A></A>
      </msgContext.Provider>
      

      {/* 使用引号传递字符串*/}
      {"this is message"}
      {/** 识别js变量 */}
      {num}
      {/**函数调用 */}
      {new Date().getTime()}
      {/**使用js对象 */}
      <div style={{ color: "red" }}>this is div</div>
      {/**循环渲染 */}
      <ul>
        {list.map((item) => (
          <li key={item.key}>{item.name}</li>
        ))}

        {/**条件渲染 */}
        {flag && <span>this is &&</span>}
        <br></br>
        {flag ? <span>this is ?</span> : <span>this is :</span>}

        {/**复杂条件渲染 */}
        <br></br>
        {getByType()}

        <br></br>
        <button onClick={(e) => handleClick("jack", e)}>click me</button>
        <br></br>
        <Button></Button>

        <br></br>
        {/**tab 切换功能 */}

        {tabs.map((item) => (
          <span
            onClick={() => changeClass(item.type)}
            key={item.type}
            className={classnames("a", { active: item.type === ty })}
          >
            {item.text} &nbsp;
          </span>
        ))}

        {/**表单绑定 */}
        <input
          value={inputValue}
          ref={inputRef2}
          onChange={(e) => inputChangeVar(e.target.value)}
        ></input>
        <button onClick={clearInputValueVar}>清空输入框</button>
        <br></br>
        {/**获取DOM */}
        <input type="text" ref={inputRef}></input>
        <button onClick={addNumVar}>获取dom</button>
        <br></br>
        {/**组件通信 */}
        <div>
          <Son name={sonMsg}>这是子组件的元素</Son>
          <Son2 onGetSonMsg={getSonMsg}>这是子组件2的元素</Son2>
        </div>
      </ul>
    </div>
  );

  function showDOM() {
    console.log(inputRef);
    console.dir(inputRef);
    console.log(inputRef.current);
    console.dir(inputRef.current);
  }
}

function Button() {
  return <button onClick={() => handleClick("mark")}>click me!</button>;
}

const handleClick = (name, e) => {
  console.log("========" + name, e);
};
export default App;
