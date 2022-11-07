
import ExpenseItem from "./expenseItem";
import "./expenses.css";


function Expenses(props) {
  return (
      
    <div className="expenses">
      {props.ExpenseList.map((expense) => {
        return (
<ExpenseItem items={expense}></ExpenseItem>
  );
})}
</div>)}
export default Expenses;
