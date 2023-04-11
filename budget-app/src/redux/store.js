import { configureStore } from "@reduxjs/toolkit";
import expensesSlice from "./features/expensesSlice";
import authSlice from "./features/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    expenses: expensesSlice,
  },
});
