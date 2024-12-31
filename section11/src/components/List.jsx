import { useState, useMemo, useContext } from "react";
import "./List.css"
import TodoItem from "./TodoItem";
import { TodoStateContext } from "../App";

const List = () => {

  const [search, setSearch] = useState("");

  const todos = useContext(TodoStateContext);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }

    return todos.filter((todo)=> 
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  const getAnalyzedData = () => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo)=>todo.isDone).length;
    const notdoneCount = totalCount - doneCount
    return {totalCount,doneCount,notdoneCount}
  }
  const {totalCount, doneCount, notdoneCount} = useMemo(getAnalyzedData, [todos]);

  return (
    <div className="List">
      <h4>Todo List🐸</h4>
      <div>
        <div>total:{totalCount}</div>
        <div>done:{doneCount}</div>
        <div>notDone:{notdoneCount}</div>
      </div>
      <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요"></input>
      <div className="todos_wrapper">
        {
          filteredTodos.map((todo, index) => {
            return <TodoItem key={todo.id} {...todo}/>
          })
        }      
      </div>
    </div>
  );
};

export default List;
