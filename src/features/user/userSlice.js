import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getUserURL } from "../../api";

const initialState = {
    user: {},
    pending: null,
    error: false
}

export const fetchUser = createAsyncThunk('user/fetchUser', async (username)=>{
        const userData = await axios.get(getUserURL(username))
        return userData.data
})

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.pending = false;
      state.user = action.payload;
    },
    [fetchUser.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});


export default userSlice.reducer;