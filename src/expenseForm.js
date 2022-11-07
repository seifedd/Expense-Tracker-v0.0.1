import "./expenseForm.css";
import "../../App";
import { useState } from "react";
function ExpenseForm(props) {
  const [enteredTitle, setTitle] = useState("--");
  const [enteredAmount, setAmount] = useState({
    enteredAmout: parseFloat(0.0).toFixed(2)
  });
  const [enteredDate, setDate] = useState();

  const titleChangeHandler = function(event) {
    console.log("Input title event target value", event.target.value);

    setTitle(event.target.value);
  };

  const amountChangeHandler = function(event) {
    console.log(
      "Input amount event tartget value",
      parseFloat(event.target.value).toFixed(2)
    );
    setAmount(parseFloat(event.target.value).toFixed(2));
  };

  const dateChangehandler = function(event) {
    if (event.target.value) {
      console.log(event.target.value);
      setDate(event.target.value);
    } else {
      setDate("Invalid Date");
    }
  };

  const submitHandler = function(event) {
    event.preventDefault();

    const expenseData = {
      id: "e" + (Math.random() + 1).toString(36).substring(7),
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    console.log("Expense newly entered ...", expenseData.amount);
    if (typeof expenseData.amount === "object") {
      expenseData.amount = parseFloat(0.0).toFixed(2);
    }

    props.onSubmitNewExpense(expenseData);
    setTitle("--");
    setAmount(parseFloat(0.0).toFixed(2));
    setDate("Invalid Date");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <label className="new-expense__control">
          <label>amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </label>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="1990-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangehandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
