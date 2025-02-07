import { createSlice, nanoid } from '@reduxjs/toolkit'
import { act } from 'react'

const initialState = {
    todos: [],
    players: []
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

const playerSlice = createSlice({
    name: "nowPlaying",
    initialState,
    reducers: {

    }
})

export const { addTodo, deleteTodo } = todoSlice.actions;
const todoReducer = todoSlice.reducer
export default todoReducer;