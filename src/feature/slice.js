import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: []
}


const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log('25')
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => (todo.id !== action.payload))
        },
    }
})

export const { addTodo, deleteTodo } = todoSlice.actions;
const todoReducer = todoSlice.reducer
export default todoReducer
