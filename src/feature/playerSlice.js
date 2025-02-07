import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    players: []
}


const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        play: (state, action) => { },
        pause: (state, action) => { },
        volume: (state, action) => { },
        previousStation: (state, action) => { },
        nextStation: (state, action) => { },
    }
})


export const { play, pause, volume, previousStation, nextStation } = playerSlice.actions
const playerReducer = playerSlice.reducer
export default playerReducer
