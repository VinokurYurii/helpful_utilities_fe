import HeaderMenu from "./HeaderMenu.jsx";
import Layout from "./Layout.jsx";
import {Button, Grid, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {useState} from "react";
import api from "../Api.js";
import {useNavigate} from "react-router-dom";

export default function SignIn({isLoggedIn, onSetIsLoggedIn}) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  async function handleSignIn() {
    const response = await api.signIn({email, firstName, lastName, password, passwordConfirmation})

    localStorage.setItem('jwt-token', response.headers['authorization']);
    onSetIsLoggedIn(true);

    navigate("/");
  }

  return (
    <>
      <HeaderMenu isLoggedIn={isLoggedIn} onSetIsLoggedIn={onSetIsLoggedIn}/>
      <Layout>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': {m: 1, width: '25ch'},
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="outlined-required"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                required
                id="outlined-required"
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                required
                id="outlined-required"
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextField
                required
                id="outlined-required"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                required
                id="outlined-required"
                label="Password Confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </div>
          </Box>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            onClick={handleSignIn}
          >
            Login
          </Button>
        </Grid>
      </Layout>
    </>
  );
}
