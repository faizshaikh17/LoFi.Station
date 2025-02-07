import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialStatePlayer = {
    players: [{id:"",song:""}],
};

// Player slice
const playerSlice = createSlice({
    name: 'player',
    initialState: initialStatePlayer,
    reducers: {
        play: (state, action) => {
            // logic for play action
            const station = {
                
            }
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


export const { play, pause, volume, previousStation, nextStation } = playerSlice.actions
export default playerSlice.reducer;
