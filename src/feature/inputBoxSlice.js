import { createSlice } from "@reduxjs/toolkit";

const localStoredName = localStorage.getItem('nickname')

const initialStateInputBox = {
    inputToggle: false,
    nickname: localStoredName || "Spartan",
}

const inputSlice = createSlice({
    name: 'inputBox',
    initialState: initialStateInputBox,
    reducers: {
        name: (state, action) => {
            state.nickname = action.payload ? action.payload : "Spartan"
        },
        setInputToggle: (state) => {
            state.inputToggle = !state.inputToggle
        }
    }
})

export const { name, setInputToggle } = inputSlice.actions;
export default inputSlice.reducer;