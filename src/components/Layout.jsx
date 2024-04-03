import {Grid} from "@mui/material";

export default function Layout({children}) {
  return (
    <Grid container spacing={2}>
      {children}
    </Grid>
  );
}