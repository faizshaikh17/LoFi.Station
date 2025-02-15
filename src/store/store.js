import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../feature/todoSlice'
import playerSlice from '../feature/playerSlice'
import pomodoroSlice from '../feature/pomodoroSlice';


const store = configureStore({
    reducer: {
        todo: todoSlice,
        player: playerSlice,
        pomodoro: pomodoroSlice,
    }
});

export default store;