import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Store } from "../../redux/store";
import { useTranslation } from "react-i18next";

import { ExpensesTodayStyled } from "./ExpensesTodayStyled";
import {
  changeDayNumber,
  changeExpensesToday,
  changeToday,
} from "../../redux/slices/expensesTodaySlices";

function ExpensesToday(): JSX.Element {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const graphExpenses = useSelector((state: Store) => state.graphExpenses);
  const { expensesToday, today, dayNumber } = useSelector(
    (state: Store) => state.expensesToday
  );
  const { currency } = useSelector((state: Store) => state.currency);

  useEffect(() => {
    dispatch(changeToday(Object.keys(graphExpenses)[dayNumber]));
  }, [dayNumber]);

  useEffect(() => {
    switch (today) {
      case "monday":
        dispatch(changeExpensesToday(graphExpenses.monday));
        break;

      case "tuesday":
        dispatch(changeExpensesToday(graphExpenses.tuesday));
        break;

      case "wednesday":
        dispatch(changeExpensesToday(graphExpenses.wednesday));
        break;

      case "thursday":
        dispatch(changeExpensesToday(graphExpenses.thursday));
        break;

      case "friday":
        dispatch(changeExpensesToday(graphExpenses.friday));
        break;

      case "saturday":
        dispatch(changeExpensesToday(graphExpenses.saturday));
        break;

      case "sunday":
        dispatch(changeExpensesToday(graphExpenses.sunday));
        break;

      default:
        break;
    }
  }, [dayNumber, today]);

  const handleClick = (browse: string) => {
    if (browse === "previous" && dayNumber > 0) {
      dispatch(changeDayNumber(dayNumber - 1));
    } else if (browse === "next" && dayNumber < 6) {
      dispatch(changeDayNumber(dayNumber + 1));
    }
  };
  const todayText = t(`main.week.${today}`);

  return (
    <ExpensesTodayStyled>
      <span>
        <small>{t("main.expensesToday")}</small>
      </span>
      <p>
        <strong>
          {expensesToday}
          {currency}
        </strong>
      </p>
      <div className="day-browser">
        <button onClick={() => handleClick("previous")}>
          <img
            src="/src/assets/img/arrowLeft.svg"
            alt="left-arrow"
          ></img>
        </button>
        <p className="today_text">{todayText}</p>
        <button onClick={() => handleClick("next")}>
          <img
            src="/src/assets/img/arrowRight.svg"
            alt="right-arrow"
          ></img>
        </button>
      </div>
    </ExpensesTodayStyled>
  );
}

export default ExpensesToday;
