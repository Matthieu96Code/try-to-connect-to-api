import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = 'https://randomuser.me/api/?results=5';

export const getUsers = createAsyncThunk('users/getUsers', async (action, thunkAPI) => {
  try {
    const resp = await fetch(url, {
      method: 'GET',
      headers: {
        'content-Type': 'application.json'
      }
    });
    const data = await resp.json();
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue('Thunk Error')
  }
})

const initialState = {
  users: [],
  isLoading: false,
  error: undefined
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload.results;
      })
      .addCase(getUsers.rejected, (state) => {
        state.isLoading = false;
        state.error = 'State Error'
      })
  }
});

export default usersSlice.reducer;