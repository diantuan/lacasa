import { useContext, useState } from "react";
import { clientContext } from "../ClientHandling";


const Transfer = () => {

  const {clients, transfer} = useContext(clientContext);

  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [amount, setAmount] = useState(null);

  const handleSubmit = ()=>{
    transfer(from, to, Number(amount))
  }

  return ( <div>
    <h2>Transfer</h2>
    <form onSubmit ={handleSubmit}>
      <select onChange = {e=>setFrom(e.target.value)} required>
        <option selected disabled>Transfer From</option>
        {clients.map(client=>(<option value={client.id}>{client.lastName}, {client.firstName}</option>))}
      </select>
      <select onChange = {e=>setTo(e.target.value)} required>
        <option selected disabled>Transfer To</option>
        {clients.map(client=>(<option value={client.id}>{client.lastName}, {client.firstName}</option>))}
      </select>
      <input type="number" placeholder="Amount to Transfer" onChange = {e=>setAmount(e.target.value)} required></input>
      <button type="submit">Transfer</button>
    </form>
  </div> );
}
 
export default Transfer;