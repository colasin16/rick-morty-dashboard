import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import sessionReducer from "../_shared/infrastructure/session/SessionSlice";
import toastReducer from "../_shared/ui/components/toast/ToastSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    session: sessionReducer,
    toasts: toastReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
