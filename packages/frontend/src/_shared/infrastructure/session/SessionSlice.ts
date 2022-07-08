import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { User } from "../../domain/user/User";

interface SessionSlice {
  user: User;
  token: string;
}

const initialState: SessionSlice = {
  user: {
    id: localStorage.getItem("userId") ?? "",
    username: localStorage.getItem("username") ?? "",
  },
  token: localStorage.getItem("token") ?? "",
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<SessionSlice>) => {
      state = action.payload;
    },
  },
});

export const selectUserLoggedIn = (state: RootState) => !!state.session.token;
export const userAuthToken = (state: RootState) => state.session.token;
export const { setSession } = sessionSlice.actions;
export default sessionSlice.reducer;
