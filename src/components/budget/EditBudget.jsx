import { useRef, useState } from "react";
import './budget.css'

const EditBudget = ({editExpenses, budget, expenses, setBudget}) => {

  const [localBudget,setLocalBudget] = useState(budget);
  const [expenseAmount, setExpenseAmount] = useState(null);
  const [expenseType, setExpenseType] = useState(null);
  const [newExpense, setNewExpense] = useState(null);
  const [newExpenseAmount, setNewExpenseAmount] = useState(null)
  
  const newRef = useRef(null);

  const handleSelect = (e) =>{
    if(e.target.value==="add"){
      newRef.current.showModal();
    }
    else{
      setExpenseType(e.target.value)
    }
  }

  const handleClose = ()=>{
    newRef.current.close();
  }

  const handleAdd = (e)=>{
    e.preventDefault()
   if(newExpense==="" || newExpense == null){
    alert("Please input an expense type.")
   }else{
    editExpenses(newExpense, newExpenseAmount);
    newRef.current.close();
   }
    
  }

  const handleEdit = (e)=>{
    e.preventDefault();
    if(expenseType==null || expenseType===""){
      alert("Select an Expense Type")
    }else{
      editExpenses(expenseType, expenseAmount)
    }
    
  }

  const handleSetBudget = (e) =>{
    e.preventDefault();
    setBudget(Number(localBudget));
  }


  return ( <div className="budgetEditing">
    <form>
      <label>Budget</label>
      <input type="number" value={localBudget} onChange={e=>setLocalBudget(e.target.value)}required></input>
      <button onClick={handleSetBudget}>Set Budget</button>



      <label>Expenses Type</label>
      
      <select onChange={handleSelect} required>
        <option value="null">Select or Add Expense Type</option>
        {expenses.map(expense=>{
          return <option value={expense.name} key={expense.name} >{expense.name}</option>
        })}
        <option value="add">Add a New Expense</option>
      </select>

      <label>Expense Amount</label>
      <input type="number" onChange={e=>setExpenseAmount(e.target.value)} required></input>

      <button onClick={handleEdit}>Submit</button>

      <dialog ref={newRef}>
        <input type="text" placeholder="new expense" onChange={e=>setNewExpense(e.target.value)} required></input>
        <input type="number" placeholder="amount" onChange={e=>setNewExpenseAmount(e.target.value)} required></input>
        <button onClick={handleAdd}>Add</button>
        <i className="fa-solid fa-delete-left"
        onClick = {handleClose}></i>
      </dialog>
    </form>
  </div> );
}
 
export default EditBudget;