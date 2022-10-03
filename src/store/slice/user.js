import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: { name: "", email: "", gender: "", age: null },
  },
  reducers: {
    updateUser: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
