import DataGraph from "./GraphExpenses";
import ExpensesToday from "./ExpensesToday";
import VariationYesterdayVsToday from "./VariationYesterdayVsToday";
const BalanceOfExpense = () => {
  return (
    <div>
      <h1>Expenses- Last Week</h1>
      <DataGraph />
      <div className="graph-line"></div>
      <footer>
      <ExpensesToday />
      <VariationYesterdayVsToday />
      </footer>
    </div>
  );
};

export default BalanceOfExpense;
