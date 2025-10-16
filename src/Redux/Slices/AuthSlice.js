import  { createSlice }  from  "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: localStorage.getItem('isloggedIn') || false,
    username: localStorage.getItem('username') || '',
    token: localStorage.getItem('token') || '',
};



const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{},
    extraReducers: () => {
        // Add any extra reducers if needed
    }
});
export default authSlice.reducer;