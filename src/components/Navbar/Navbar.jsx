import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Auth";
import './navbar.css'

const Navbar = () => {

  const dashref = useRef(null);
  
  const {logout} = useContext(authContext);
  const handleLogout = () =>{
    logout();
  }

  const removeDefault = ()=>{
    dashref.current.classList.remove("defaultFocus")
  }

  return ( <div className="navbar">
    <Link to="/" className="navlink defaultFocus" ref={dashref} >Dashboard</Link>
    <Link to="/clients" className="navlink" onClick={removeDefault}>Clients</Link>
    <Link to="/addclient" className="navlink" onClick={removeDefault}>Add Client</Link>
    <Link to="/budgeting" className="navlink" onClick={removeDefault}>Budgeting</Link>
    <Link to="/" onClick={handleLogout} className="navlink">Logout</Link>
  </div> );
}
 
export default Navbar;