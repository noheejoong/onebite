import "./App.css";
import { useState, useRef, useReducer } from "react";
import List from "./components/List";
import Header from "./components/Header";
import Editor from "./components/Editor";

const mockData = [
  {
    id:0,
    isDone:false,
    content: "React 공부하기",
    date:new Date().getTime(),
  },
  {
    id:1,
    isDone:false,
    content: "빨래하기",
    date:new Date().getTime(),
  },
  {
    id:2,
    isDone:false,
    content: "노래 연습하기",
    date:new Date().getTime(),
  },
];

function reducer(state, action) {
  switch(action.type) {
    case "CREATE": return [action.data, ...state]
    case "UPDATE": return state.map((todo) => todo.id===action.targetId?{...todo, isDone:!todo.isDone} : todo)
    case "DELETE": return state.filter((todo) => todo.id!==action.targetId)
    default: return state;
  }

}

function App() {

  const idRef = useRef(3);

  const [state, dispatch] = useReducer(reducer, mockData);
  

  const onCreate = (content) => {
    dispatch({
      type:"CREATE",
      data:{
        id:idRef.current++,
        isDone:false,
        content:content,
        date:new Date().getTime(),
      }
    })
  }
  
  const onUpdate = (targetId) => {
    dispatch({
      type:"UPDATE",
      targetId:targetId
    })
  }

  const onDelete = (targetId) => {
    dispatch({
      type:"DELETE",
      targetId:targetId
    })
  }

  return (
    <div className="App">
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={state} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;