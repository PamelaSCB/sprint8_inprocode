import { createSlice } from "@reduxjs/toolkit";

const initialState: InitialState = { VariationYesterdayVsTodaySlice: null, 
 };

export const variationYesterdayVsTodaySlice = createSlice({
  name: "variationYesterdayVsToday",
  initialState, 
  reducers: {
    addVariation: (state, action) => {
      state.VariationYesterdayVsTodaySlice = action.payload;
    },
  },
});

export const { addVariation } = variationYesterdayVsTodaySlice.actions;
export default variationYesterdayVsTodaySlice.reducer;

interface InitialState {
  VariationYesterdayVsTodaySlice: number | null;
}   
