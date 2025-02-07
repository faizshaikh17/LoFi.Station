import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from '../feature/slice'
import playerReducer from '../feature/playerSlice'

const rootReducer = combineReducers({
    todo: todoReducer,
    player: playerReducer
})

export default rootReducer