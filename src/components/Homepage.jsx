import {Grid} from "@mui/material";
import HeaderMenu from "./HeaderMenu.jsx";
import Layout from "./Layout.jsx";

export default function Homepage() {
  return (
    <>
      <HeaderMenu />
      <Layout>
        <Grid item xs={12}>
          Homepage
        </Grid>
      </Layout>
    </>
  );
}