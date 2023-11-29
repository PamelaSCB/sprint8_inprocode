import { createSlice } from "@reduxjs/toolkit";

const initialState: InitialState = {
    totalBalance: null,
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


interface InitialState {
  totalBalance: number | null;
}

