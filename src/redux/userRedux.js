import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "cart",
    initialState: {
        currentUser: null,
        isFetching:false,
        error:false,
        isUserAuthenticated: false
    },
    reducers:{
        loginStart: (state) => {
           state.isFetching =true;
        },
        loginSuccess: (state,action) => {
           state.isFetching = false;
           state.currentUser = action.payload;
           state.isUserAuthenticated = true;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;           
        },
        logout: (state) => {
            state.isFetching= false;
            state.currentUser= null;
            state.isUserAuthenticated = true;
            state.error = false;
        }
    },
});

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer;

