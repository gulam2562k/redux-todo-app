import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoAction, editTodoAction, undoTodoAction } from "../redux/actions/todo.action";

function CompletedTodos() {
  const todos = useSelector((state) => state.todos);
  const completedTodos = todos.filter((todo) => todo.completed);
  const dispatch = useDispatch();
  const editData = useSelector((state) => state.editData);

  return (
    <div className="mt-4">
      <h3 className="text-center">Completed Todos</h3>
      <ul className="list-group">
        {completedTodos.length > 0 ? (
          completedTodos.map((todo, index) => (
            <li className="list-group-item d-flex justify-content-between" key={index}>
              <div>{todo.text}</div>
              <div>
                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={() => dispatch(undoTodoAction(todos.findIndex(t => t === todo)))}
                >
                  Undo
                </button>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => dispatch(editTodoAction(todos.findIndex(t => t === todo), todo.text))}
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
          <li className="list-group-item">No Completed Todos</li>
        )}
      </ul>
    </div>
  );
}

export default CompletedTodos;
