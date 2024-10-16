import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoAction, editTodoAction, completeTodoAction } from "../redux/actions/todo.action";

function List() {
  const todos = useSelector((state) => state.todos || []);
  const dispatch = useDispatch();
  const editData = useSelector((state) => state.editData);

  return (
    <ul className="list-group mt-4">
      {todos.length > 0 ? (
        todos.map((todo, index) => (
          <li
            className={`list-group-item d-flex justify-content-between ${todo.completed ? 'list-group-item-success' : ''}`}
            key={index}
          >
            <div>{todo.text}</div>
            <div>
              <button
                className="btn btn-success btn-sm me-2"
                onClick={() => dispatch(completeTodoAction(index))}
              >
                {todo.completed ? 'Undo' : 'Complete'}
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
        ))
      ) : (
        <li className="list-group-item">No Todo</li>
      )}
    </ul>
  );
}

export default List;
