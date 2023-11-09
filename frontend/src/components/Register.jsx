import "./register.css"
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import RoomSharpIcon from '@material-ui/icons/RoomSharp';
import RoomSharpIcon from '@mui/icons-material/RoomSharp';

export default function Register() {
  return (
    <div className="registerContainer">
        <div className="logo">
          <Grid item xs={1}>
            <RoomSharpIcon/>
          </Grid>
          <Grid item xs={1}>
            <Typography>LamaPin</Typography>
          </Grid>
        </div>
        <form>
            <input type="text" placeholder="username"/>
            <input type="email" placeholder="email"/>
            <input type="password" placeholder="password"/>
            <button>Register</button>
        </form>
    </div>
  )
}
