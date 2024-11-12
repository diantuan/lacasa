import { useContext, useState } from "react";
import { clientContext } from "../ClientHandling";

const Withdraw = () => {
  const {clients, withdraw} = useContext(clientContext);

  const [from, setFrom] = useState(null);
  const [amount, setAmount] = useState(null);

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(from==null || Number(amount)<=0){
       alert("Please select an account or a valid amount.")
      }
    else{
      withdraw(from, Number(amount))
      }
    
  }

  return ( <div className="transFormContainer">
    <h2>Withdraw</h2>
    <form onSubmit ={handleSubmit} className="transactionForm">
      <select onChange = {e=>setFrom(e.target.value)} required>
        <option value="null">Withdraw From</option>
        {clients.map(client=>(<option key= {client.id} value={client.id}>{client.lastName}, {client.firstName}</option>))}
      </select>
    
      <input type="number" placeholder="Amount to Withdraw" onChange = {e=>setAmount(e.target.value)} required></input>
      <button type="submit">Withdraw</button>
    </form>
    </div>)
}
 
export default Withdraw;