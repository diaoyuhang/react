const num = 9;

const list = [
  { id: 1, name: "vue" },
  { id: 2, name: "vue" },
  { id: 3, name: "vue" },
];

const flag = true;

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
        <button onClick={(e)=>handleClick('jack',e)}>click me</button>
        <br></br>
        <Button></Button>
      </ul>
    </div>
  );
}

function Button(){
  return <button onClick={()=>handleClick('mark')}>click me!</button>
}

const handleClick = (name,e)=>{
  console.log('========'+name,e)
}
export default App;
