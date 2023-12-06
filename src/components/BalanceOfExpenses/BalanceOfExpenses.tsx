import {useTranslation} from "react-i18next";

import DataGraph from "../GraphExpenses/GraphExpenses";
import ExpensesToday from "../ExpensesToday/ExpensesToday";
import VariationYesterdayVsToday from "../VariationYesterdayVsToday/VariationYesterdayVsToday";
import { BalanceOfExpensesStyled } from "./BalanceOfExpensesStyled";
function BalanceOfExpense() {
  const { t } = useTranslation();
  return (
    <BalanceOfExpensesStyled>
      <>
        <h1>{t("main.expensesLastWeek")}</h1>
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
