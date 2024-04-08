import HeaderMenu from "./HeaderMenu.jsx";
import Layout from "./Layout.jsx";
import {Button, Grid, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {useState} from "react";
import api from "../Api.js";

export default function Login({isLoggedIn, onSetIsLoggedIn}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    if (!email || !password) return;

    const response = await api.login(email, password);

    localStorage.setItem('jwt-token', response.headers['authorization']);
    onSetIsLoggedIn(true);
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
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </Box>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            onClick={handleLogin}
          >
            Login
          </Button>
        </Grid>
      </Layout>
    </>
  );
}
