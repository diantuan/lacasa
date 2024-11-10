import { useContext, useState } from "react";
import { clientContext } from "../ClientHandling";

const Deposit = () => {

  const {clients, deposit} = useContext(clientContext);

  const [from, setFrom] = useState(null);
  const [amount, setAmount] = useState(null);

  const handleSubmit = ()=>{
    deposit(from, Number(amount))
  }

  return ( <div>
    <h2>Deposit</h2>
    <form onSubmit ={handleSubmit}>
      <select onChange = {e=>setFrom(e.target.value)} required>
        <option selected disabled>Deposit To</option>
        {clients.map(client=>(<option value={client.id}>{client.lastName}, {client.firstName}</option>))}
      </select>
    
      <input type="number" placeholder="Amount to Deposit" onChange = {e=>setAmount(e.target.value)} required></input>
      <button type="submit">Deposit</button>
    </form>
  </div> );
}
 
export default Deposit;