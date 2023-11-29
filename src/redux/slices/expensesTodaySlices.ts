import { createSlice} from "@reduxjs/toolkit";

const initialState: InitialState = {
  expensesToday:null,
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
interface InitialState {
  expensesToday: number | null;
}