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

  const dayMapping: Record< string,number > = {
    monday: graphExpenses.monday,
    tuesday: graphExpenses.tuesday,
    wednesday: graphExpenses.wednesday,
    thursday: graphExpenses.thursday,
    friday: graphExpenses.friday,
    saturday: graphExpenses.saturday,
    sunday: graphExpenses.sunday,
  };
  
  useEffect(() => {
    if (today in dayMapping) {
      dispatch(changeExpensesToday(dayMapping[today]));
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
            src="/src/assets/img/arrow-sm-left-svgrepo-com.svg"
            alt="left-arrow"
          ></img>
        </button>
        <p className="today_text">{todayText}</p>
        <button onClick={() => handleClick("next")}>
          <img
            src="/src/assets/img/arrow-sm-right-svgrepo-com.svg"
            alt="right-arrow"
          ></img>
        </button>
      </div>
    </ExpensesTodayStyled>
  );
}

export default ExpensesToday;
