import { createSlice } from "@reduxjs/toolkit";


export interface TotalBalanceState {
  totalBalance: number;
}

const initialState: TotalBalanceState = {
    totalBalance: 0,
};

export const totalBalanceSlice = createSlice({
  name: "totalBalance",
  initialState,
  reducers: {
    changeTotalBalance: (state, action) => {
      state.totalBalance = action.payload;
  },


  },
});


export const {changeTotalBalance} = totalBalanceSlice.actions;
export default totalBalanceSlice.reducer;




