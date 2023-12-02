import { createSlice} from "@reduxjs/toolkit";

const initialState: ExpensesTodayState = {
  expensesToday:0,
  today:"monday",
  dayNumber:0,
};
export const expensesTodaySlice = createSlice({
  name: "expensesToday",
  initialState,
  reducers: {
    changeExpensesToday: (state, action) => {
      state.expensesToday = action.payload;
    },

    changeDayNumber: (state, action) => {
      state.dayNumber = action.payload;
    },

    changeToday: (state, action) => {
      state.today = action.payload;
    },
  },
});

export const { changeExpensesToday, changeDayNumber, changeToday } = expensesTodaySlice.actions;

export default expensesTodaySlice.reducer;

// Interfaces 

export interface ExpensesTodayState {
  expensesToday: number;
  today: string;
  dayNumber: number;
}