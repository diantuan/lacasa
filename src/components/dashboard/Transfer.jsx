import { useContext, useState } from "react";
import { clientContext } from "../ClientHandling";


const Transfer = () => {

  const {clients, transfer} = useContext(clientContext);

  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [amount, setAmount] = useState(null);

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(from==null || to==null || Number(amount)<=0){
      alert("Please select an account or a valid amount.")
    }
    else if(from===to){
      alert("Accounts cannot transfer to themselves.")
    }
    else{
      transfer(from, to, Number(amount))
    }
    
  }

  return ( <div className="transFormContainer">
    <h2 className="transactionTitle">Transfer</h2>
    <form onSubmit ={handleSubmit} className="transactionForm">
      <select onChange = {e=>setFrom(e.target.value)} required>
        <option value="null">Transfer From</option>
        {clients.map(client=>(<option key= {client.id} value={client.id}>{client.lastName}, {client.firstName}</option>))}
      </select>
      <select onChange = {e=>setTo(e.target.value)} required>
        <option value="null">Transfer To</option>
        {clients.map(client=>(<option key= {client.id} value={client.id}>{client.lastName}, {client.firstName}</option>))}
      </select>
      <input type="number" placeholder="Amount to Transfer" onChange = {e=>setAmount(e.target.value)} required></input>
      <button type="submit">Transfer</button>
    </form>
  </div> );
}
 
export default Transfer;