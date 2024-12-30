import "./App.css";
import { useState, useRef } from "react";
import List from "./components/List";
import Header from "./components/Header";
import Editor from "./components/Editor";
import Exam from "./components/Exam";

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

function App() {

  const idRef = useRef(3);
  
  const [todos, setTodos] = useState(mockData);

  const onCreate = (content) => {
    const newTodo = {
      id:idRef.current++,
      isDone:false,
      content:content,
      date:new Date().getTime()
    };

    setTodos([newTodo, ...todos])
  }

  const onUpdate = (tagetId) => {
    setTodos(
      todos.map((todo) => todo.id === tagetId ? {...todo, isDone:!todo.isDone}:todo        
      )
    );

  }

  const onDelete = (targetId) => {
    setTodos(
      todos.filter((todo) => todo.id !== targetId)
    );
  }

  return (
    <div className="App">
      <Exam />
      {/* <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} /> */}
    </div>
  );
}

export default App;
