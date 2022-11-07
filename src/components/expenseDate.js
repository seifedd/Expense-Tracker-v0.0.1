
import "./expenseDate.css"
function ExpenseDate(prop){

    console.log("Yayyy 3",prop.children)
    return(<div className="expense-date">
        <div className="expense-date__month">{prop?.children.toLocaleString('default', { month: 'long' })}</div>
        <div className="expense-date__year">{prop?.children.getFullYear()}</div>
        <div className="expense-date__day">{prop?.children.toLocaleString("default",{day:"2-digit"})}</div>
        </div>)

}
export default ExpenseDate;