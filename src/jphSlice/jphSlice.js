import { createSlice } from "@reduxjs/toolkit";
import { JPH_CONST_STRING } from "../service/const/actionConst";

const initialState = {
  data: null,
  loading: false,
};

const jphSlice = createSlice({
  name: "jphGetUsers",
  initialState,
  reducers: {
    getJphUsersRequestAction: (state, action) => {
      console.log(action);
    },
  },
});

export const { getJphUsersRequestAction } = jphSlice.actions;

export default jphSlice.reducer;
