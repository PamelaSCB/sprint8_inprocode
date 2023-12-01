import { createSlice } from "@reduxjs/toolkit";

const initialState: VariationYesterdayVsToday = { VariationYesterdayVsTodaySlice: null, 
 };

export const variationYesterdayVsTodaySlice = createSlice({
  name: "variationYesterdayVsToday",
  initialState,
  reducers: {
    changeVariation: (state, action) => {
      state.VariationYesterdayVsTodaySlice = action.payload;
    },
  },
});

export const { changeVariation } = variationYesterdayVsTodaySlice.actions;
export default variationYesterdayVsTodaySlice.reducer;

//Interfaces 

export interface VariationYesterdayVsToday {
  VariationYesterdayVsTodaySlice: number | null;
}   
