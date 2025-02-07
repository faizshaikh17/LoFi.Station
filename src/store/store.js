import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../feature/slice'
import playerSlice from '../feature/playerSlice'


const store = configureStore({
    reducer: {
        todo: todoSlice,
        player: playerSlice,
    }
});

export default store;