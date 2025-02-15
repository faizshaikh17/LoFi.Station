import { createSlice } from "@reduxjs/toolkit";

const initialStatePomodoro = {};

const pomodoroSlice = createSlice({
    name: 'pomodoro',
    initialState: initialStatePomodoro,
    reducers: {
        subTime: () => { },
        addTime: () => { },
        startTimer: () => { },
        reset: () => { }
    }
})

export const { subTime, addTime, startTimer, reset } = pomodoroSlice.actions;
export default pomodoroSlice.reducer