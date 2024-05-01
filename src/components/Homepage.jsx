import {Grid} from "@mui/material";
import HeaderMenu from "./HeaderMenu.jsx";
import Layout from "./Layout.jsx";
import api from "../Api.js";
import {useQuery} from "@tanstack/react-query";

export default function Homepage() {
  const query = useQuery({queryFn: () => api.getUsers({'Authorization': localStorage.getItem('jwt-token')}),
    queryKey: ['getUsers']})
  console.log(query.data);

  return (
    <>
      <HeaderMenu/>
      <Layout>
        <Grid item xs={12}>
          Homepage
        </Grid>
      </Layout>
    </>
  );
}
