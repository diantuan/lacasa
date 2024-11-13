import { useContext, useState } from "react";
import { authContext } from "../Auth";
import './profile.css';


const Profile = () => {

  const {currentUser} = useContext(authContext);



  return ( <div className="profilePage">
    <img className="profilePicture" src={require(`./${currentUser.imgLoc}`) }alt={currentUser.employeeName}></img>

    <div className="profileName">{currentUser.employeeName}</div>
    <div className="profileInfo">
      <div>{currentUser.legalName}</div>
      <div>{currentUser.age}</div>
      <div>{currentUser.address}</div>
    </div>
    <div className="profileDescription">{currentUser.description}</div>
    
    
    

  </div> );
}
 
export default Profile;