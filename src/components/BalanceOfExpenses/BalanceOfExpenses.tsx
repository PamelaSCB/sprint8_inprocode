import DataGraph from "../GraphExpenses/GraphExpenses";
import ExpensesToday from "../ExpensesToday/ExpensesToday";
import VariationYesterdayVsToday from "../VariationYesterdayVsToday/VariationYesterdayVsToday";
import { BalanceOfExpensesStyled } from "./BalanceOfExpensesStyled";
function BalanceOfExpense() {
  return (
    <BalanceOfExpensesStyled>
      <>
        <h1>Expenses- Last Week</h1>
        <DataGraph />
      </>
      <div className="graph-line"></div>
      <footer>
        <ExpensesToday />
        <VariationYesterdayVsToday />
      </footer>
    </BalanceOfExpensesStyled>
  );
}

export default BalanceOfExpense;
