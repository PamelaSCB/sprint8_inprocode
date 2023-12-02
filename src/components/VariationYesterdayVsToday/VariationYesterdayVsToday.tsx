import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  changeVariation,
  changeExpenses,
} from "../../redux/slices/variationYesterdayVsTodaySlices";
import { Store } from "../../redux/store";
import { VariationStyled } from "./VariationStyled";

function VariationYesterdayVsToday(): JSX.Element {

  const dispatch = useDispatch();

  const graphExpenses = useSelector((state: Store) => state.graphExpenses);

  const { dayNumber, expensesToday } = useSelector(
    (state: Store) => state.expensesToday
  );

  const { variationYesterdayVsToday, yesterdayExpenses } = useSelector(
    (state: Store) => state.variationYesterdayVsToday
  );

  useEffect(() => {
    switch (dayNumber) {
      case 1:
        dispatch(changeExpenses(graphExpenses.monday));
        break;
      case 2:
        dispatch(changeExpenses(graphExpenses.tuesday));
        break;
      case 3:
        dispatch(changeExpenses(graphExpenses.wednesday));
        break;
      case 4:
        dispatch(changeExpenses(graphExpenses.thursday));
        break;
      case 5:
        dispatch(changeExpenses(graphExpenses.friday));
        break;
      case 6:
        dispatch(changeExpenses(graphExpenses.saturday));
        break;
      case 7:
        dispatch(changeExpenses(graphExpenses.sunday));
        break;

      default:
        break;
    }
  }, [dayNumber]);

  useEffect(() => {
    dispatch(
      changeVariation(
        parseFloat(((expensesToday * 100) / yesterdayExpenses - 100).toFixed(2))
      )
    );
  }, [expensesToday, yesterdayExpenses]);

  return (
    <VariationStyled>
      <p>
        <strong>
          {dayNumber === 0
            ? "Check previous week"
            : variationYesterdayVsToday
            ? `${variationYesterdayVsToday}%`
            : ""}
        </strong>
      </p>
      <p>
        <strong>respect yesterday</strong>
      </p>
    </VariationStyled>
  );
}

export default VariationYesterdayVsToday;
