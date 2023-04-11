import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  budget: 1000,
  expenses: [],
};

export const expensesSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    setExpenses: (state, action) => {
      state.expenses = action.payload;
    },
    addExpenses: (state, action) => {
      state.expenses = [...state.expenses, action.payload];
    },
    deleteExpenses: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
    },
    updateBudget: (state, action) => {
      state.budget = action.payload;
    },
  },
});

export const { setExpenses, addExpenses, deleteExpenses, updateBudget } = expensesSlice.actions;
export default expensesSlice.reducer;
