import { useContext, useEffect, useRef, useState } from "react";
import bgvid from '../../assets/LaCasaVideo.mp4';
import { authContext } from "../Auth";
import './login.css';
import face from '../../assets/Money-Heist-Face-Mask-Background-PNG-Image.png';

const Login = () => {

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const videoref = useRef(null);
  const {login, loginError} = useContext(authContext);

  const [loading, setLoading] = useState(false);


  useEffect(()=>{
    videoref.current.playbackRate = .7;
  }, [])

  const handleSubmit = (e)=>{
    e.preventDefault();
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
      login(username, password);
    },5000)

    
    
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
    {loading && <div><div className="loadingFace"><img src={face} alt="loading"></img> <div className="entering">Entering...</div></div>
    <div className="loadingBox">...</div>
    </div>}
  </div> );
}
 
export default Login;