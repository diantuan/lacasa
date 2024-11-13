import { useContext, useEffect, useRef, useState } from "react";
import bgvid from '../../assets/LaCasaVideo.mp4';
import { authContext } from "../Auth";
import './login.css';
import facemask from '../../assets/face.png';
import users from '../../data/users.json';

const Login = () => {

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const videoref = useRef(null);
  const [loginError, setLoginError] = useState(null);
  const {login} = useContext(authContext);

  const [loading, setLoading] = useState(false);


  useEffect(()=>{
    videoref.current.playbackRate = .7;
  }, [])



  const handleSubmit = (e)=>{
    e.preventDefault();
    let userFound = users.find(user=>user.username===username);

      if(userFound && userFound.username===username && userFound.password===password){
        
        setLoading(true);
        setTimeout(()=>{
          setLoading(false)
          login(username, password);
        },5000)
    
      }
      else{
        setLoginError("Wrong username or password")
      }
  }

  return ( <div>

    <video className="loginVideo" src={bgvid} autoPlay loop muted ref={videoref}>

    </video>

    <form onSubmit={handleSubmit} className="loginForm">
      <div>

        <input 
        className="loginInput"
        type="text"
        placeholder = "username" 
        onChange = { e=>setUsername(e.target.value)}>
        </input>

        <input
        className="loginInput"
        type="password"
        placeholder="password"
        onChange={e=>setPassword(e.target.value)}>
        </input>

      </div>

      <button type="submit" className="loginButton">Log-in</button>
      {loginError && <p className="loginError">{loginError}</p>}
    </form>

    {loading && 
    <div className="faceWrapper">
     
        <img className="loadingFace" src={facemask} alt="loading"></img> 
        <img className="loadingFaceGray" src={facemask} alt="loading"></img> 
        <div className="entering">Entering...</div>
      
     
    </div>}
  </div> );
}
 
export default Login;