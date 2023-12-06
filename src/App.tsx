import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect, Suspense } from "react";


import BalanceOfExpense from "./components/BalanceOfExpenses/BalanceOfExpenses";
import TotalBalance from "./components/TotalBalance/TotalBalance";
import TranslationBottoms from "./components/TranslationBottoms/TranslationBottoms";

import { changeWeekNumber } from "./redux/slices/weekNumberSlices";
import { addGraphExpenses } from "./redux/slices/graphExpensesSlices";
import { changeCurrency } from "./redux/slices/currencySlices";
import { changeExpensesToday } from "./redux/slices/expensesTodaySlices";

function App(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://api.sandapi.com/user_3a2fyL/inprocode")
      .then((response) => response.json())
      .then((data) => {
        const expenses = data.expenses;
        const graphExpenses = expenses.find(
          (item: { week: number }) => item.week === expenses.length
        );
        dispatch(changeCurrency(graphExpenses.currency));
        dispatch(changeWeekNumber(expenses.length));
        dispatch(addGraphExpenses(graphExpenses.weekly_expenses));
        dispatch(changeExpensesToday(graphExpenses.weekly_expenses.monday));
      });
  }, []);

  return (
    <div className="app">
      <TranslationBottoms />
      <TotalBalance />
      <BalanceOfExpense />
    </div>
  );
}

export default function AppWithSuspense(): JSX.Element {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  );
}
