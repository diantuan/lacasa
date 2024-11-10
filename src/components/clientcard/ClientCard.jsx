import { useContext} from "react";
import { clientContext } from "../ClientHandling";
import { Link, useNavigate, useParams } from "react-router-dom";

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
      <Link to={`/clients/edit/${foundClient.id}`}><i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
      <i className="fa-solid fa-trash" onClick={handleDelete}></i>
      <div>{foundClient && foundClient.firstName} {foundClient.lastName}</div>
      <div>{foundClient.address}</div>
      <div>{foundClient.cardNumber}</div>
      <div>${foundClient.funds} -</div>
      <div className="actions">
        <button>Deposit</button>
        <button>Withdraw</button>
        <button>Transfer</button>
      </div>
    </div>);
}
 
export default ClientCard;