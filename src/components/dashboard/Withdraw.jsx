import { useContext, useState } from "react";
import { clientContext } from "../ClientHandling";

const Withdraw = () => {
  const {clients, withdraw} = useContext(clientContext);

  const [from, setFrom] = useState(null);
  const [amount, setAmount] = useState(null);

  const handleSubmit = ()=>{
    withdraw(from, Number(amount))
  }

  return ( <div>
    <h2>Withdraw</h2>
    <form onSubmit ={handleSubmit}>
      <select onChange = {e=>setFrom(e.target.value)} required>
        <option selected disabled>Withdraw From</option>
        {clients.map(client=>(<option value={client.id}>{client.lastName}, {client.firstName}</option>))}
      </select>
    
      <input type="number" placeholder="Amount to Withdraw" onChange = {e=>setAmount(e.target.value)} required></input>
      <button type="submit">Withdraw</button>
    </form>
    </div>)
}
 
export default Withdraw;