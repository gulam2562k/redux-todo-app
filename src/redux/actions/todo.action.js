import { ADD_TODO, DELETE_TODO, EDIT_TODO, UPDATE_TODO, COMPLETE_TODO } from "../constants/todo.constant";

export const addTodoAction = (todo) => ({
    type: ADD_TODO,
    payload: todo,
});

export const deleteTodoAction = (todo) => ({
    type: DELETE_TODO,
    payload: todo,
});

export const editTodoAction = (index, data) => ({
    type: EDIT_TODO,
    payload: {
        index,
        data,
    },
});

export const updateTodoAction = (index, data) => ({
    type: UPDATE_TODO,
    payload: {
        index,
        data,
    },
});

export const completeTodoAction = (index) => ({
    type: COMPLETE_TODO,
    payload: index,
});
