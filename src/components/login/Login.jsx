import { useContext, useEffect, useRef, useState } from "react";
import bgvid from '../../assets/LaCasaVideo.mp4';
import { authContext } from "../Auth";
import './login.css';

const Login = () => {

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const videoref = useRef(null);
  const {login} = useContext(authContext);


  useEffect(()=>{
    videoref.current.playbackRate = .7;
  }, [])

  const handleSubmit = (e)=>{
    e.preventDefault();
    login(username, password);
    
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

    </form>
  </div> );
}
 
export default Login;