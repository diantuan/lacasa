import { useContext } from "react";
import { authContext } from "./Auth";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import './protected.css';
import lacasaimg from '../assets/la-casa-de-papel.png';

const Protected = () => {
  const {isLoggedIn} = useContext(authContext);

  if(isLoggedIn){
    return (<div className="protected">
      
      <Navbar />
      <div className="protectedOutletContainer">
        <Outlet/>
      </div>

      <div className="protectedupper">
        .
      </div>
      <img src={lacasaimg} className="lacasaimg" alt="bangko"></img>
    </div>
      )

  }
  else{
    return <Navigate to="/login"></Navigate>
  }
  
}
 
export default Protected;