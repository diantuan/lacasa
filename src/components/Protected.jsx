import { useContext } from "react";
import { authContext } from "./Auth";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const Protected = () => {
  const {isLoggedIn} = useContext(authContext);

  if(isLoggedIn){
    return (<div>
      <Navbar />
      <Outlet />
      
  
    </div>
      )

  }
  else{
    return <Navigate to="/login"></Navigate>
  }
  
}
 
export default Protected;