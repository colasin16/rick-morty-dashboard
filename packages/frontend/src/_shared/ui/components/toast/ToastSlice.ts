import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Toast {
  id: number;
  message: string;
  type: "success" | "error";
}

export interface ToastsState {
  list: Array<Toast>;
}

const initialState: ToastsState = {
  list: [],
};

export const toastsSlice = createSlice({
  name: "toasts",
  initialState,
  reducers: {
    addToast: (state, action: PayloadAction<{ message: string; type: "success" | "error" }>) => {
      const id = state.list.length + 1;
      state.list.push({ id: id, ...action.payload });
    },
  },
});

export const { addToast } = toastsSlice.actions;
export default toastsSlice.reducer;
