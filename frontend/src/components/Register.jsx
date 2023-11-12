import "./register.css"
import Grid from "@mui/material/Grid";
//import Typography from "@mui/material/Typography";
import RoomSharpIcon from '@mui/icons-material/RoomSharp';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import { useRef, useState } from "react";
import axios from "axios";


export default function Register({ setShowRegister }) {

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const nameRaf = useRef()
  const emailRaf = useRef()
  const passwordRaf = useRef()

  const habdleSubmit= async (e) => {
    e.preventDefault();
    const newUser = {
      username : nameRaf.current.value,
      email : emailRaf.current.value,
      password : passwordRaf.current.value,
    };
    try{
      await axios.post("/users/register", newUser);
      setError(false);
      setSuccess(true)
    }catch(err){
      console.log(err)
      console.log(newUser.username)
      setError(true);
    }
  }

  const falseRegister = ()=> {
    setShowRegister(false)
  }

  return (
    <div className="registerContainer">
        <div className="logo">
          <Grid item xs={1}>
            <RoomSharpIcon/>
          </Grid>
          LamaPin
        </div>
        <form onSubmit={habdleSubmit}>
          <input type="text" placeholder="username" ref={nameRaf}/>
          <input type="email" placeholder="email" ref={emailRaf}/>
          <input type="password" placeholder="password" ref={passwordRaf}/>
          <button className="registerBtn">Register</button>
          {success && <span className="success">Successfull. You can login now</span>}
          {error && <span className="failure">Something went wrong</span>}
        </form>
        <Grid item xs={1}>
            <ClearSharpIcon className="registerCancel" onClick={falseRegister}/>
          </Grid>
    </div>
  )
}
