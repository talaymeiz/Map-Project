import "./login.css"
import Grid from "@mui/material/Grid";
import RoomSharpIcon from '@mui/icons-material/RoomSharp';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import { useRef, useState } from "react";
import axios from "axios";


export default function Login({ setShowLogin }) {

  const [error, setError] = useState(false);
  const nameRaf = useRef()
  const passwordRaf = useRef()

  const habdleSubmit= async (e) => {
    e.preventDefault();
    const newUser = {
      username : nameRaf.current.value,
      password : passwordRaf.current.value,
    };
    try{
      await axios.post("/users/register", newUser);
      setError(false);
    }catch(err){
      setError(true);
    }
  }
  const falseLogin = ()=> {
    setShowLogin(false)
  }

  return (
    <div className="loginContainer">
        <div className="logoL">
          <Grid item xs={1}>
            <RoomSharpIcon/>
          </Grid>
          LamaPin
        </div>
        <form onSubmit={habdleSubmit}>
          <input type="text" placeholder="username" ref={nameRaf}/>
          <input type="password" placeholder="password" ref={passwordRaf}/>
          <button className="loginBtn">Login</button>
          {error && <span className="failure">Something went wrong</span>}
        </form>
        <Grid item xs={1}>
            <ClearSharpIcon className="loginCancel" onClick={falseLogin}/>
          </Grid>
    </div>
  )
}
