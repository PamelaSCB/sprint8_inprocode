import { createSlice } from "@reduxjs/toolkit";

export interface GraphExpensesState {
  monday: number;
  tuesday: number;
  wednesday: number;
  thursday: number;
  friday: number;
  saturday: number;
  sunday: number;
}

const initialState:GraphExpensesState = {
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0,
    saturday:0,
    sunday: 0,
};

export const graphExpensesSlice = createSlice({
  name: "graphExpenses",
 initialState,
  reducers: {
    addGraphExpenses: (state, action) => {
      const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } =
        action.payload;

      state.monday = monday;
      state.tuesday = tuesday;
      state.wednesday = wednesday;
      state.thursday = thursday;
      state.friday = friday;
      state.saturday = saturday;
      state.sunday = sunday;
    },
  },
});

export const { addGraphExpenses } = graphExpensesSlice.actions;
export default graphExpensesSlice.reducer;


