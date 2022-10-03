import { createSlice } from "@reduxjs/toolkit";

export const getOnlineUserId = createSlice({
  name: "userId",
  initialState: {
    getUser: {},
  },
  reducers: {
    getUserId: (state, action) => {
      state.getUser = action.payload;
    },
  },
});

export const { getUserId } = getOnlineUserId.actions;

export default getOnlineUserId.reducer;
