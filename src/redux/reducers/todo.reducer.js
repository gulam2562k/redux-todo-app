import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    UPDATE_TODO,
    COMPLETE_TODO,
    UNDO_TODO
} from "../constants/todo.constant";

const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
    editData: {
        index: -1,
        data: null,
    },
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const addedTodos = [...state.todos, { text: action.payload, completed: false }];
            localStorage.setItem('todos', JSON.stringify(addedTodos));
            return {
                ...state,
                todos: addedTodos
            };

        case DELETE_TODO:
            const filteredTodos = state.todos.filter((todo) => todo.text !== action.payload);
            localStorage.setItem('todos', JSON.stringify(filteredTodos));
            return {
                ...state,
                todos: filteredTodos
            };

        case EDIT_TODO:
            return {
                ...state,
                editData: {
                    index: action.payload.index,
                    data: action.payload.data,
                }
            };

        case UPDATE_TODO:
            const updatedTodos = state.todos.map((value, index) => {
                if (index === action.payload.index) {
                    return { ...value, text: action.payload.data };
                }
                return value;
            });
            localStorage.setItem('todos', JSON.stringify(updatedTodos));
            return {
                ...state,
                todos: updatedTodos,
                editData: {
                    index: -1,
                    data: null
                }
            };

        case COMPLETE_TODO:
            const completedTodos = state.todos.map((todo, index) => {
                if (index === action.payload) {
                    return { ...todo, completed: true };
                }
                return todo;
            });
            localStorage.setItem('todos', JSON.stringify(completedTodos));
            return {
                ...state,
                todos: completedTodos
            };

        case UNDO_TODO:
            const undoneTodos = state.todos.map((todo, index) => {
                if (index === action.payload) {
                    return { ...todo, completed: false };
                }
                return todo;
            });
            localStorage.setItem('todos', JSON.stringify(undoneTodos));
            return {
                ...state,
                todos: undoneTodos
            };


        default:
            return state;
    }
};
