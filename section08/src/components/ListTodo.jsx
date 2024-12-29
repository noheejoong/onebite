import { useEffect } from "react";
import Today from "./Today";

const ListTodo = ({ todate, todos, setTodos }) => {
  return (
    <div>
      <table>
        {todos.map((todo, index) => {
          return (
            <tr>
              <td>
                <check />
              </td>
              <td>{todo}</td>
              <td>{todate}</td>
              <td>
                <button>삭제</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ListTodo;
