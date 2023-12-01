import {createSlice} from '@reduxjs/toolkit';

const initialState:CurrencyState = {
    currency: '',
};
export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    changeCurrency: (state, action) => {
      state.currency = action.payload;
    },
  },
});

export const {changeCurrency} = currencySlice.actions;

export default currencySlice.reducer;

export interface CurrencyState {
  currency: string;
}