import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { clientContext } from "../ClientHandling";

const EditClient = () => {

  const {id} = useParams();
  const {clients, editClient} = useContext(clientContext);
  const navigate = useNavigate();

  let foundclient = clients.find(client=>client.id===id);

  const [firstName, setFirstName] = useState(foundclient.firstName);
  const [lastName, setLastName] = useState(foundclient.lastName);
  const [address, setAddress] = useState(foundclient.address);
  const [cardNumber, setCardNumber] = useState(foundclient.cardNumber);
  
 

  const handleSubmit = (e) =>{
    e.preventDefault();
    editClient(id, firstName, lastName, address, cardNumber);
    navigate(`/clients/${id}`)
  }

  const handleClose = ()=>{
    navigate(`/clients/${id}`)
  }


  return ( <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={e=>setFirstName(e.target.value)} placeholder="First Name" value={firstName}></input>
      <input type="text" onChange={e=>setLastName(e.target.value)} placeholder="Last Name" value={lastName}></input>
      <input type="text" onChange={e=>setAddress(e.target.value)} placeholder="Address" value={address}></input>
      <input type="text" onChange={e=>setCardNumber(e.target.value)} placeholder="Card Number" value={cardNumber}></input>
      
      <button type="submit">Edit</button>
      <i onClick = {handleClose}
      className="fa-solid fa-delete-left"></i>
    </form>
  </div> );
}
 
export default EditClient;