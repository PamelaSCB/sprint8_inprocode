import { createSlice } from "@reduxjs/toolkit";

const initialState: VariationYesterdayVsTodayState = {
   variationYesterdayVsToday: 0, 
  yesterdayExpenses: 0,
 };

export const variationYesterdayVsTodaySlice = createSlice({
  name: "variationYesterdayVsToday",
  initialState,
  reducers: {
    changeVariation: (state, action) => {
      state.variationYesterdayVsToday = action.payload;
    },
    changeExpenses: (state, action) => {
      state.yesterdayExpenses = action.payload;
    },
  },
});

export const { changeVariation, changeExpenses } = variationYesterdayVsTodaySlice.actions;
export default variationYesterdayVsTodaySlice.reducer;


export interface VariationYesterdayVsTodayState {
  yesterdayExpenses: number | null;
  variationYesterdayVsToday: number | null;

}   
