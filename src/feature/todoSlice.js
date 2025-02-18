import { createSlice, nanoid } from '@reduxjs/toolkit';

const localTodos = JSON.parse(localStorage.getItem('todos'))

const initialStateTodo = { todos: localTodos || [], }


// Initial state for the todo slice


// Todo slice
const todoSlice = createSlice({
    name: 'todo',
    initialState: initialStateTodo,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            };
            state.todos.push(todo);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
    },
});


// Export actions
export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

