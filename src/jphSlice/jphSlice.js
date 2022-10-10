import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { JPH_CONST_STRING } from "../service/const/actionConst";

const initialState = {
  data: null,
  error: null,
  loading: false,
};

export const jphGetUsers = createAsyncThunk('jphGetUsers', async () => {
  try {
    let endpoint = '/users'
    let response = await fetch (`https://jsonplaceholder.typicde.com${endpoint}`) 
    let data = await response.json()
    return data;
  } catch (err) {
    throw err;
  }
});

const jphSlice = createSlice({
  name: "jphSlice",
  initialState,
  reducers: {
    getJphUsersRequestAction: (state, action) => {
      console.log(action);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(jphGetUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(jphGetUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(jphGetUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
    }
});

export const { getJphUsersRequestAction } = jphSlice.actions;

export default jphSlice.reducer;
