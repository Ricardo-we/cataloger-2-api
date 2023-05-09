import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./slices/language.slice";
import userReducer from "./slices/user.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    languages: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
