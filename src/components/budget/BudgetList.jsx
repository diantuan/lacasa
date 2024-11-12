import { useState } from 'react';
import data from '../../data/budget.json';
import Edit from './EditBudget';
import './budget.css'


const BudgetList = () => {

  const [expenses, setExpenses] = useState(data.expenses)
  const [budget, setBudget] = useState(data.budget)

  const editExpenses = (expenseType, amounts)=>{
    let newArray = [...expenses]
    let index = expenses.findIndex(expense=>(expense.name===expenseType))
    
    if(index>=0){
      newArray[index].amount = Number(amounts);
      setExpenses(newArray);
    }
    else{
      const obj = {
        "name":expenseType,
        "amount":Number(amounts)
      }
      setExpenses([...newArray, obj])
    }
  }



  return ( <div className="budgetContainer">
    <div className="budgetHead">
    <div>Budget</div><div className="right-align">${budget}</div>
    </div>
    {expenses && expenses.map(expense=>(<div key={expense.name} className="expenses">
      <div>{expense.name}</div><div className="right-align">{expense.amount}</div>
      </div>))}
    <div className="budgetTotal">
      <div>Net Budget</div>
      <div className="right-align">${budget-(expenses.reduce((acc, el)=>{return acc+el.amount}, 0))}</div>
    </div> 
    <Edit  editExpenses={editExpenses} budget={budget} expenses={expenses} setBudget={setBudget}/>
    
  </div> );
}
 
export default BudgetList;