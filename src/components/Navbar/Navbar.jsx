import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Auth";

const Navbar = () => {
  
  const {logout} = useContext(authContext);
  const handleLogout = () =>{
    logout();
  }

  return ( <div>
    <Link to="/">Dashboard</Link>
    <Link to="/clients">Clients</Link>
    <Link to="/addclient">Add Client</Link>
    <Link to="/investments">Investments</Link>
    <Link to="/" onClick={handleLogout}>Logout</Link>
  </div> );
}
 
export default Navbar;