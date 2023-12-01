import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import BalanceOfExpense from "./components/BalanceOfExpenses/BalanceOfExpenses";
import TotalBalance from "./components/TotalBalance/TotalBalance";
import { changeWeekNumber } from "./redux/slices/weekNumberSlices";
import { addGraphExpenses } from "./redux/slices/graphExpensesSlices";
import { changeCurrency } from "./redux/slices/currencySlices";

export default function App(): JSX.Element {
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
      });
  }, []);

  return (
    <div className="app">
      <TotalBalance />
      <BalanceOfExpense />
    </div>
  );
}
