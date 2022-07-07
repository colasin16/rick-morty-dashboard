import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../domain/user/User";

interface SessionSlice {
  user: User;
  token: string;
}

const initialState: SessionSlice = {
  user: { id: "", username: "" },
  token: "",
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

export const { setSession } = sessionSlice.actions;
export default sessionSlice.reducer;
