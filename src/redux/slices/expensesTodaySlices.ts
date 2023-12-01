import { createSlice} from "@reduxjs/toolkit";

const initialState: ExpensesTodayState = {
  expensesToday:0,
};
export const expensesTodaySlice = createSlice({
  name: "expensesToday",
  initialState,
  reducers: {
    changeExpensesToday: (state, action) => {
      state.expensesToday = action.payload;
    },
  },
});

export const { changeExpensesToday } = expensesTodaySlice.actions;

export default expensesTodaySlice.reducer;

// Interfaces 

export interface ExpensesTodayState {
  expensesToday: number;
}