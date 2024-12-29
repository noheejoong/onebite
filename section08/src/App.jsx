import "./App.css";
import { useState } from "react";
import Today from "./components/Today";
import AddTodo from "./components/AddTodo";
import SearchTodo from "./components/SearchTodo";
import ListTodo from "./components/ListTodo";

function App() {
  const todate = new Date();

  const [todos, setTodos] = useState([
    "React 공부하기",
    "빨래하기",
    "노래 연습하기",
  ]);

  return (
    <>
      <Today todate={todate} />
      <AddTodo todate={todate} todos={todos} setTodos={setTodos} />
      <SearchTodo todos={todos} setTodos={setTodos} />
      <ListTodo todate={todate} todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
