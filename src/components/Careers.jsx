import {Grid} from "@mui/material";
import HeaderMenu from "./HeaderMenu.jsx";
import Layout from "./Layout.jsx";
import {useEffect} from "react";
import api from "../Api.js";

export default function Careers({isLoggedIn, onSetIsLoggedIn}) {
  return (
    <>
      <>
        <HeaderMenu isLoggedIn={isLoggedIn} onSetIsLoggedIn={onSetIsLoggedIn}/>
        <Layout>

          <Grid item xs={4}>
            Careers list
          </Grid>
          <Grid item xs={8}>
            Career info
          </Grid>
        </Layout>
      </>
    </>
  );
}