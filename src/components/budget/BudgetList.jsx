import { useState } from 'react';
import data from '../../data/budget.json';
import Edit from './EditBudget';
import './budget.css'
import { BarChart } from '@mui/x-charts/BarChart';


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

  const deleteExpense = (name)=>{
    let newArray = expenses.filter(expense=>(expense.name!==name));
    setExpenses(newArray)
  
  }



  return ( <div>
    <div  className="budgetPage">
    <h2>Custom Budgeting Simulator</h2>
    <div className="budgetContainer">
      <div className="budgetHead">
      <div>Initial Budget</div><div className="right-align">${budget}</div>
      </div>
      {expenses && expenses.map(expense=>(<div key={expense.name} className="expenses">
        
        <div><i className="fa-solid fa-trash" onClick={()=>deleteExpense(expense.name)}></i>{expense.name}</div><div className="right-align">{expense.amount}</div>
        </div>))}
      <div className="budgetTotal">
        <div>Net Budget</div>
        <div className="right-align">${budget-(expenses.reduce((acc, el)=>{return acc+el.amount}, 0))}</div>
      </div> 
    </div>
    <div className='editContainer'>
      <Edit  editExpenses={editExpenses} budget={budget} expenses={expenses} setBudget={setBudget}/>
    </div>
    </div>

    <div className='barChart'>
    <BarChart
  xAxis={[
    {
      id: 'barCategories',
      data: expenses.map(expense=>(`${expense.name}`)),
      scaleType: 'band',
    },
  ]}
  series={[
    {
      data: expenses.map(expense=>(expense.amount)),
    },
  ]}
  width={500}
  height={300}
/>
<h2>Bar Graph of Expenses</h2>
</div>
  
  </div> );
}
 
export default BudgetList;