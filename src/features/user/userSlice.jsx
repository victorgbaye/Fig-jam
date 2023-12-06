import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import customFetch from '../../utils/axios';
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from '../../utils/localStorage';

const initialState ={
    isLoading: false,
    user: getUserFromLocalStorage()
}

export const registerUser = createAsyncThunk('user/registerUser', async(user, thunkAPI)=>
{
    try {
        const resp = await customFetch.post('/auth/register', user,)
        return resp.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})


export const loginUser = createAsyncThunk('user/loginUser', async(user, thunkAPI)=>
{
    try {
        const resp = await customFetch.post('/auth/login', user,)
        return resp.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)

    }
})
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        logoutUser:(state)=>{
            state.user = null
            removeUserFromLocalStorage()
        }
    },
    extraReducers:{
        [registerUser.pending]:(state) =>{
            state.isLoading = true
        },
        [registerUser.fulfilled]:(state, {payload}) =>{
            const {user} = payload
            state.isLoading = false
            state.user = user
            addUserToLocalStorage(user)
        },
        [registerUser.rejected]:(state) =>{
            state.isLoading = false
        },
        [loginUser.pending]:(state) =>{
            state.isLoading = true
        },
        [loginUser.fulfilled]:(state, {payload}) =>{
            const {user} = payload
            state.isLoading = false
            state.user = user
            addUserToLocalStorage(user)
            console.log(`welcome back ${user.firstname}`);
        },
        [loginUser.rejected]:(state) =>{
            state.isLoading = false
        },
    }
})

export const {logoutUser} = userSlice.actions;
export default userSlice.reducer