import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../utils/localStorage";

const userFromLocalStorage = getUserFromLocalStorage();
const initialState = {
  isLoading: "",
  isLoadingButton: false,
  user: userFromLocalStorage !== null ? userFromLocalStorage : undefined,
};

//*API calls
export const logoutLocalStorage = () => async (dispatch) => {
  removeUserFromLocalStorage();
  dispatch(userSlice.actions.setUser(undefined));
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = undefined;
    },
  },
});
export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
