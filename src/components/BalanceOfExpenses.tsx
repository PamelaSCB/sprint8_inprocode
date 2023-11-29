import DataGraph from "./GraphExpenses";
import ExpensesToday from "./ExpensesToday";
import VariationYesterdayVsToday from "./variationYesterdayVsToday";
const BalanceOfExpense = () => {
  return (
    <div>
      <h1>Balance Of Expenses</h1>
      <DataGraph />
      <ExpensesToday />
      <VariationYesterdayVsToday />
    </div>
  );
};

export default BalanceOfExpense;
