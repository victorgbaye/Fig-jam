import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import customFetch from '../../utils/axios';

const initialState ={
    isLoading: false,
    user: null
}

export const registerUser = createAsyncThunk('user/registerUser', async(user, thunkAPI)=>
{
    try {
        const resp = await customFetch.post('/auth/register', user)
        console.log(resp);
    } catch (error) {
        console.log(error.response);
    }
})
export const loginUser = createAsyncThunk('user/loginUser', async(user, thunkAPI)=>
{
    console.log(`Login User :${JSON.stringify(user)}`);
})
const userSlice = createSlice({
    name:'user',
    initialState
})

export default userSlice.reducer