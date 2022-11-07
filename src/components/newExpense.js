import ExpenseForm from "./expenseForm"
import "./newExpense.css"


function NewExpense(props){
        const onSubmitNew=function(ExpenseData){
           
           props.newExpenseEntered(ExpenseData);
        }

       return(<div className="new-expense"><ExpenseForm onSubmitNewExpense={onSubmitNew}/></div>) ;

};

export default NewExpense;