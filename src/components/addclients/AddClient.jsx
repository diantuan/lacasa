import { useContext, useState } from "react";
import './addclient.css'
import { clientContext } from "../ClientHandling";
import { useNavigate } from "react-router-dom";
import face from '../../assets/Money-Heist-Face-Mask-Background-PNG-Image.png'

const AddClient = () => {

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [address, setAddress] = useState(null)
  const [cardNumber, setCardNumber] = useState(null);
  const [funds, setFunds] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const {addClient} = useContext(clientContext);
  

  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const id = Date.now().toString();

    const clientObj = {
      id, firstName, lastName, address, cardNumber, funds, username, password
    }

    if(clientObj){
      addClient(clientObj)
    }

    navigate("/clients");

  }
  return ( <div className="addclient">
    <h2>Add a new client</h2>

    <div className="card">
      <div className="cardheader">
        <h3>Client Info</h3> 

      </div>
      <div><i className="fa-solid fa-sim-card sim"></i></div>
      <div className="face"><img src={face} alt="face"></img></div>
      <div>{firstName} {lastName}</div>
      <div>{address}</div>
      <div>{cardNumber}</div>
      <div>${funds} -</div>

      
    </div>



    <form onSubmit={handleSubmit} className="addClientForm">
      <input type="text" onChange={e=>setFirstName(e.target.value)} placeholder="First Name" required></input>
      <input type="text" onChange={e=>setLastName(e.target.value)} placeholder="Last Name" required></input>
      <input type="text" onChange={e=>setAddress(e.target.value)} placeholder="Address" required></input>
      <input type="number" onChange={e=>setCardNumber(e.target.value)} placeholder="Card Number" required></input>
      <input type="number" onChange={e=>setFunds(e.target.value)} placeholder="Amount to Deposit" required></input>
      <input type="text" onChange={e=>setUsername(e.target.value)} placeholder="client username" required></input>
      <input type="password" onChange={e=>setPassword(e.target.value)} placeholder="client password" required></input>
      <button type="submit">Add</button>
    </form>
  </div> );
}
 
export default AddClient;