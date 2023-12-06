import {createSlice} from '@reduxjs/toolkit';

export interface WeeknumberState {
  weekNumber: number;
}

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

