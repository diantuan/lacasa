import { useContext, useState} from "react";
import { clientContext } from "../ClientHandling";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import './card.css'
import face from '../../assets/Money-Heist-Face-Mask-Background-PNG-Image.png'


const ClientCard = () => {
  const {id} = useParams();
  const {clients, deleteClient} = useContext(clientContext);
  const navigate = useNavigate()
  const [outletOn, setOutletOn] = useState(false)
 
 
  let foundClient = clients.find(client=>client.id===id);

  const handleDelete = () =>{
    deleteClient(foundClient.id);
    navigate("/clients")
  }

  const handleCloseAction = () =>{

    setOutletOn(false)
  }

  return ( 
    <div className="card">
      <div className="cardheader">
        <h3>Client Info</h3> 
        
        <div>
          <Link to={`/clients/${foundClient.id}/edit/`} onClick={()=>setOutletOn(true)}><i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
          <i className="fa-solid fa-trash" onClick={handleDelete}></i>
        </div>

      </div>
      <div><i className="fa-solid fa-sim-card sim"></i></div>
      <div>{foundClient && foundClient.firstName} {foundClient.lastName}</div>
      <div>{foundClient.address}</div>
      <div>{foundClient.cardNumber}</div>
      <div>${foundClient.funds} -</div>
      
      <div className="face"><img src={face} alt="face"></img></div>
      
      <div className="actions">
        <Link to={`/clients/${foundClient.id}/deposit`} className="action" onClick={()=>setOutletOn(true)}>Deposit</Link>
        <Link to={`/clients/${foundClient.id}/withdraw`} className="action" onClick={()=>setOutletOn(true)}>Withdraw</Link>
        <Link to={`/clients/${foundClient.id}/transfer`} className="action" onClick={()=>setOutletOn(true)}>Transfer</Link>
        
      </div>
     
      {outletOn && <div className="actionresult">
      <i className="fa-solid fa-delete-left closeButo" onClick={handleCloseAction}></i>
      <Outlet />
      </div>}
      
    </div>);
}
 
export default ClientCard;