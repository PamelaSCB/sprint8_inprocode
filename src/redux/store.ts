import {AnyAction,configureStore} from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";

import expensesTodayReducer, {ExpensesTodayState} from "./slices/expensesTodaySlices";
import graphExpensesReducer, {GraphExpensesState} from "./slices/graphExpensesSlices.ts";
import totalBalanceReducer,{TotalBalanceState} from "./slices/totalBalanceSlices";
import variationYesterdayVsTodayReducer, {VariationYesterdayVsTodayState} from "./slices/variationYesterdayVsTodaySlices";
import currencyReducer, {CurrencyState} from "./slices/currencySlices";
import weekNumberReducer,{WeeknumberState} from "./slices/weekNumberSlices";

export interface Store {
  totalBalance: TotalBalanceState; 
  currency: CurrencyState;
  weekNumber: WeeknumberState;
  expensesToday: ExpensesTodayState;
  graphExpenses: GraphExpensesState;
  variationYesterdayVsToday: VariationYesterdayVsTodayState;
}

export const store:ToolkitStore<Store, AnyAction> = configureStore({
  reducer: {
    expensesToday: expensesTodayReducer,
    graphExpenses: graphExpensesReducer,
    totalBalance: totalBalanceReducer,
    variationYesterdayVsToday: variationYesterdayVsTodayReducer,
    currency : currencyReducer,
    weekNumber : weekNumberReducer,
  },
});
export default store; 

