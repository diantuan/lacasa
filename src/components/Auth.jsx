import { createContext, useState } from "react";
import users from '../data/users.json';
import { useNavigate } from "react-router-dom";

let authContext = createContext();


const AuthProvider = ({children}) =>{

  let loginStatus = JSON.parse(localStorage.getItem("loginstatus"));

  const [isLoggedIn, setIsLoggedIn] = useState(loginStatus);
  const navigate = useNavigate();

 


  const login = (username, password) =>{
    
    let userFound = users.find(user=>user.username===username);

    if(userFound && userFound.username===username && userFound.password===password){
      let loginStatus = true;
      setIsLoggedIn(loginStatus);
      localStorage.setItem("loginstatus", JSON.stringify(loginStatus));
      navigate("/")
    }
  }

  const logout = ()=>{
    localStorage.clear("loginstatus");
    setIsLoggedIn(false);
    navigate("/login")
    
  }

  return <div>
    <authContext.Provider value={{isLoggedIn, login, logout}}>
     {children}
    </authContext.Provider>
  </div>

}


export {authContext, AuthProvider}