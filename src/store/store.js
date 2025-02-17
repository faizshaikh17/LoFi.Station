import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../feature/todoSlice'
import playerSlice from '../feature/playerSlice'
import pomodoroSlice from '../feature/pomodoroSlice';
import inputBoxSlice from '../feature/inputBoxSlice'


const store = configureStore({
    reducer: {
        todo: todoSlice,
        player: playerSlice,
        pomodoro: pomodoroSlice,
        inputBox: inputBoxSlice
    }
});

export default store;