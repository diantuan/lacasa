import { useContext, useState} from "react";
import { clientContext } from "../ClientHandling";
import { Link, Outlet, Route, Routes, useNavigate, useParams } from "react-router-dom";
import Deposit from "../dashboard/Deposit";
import Withdraw from "../dashboard/Withdraw";
import Transfer from "../dashboard/Transfer";

const ClientCard = () => {
  const {id} = useParams();
  const {clients, deleteClient} = useContext(clientContext);
  const navigate = useNavigate()
 
  let foundClient = clients.find(client=>client.id===id);

  const handleDelete = () =>{
    deleteClient(foundClient.id);
    navigate("/clients")
  }

  return ( 
    <div>
      <h2>Client Info</h2> 
      
      <Link to={`/clients/${foundClient.id}/edit/`}><i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
      <i className="fa-solid fa-trash" onClick={handleDelete}></i>
      <div>{foundClient && foundClient.firstName} {foundClient.lastName}</div>
      <div>{foundClient.address}</div>
      <div>{foundClient.cardNumber}</div>
      <div>${foundClient.funds} -</div>
      <div className="actions">
        <Link to={`/clients/${foundClient.id}/deposit`}>Deposit</Link>
        <Link to={`/clients/${foundClient.id}/withdraw`}>Withdraw</Link>
        <Link to={`/clients/${foundClient.id}/transfer`}>Transfer</Link>
        
      </div>
     
      
      <Outlet />
    </div>);
}
 
export default ClientCard;