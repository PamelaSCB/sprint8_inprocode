import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../redux/store";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { changeTotalBalance } from "../../redux/slices/totalBalanceSlices";
import { TotalBalanceStyled } from "./TotalBalanceStyled";

function TotalBalance(): JSX.Element {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const selectGraphExpenses = (state: Store) => state.graphExpenses;
  const selectTotalBalance = (state: Store) => state.totalBalance;
  const selectCurrency = (state: Store) => state.currency;

  const graphExpenses = useSelector(selectGraphExpenses);
  const totalBalance = useSelector(selectTotalBalance);
  const currency = useSelector(selectCurrency);

  useEffect(() => {
    const total: number =
      graphExpenses.monday +
      graphExpenses.tuesday +
      graphExpenses.wednesday +
      graphExpenses.thursday +
      graphExpenses.friday +
      graphExpenses.saturday +
      graphExpenses.sunday;

    dispatch(changeTotalBalance(total));
  }, [graphExpenses, changeTotalBalance]);

  return (
    <TotalBalanceStyled>
      <div className="totalBalance">
        <span>
          <small>{t("main.totalBalance")}</small>
        </span>
        <p>
          <strong>
            {totalBalance.totalBalance} {currency.currency}
          </strong>
        </p>
      </div>
    </TotalBalanceStyled>
  );
}

export default TotalBalance;
