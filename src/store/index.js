import { configureStore } from "@reduxjs/toolkit";
import getOnlineUserId from "./slice/onlineUser";
import userSlice from "./slice/user";
import { composeWithDevTools } from "redux-devtools-extension";

export default configureStore(
  {
    reducer: {
      userId: getOnlineUserId,
    },
  },
  composeWithDevTools()
);
