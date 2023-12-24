import classnames from "classnames";
import _ from "lodash";
import { useState } from "react";
import "./a.css";

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

  const list2 = [{ num: 1 }, { num: 3 }, { num: 2 }];
  const list3 = _.orderBy(list2, "num", "desc");
  console.log(list3);

  const [inputValue, setInputValue] = useState("");
  var inputChangeVar = function inputChange(value) {
    console.log(value);
    setInputValue(value + 1);
  };

  return (
    <div className="App">
      this is App
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
          onChange={(e) => inputChangeVar(e.target.value)}
        ></input>
      </ul>
    </div>
  );
}

function Button() {
  return <button onClick={() => handleClick("mark")}>click me!</button>;
}

const handleClick = (name, e) => {
  console.log("========" + name, e);
};
export default App;
