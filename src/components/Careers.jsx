import {Grid} from "@mui/material";
import HeaderMenu from "./HeaderMenu.jsx";
import Layout from "./Layout.jsx";

export default function Careers() {
  return (
    <>
      <HeaderMenu/>
      <Layout>

        <Grid item xs={4}>
          Careers list
        </Grid>
        <Grid item xs={8}>
          Career info
        </Grid>
      </Layout>
    </>
  );
}