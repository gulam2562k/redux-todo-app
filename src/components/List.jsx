import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoAction, editTodoAction, completeTodoAction } from "../redux/actions/todo.action";
import CompletedTodos from "./CompletedTasks";

function List() {
  const todos = useSelector((state) => state.todos || []);
  const dispatch = useDispatch();
  const editData = useSelector((state) => state.editData);

  return (
    <div>
      <ul className="list-group mt-4">
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            !todo.completed && ( 
              <li
                className="list-group-item d-flex justify-content-between"
                key={index}
              >
                <div>{todo.text}</div>
                <div>
                  <button
                    className="btn btn-success btn-sm me-2"
                    onClick={() => dispatch(completeTodoAction(index))}
                    disabled={editData.index !== -1}
                  >
                    Complete
                  </button>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => dispatch(editTodoAction(index, todo.text))}
                    disabled={editData.index !== -1}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => dispatch(deleteTodoAction(todo.text))}
                    disabled={editData.index !== -1}
                  >
                    Delete
                  </button>
                </div>
              </li>
            )
          ))
        ) : (
          <li className="list-group-item">No Todo</li>
        )}
      </ul>
      <CompletedTodos />
    </div>
  );
}

export default List;
