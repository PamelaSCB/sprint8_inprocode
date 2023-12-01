import {createSlice} from '@reduxjs/toolkit';

const initialState:WeeknumberState={
    weekNumber: 0,
};

const weekNumberSlice = createSlice({
  name: 'weekNumber',
  initialState,
  reducers: {
    changeWeekNumber: (state, action) => {
      state.weekNumber = action.payload;
    },
  },
});

export const {changeWeekNumber} = weekNumberSlice.actions;

export default weekNumberSlice.reducer;

export interface WeeknumberState {
  weekNumber: number;
}