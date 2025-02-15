import { createSlice } from "@reduxjs/toolkit";

const initialStatePomodoro = {
    workDuration: 25 * 60,
    breakDuration: 5 * 60,
    timeLeft: 25 * 60,
    isRunning: false,
    isWorkInterval: true
};

const pomodoroSlice = createSlice({
    name: 'pomodoro',
    initialState: initialStatePomodoro,
    reducers: {
        subTime: () => { },
        addTime: () => { },
        startTimer: (state) => {
            state.isRunning = true;
        },
        pauseTimer: () => {
            state.isRunning = false;
        },
        tick: (state) => {
            if (state.timeLeft > 0) {
                state.timeLeft--
            } else {
                state.isWorkInterval = !state.isWorkInterval;
                state.timeLeft = state.isWorkInterval ? state.workDuration : state.breakDuration
            }
        },
        reset: (state) => {
            state.isRunning = false;
            state.timeLeft = state.timerDuration
            state.isWorkInterval = false
        }
    }
})

export const { startTimer, pauseTimer, tick, reset } = pomodoroSlice.actions;
export default pomodoroSlice.reducer