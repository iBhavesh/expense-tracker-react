import React from "react";

import "./ExpensesFilter.css";

type Props = {
  onChange: (year: string) => void;
  selected: string;
};

const ExpensesFilter = (props: Props) => {
  const selectChangeHandler: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    props.onChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={selectChangeHandler} defaultValue={props.selected}>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
