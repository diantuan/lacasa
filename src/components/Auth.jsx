import { createContext, useState } from "react";
import users from '../data/users.json';
import { useNavigate } from "react-router-dom";

let authContext = createContext();


const AuthProvider = ({children}) =>{

  let loginStatus = JSON.parse(localStorage.getItem("loginstatus"));

  const [isLoggedIn, setIsLoggedIn] = useState(loginStatus);
  const navigate = useNavigate();

  let userSaved = JSON.parse(localStorage.getItem("currentuser"))

  const [currentUser, setCurrentUser] = useState(userSaved);

  const [loginError, setLoginError] = useState(null);


  const login = (username, password) =>{
    
    let userFound = users.find(user=>user.username===username);

    if(userFound && userFound.username===username && userFound.password===password){
      let loginStatus = true;
      setIsLoggedIn(loginStatus);
      localStorage.setItem("loginstatus", JSON.stringify(loginStatus));
      setCurrentUser(userFound);
      localStorage.setItem("currentuser", JSON.stringify(userFound));
      navigate("/")
    }
    else{
      setLoginError("Wrong username or password")
    }
  }

  const logout = ()=>{
    localStorage.clear("loginstatus");
    localStorage.clear("currentuser");
    setIsLoggedIn(false);
    setCurrentUser(null);
    navigate("/login")
    
  }

  

  return <div>
    <authContext.Provider value={{isLoggedIn, login, logout, currentUser, loginError}}>
     {children}
    </authContext.Provider>
  </div>

}


export {authContext, AuthProvider}