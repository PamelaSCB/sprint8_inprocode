import { configureStore} from "@reduxjs/toolkit";

import expensesTodayReducer from "./slices/expensesTodaySlices";
import graphExpensesReducer from "./slices/graphExpensesSlices";
import totalBalanceReducer from "./slices/totalBalanceSlices";
import variationYesterdayVsTodayReducer from "./slices/variationYesterdayVsTodaySlices";


export const store = configureStore({
  reducer: {
    expensesToday: expensesTodayReducer,
    graphExpenses: graphExpensesReducer,
    totalBalance: totalBalanceReducer,
    variationYesterdayVsToday: variationYesterdayVsTodayReducer,
  },
});