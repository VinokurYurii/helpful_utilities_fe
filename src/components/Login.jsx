import HeaderMenu from "./HeaderMenu.jsx";
import Layout from "./Layout.jsx";
import {Button, Grid, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {useState} from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    if (!email || !password) return;

    axios.post("http://localhost:3000/api/auth/login", {user: {email, password}})
      .then(function (response) {
        console.log(response);
        localStorage.setItem('jti', response.headers['authorization']);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <HeaderMenu />
      <Layout>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
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
