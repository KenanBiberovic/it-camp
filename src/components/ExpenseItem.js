import React, { useState } from "react";
import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [title, settitle] = useState(props.title);

  const clickHandler = () => {
    settitle("Update!!");
    console.log("Updated!!!");
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}$</div>
      </div>
    </div>
  );
};
export default ExpenseItem;
