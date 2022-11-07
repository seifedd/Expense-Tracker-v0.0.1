/* eslint-disable no-undef */

import React, { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import "./expenseForm.css"
function ExpenseForm(props){
      //state for expense title
    const [enteredtitle,setTitle]=useState('');
    const [enteredAmount,setAmount]=useState({enteredAmount:parseFloat(0.0).toFixed(2)});
    const  [enteredDate,setDate]=useState();
    const titleHandler=function(event){
      event.preventDefault();
      setTitle(event.target.value)
    }
    const amountHandler=function(event){
    event.preventDefault();
     setAmount(parseFloat(event.target.value).toFixed(2));
    }
    const dateHandler=function(event){

        setDate(event.target.value)

    }

   const  submitHandler=(event)=>{
      event.preventDefault()

    const ExpenseData = {
        id:"e"+(Math.random()+1).toString(36).substring(7),
        title:enteredtitle,
        amount:enteredAmount,
        date:new Date(enteredDate)
    }
    
      props.onSubmitNewExpense(ExpenseData);
      
      setTitle('')
      setAmount(0)
      setDate("Invalid Date")
      }



  return(
  <form onSubmit={submitHandler}>
  <div className="new-expense__controls">
    <div className="new-expense__control">
      <label>title</label>
      <input onChange={titleHandler}
      value={enteredtitle}
        type="text"
      />
    </div>
    <label className="new-expense__control">
      <label>amount</label>
      <input onChange={amountHandler}
      value={enteredAmount}
        type="number"
      />
    </label>
    <div className="new-expense__control" >
      <label>Date</label>
      <input
        type="date"
        min="1990-01-01"
        max="2022-12-31"
        value={enteredDate}
        onChange={dateHandler}
      ></input>
    </div>
  </div>
  <div className="new-expense__actions">
    <button type="submit">Add expense</button>
  </div>
</form>


)
     
}
export default ExpenseForm;