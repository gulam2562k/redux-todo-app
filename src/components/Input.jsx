import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoAction, updateTodoAction } from '../redux/actions/todo.action';

export default function Input() {
    let [todo, setTodo] = useState("");
    const dispatch = useDispatch();
    const editData = useSelector(state => state.editData);

    const submit = (event) => {
        event.preventDefault();

        if (editData.index !== -1) {
            dispatch(updateTodoAction(editData.index, todo));
        } else {
            dispatch(addTodoAction(todo));
        }

        setTodo("");
    }

    useEffect(() => {
        setTodo(editData.data);
    }, [editData.index, editData.data]);

    return (
        <form className="row" onSubmit={submit}>
            <div className="col-12">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder='Enter todo'
                        value={todo}
                        onChange={(event) => setTodo(event.target.value)} />
                    <button
                        className="btn btn-outline-primary"
                        disabled={!todo}>
                        {editData.index > -1 ? "Update" : "Add"}
                    </button>
                </div>
            </div>
        </form>
    );
}
