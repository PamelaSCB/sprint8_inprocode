import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../redux/store";
import { useEffect } from "react";
import { changeTotalBalance } from "../../redux/slices/totalBalanceSlices";
import {TotalBalanceStyled} from "./TotalBalanceStyled";

function TotalBalance(): JSX.Element {
  const dispatch = useDispatch();
  const graphExpenses = useSelector((state: Store) => state.graphExpenses);
  const totalBalance = useSelector((state: Store) => state.totalBalance);
  const currency = useSelector((state: Store) => state.currency);

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
  }, [graphExpenses]);

  return (
    <TotalBalanceStyled>
    <div className="totalBalance">
      <span>
        <small>Total Balance</small>
      </span>
      <p>
        <strong>
          {totalBalance.totalBalance} {currency.currency}
        </strong>
      </p>
      <div className="navigation-arrows">
        <img
          src="/src/assets/img/arrow-sm-left-svgrepo-com.svg"
          alt="left-arrow"
        />
        <img
          src="/src/assets/img/arrow-sm-right-svgrepo-com.svg"
          alt="right-arrow"
        />
      </div>
    </div>
    </TotalBalanceStyled>
  );
}

export default TotalBalance;

