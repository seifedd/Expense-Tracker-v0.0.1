import "./expenseDate"
import ExpenseDate from "./expenseDate";
import "./expenseItem.css"
function ExpenseItem(props){
  console.log("Yayyyyy 2",props.items)
    return(<div className="expense-item">     
    <div>
      <ExpenseDate>{props.items?.date}</ExpenseDate>
      
      </div>
      <h2>{props.items?.title}</h2>
      <div>
      
      <div className="expense-item__price"> {props.items?.amount}</div>
    </div>
  </div>); 
  
}

export default ExpenseItem;