import { createSlice } from "@reduxjs/toolkit";

const initialState:InitialState = {
    monday: null,
    tuesday: null,
    wednesday: null,
    thursday: null,
    friday: null,
    saturday: null,
    sunday: null,
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


interface InitialState {
  monday: number | null;
  tuesday: number | null;
  wednesday: number | null;
  thursday: number | null;
  friday: number | null;
  saturday: number | null;
  sunday: number | null;
}