import { createSlice, nanoid } from '@reduxjs/toolkit';

// Initial state for the todo slice
const initialStateTodo = {
    todos: [],
};

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

// Initial state for the player slice
const initialStatePlayer = {
    players: [],
};

// Player slice
const playerSlice = createSlice({
    name: 'player',
    initialState: initialStatePlayer,
    reducers: {
        play: (state, action) => {
            // Add logic for play action
        },
        pause: (state, action) => {
            // Add logic for pause action
        },
        volume: (state, action) => {
            // Add logic for volume action
        },
        previousStation: (state, action) => {
            // Add logic for previousStation action
        },
        nextStation: (state, action) => {
            // Add logic for nextStation action
        },
    },
});

// Export actions
export const { addTodo, deleteTodo } = todoSlice.actions;
export const { play, pause, volume, previousStation, nextStation } = playerSlice.actions;

export default todoSlice.reducer;

