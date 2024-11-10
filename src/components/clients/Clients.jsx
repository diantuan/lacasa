import { useContext,  } from 'react';
import './clients.css';
import { clientContext } from '../ClientHandling.jsx';
import { Link, Outlet } from 'react-router-dom';

const Clients = () => {

  let {clients} = useContext(clientContext);


  return ( <div>
   <div className='tableHead'>
    <div>Client Name</div>
    <div>Address</div>
    <div>Card Number</div>
    <div>Client Funds</div>
   </div>
   {clients && clients.map(client=>( <div key={client.id} className="clientList">
      <div><Link to ={`/clients/${client.id}`} ><i className="fa-solid fa-arrow-up-right-from-square"></i></Link>{client.lastName} , {client.firstName} </div>
      <div>{client.address}</div>
      <div>{client.cardNumber}</div>
      <div>${client.funds}</div>
      </div>
   ))}
   <Outlet />
  </div> );
}
 
export default Clients;