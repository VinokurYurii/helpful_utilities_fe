import {AppBar, Button, Container, Toolbar} from "@mui/material";
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";
import api from "../Api.js";

export default function HeaderMenu({isLoggedIn, onSetIsLoggedIn}) {
  const navItems = ['Homepage', "Careers"];
  const accountItems = ["SignIn", "Login"];
  const navigate = useNavigate();

  function handleNavigation(e, pageName) {
    e.preventDefault();
    const page = pageName.toLowerCase()

    const url = page === 'homepage' ? '/' : `/${page}`;
    navigate(url);
  }

  async function handleLogout() {
    await api.logout({'Authorization': localStorage.getItem('jwt-token')});
    localStorage.removeItem('jwt-token');
    onSetIsLoggedIn(false);
    navigate("/login");
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters={true}>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {isLoggedIn && navItems.map((item) => (
              <Button
                key={item}
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={(e) => handleNavigation(e, item)}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {!isLoggedIn && accountItems.map((item) => (
              <Button
                key={item}
                sx={{ color: '#fff' }}
                onClick={(e) => handleNavigation(e, item)}
              >
                {item}
              </Button>
            ))}
            {isLoggedIn && <Button sx={{ color: '#fff' }}
                                   onClick={() => handleLogout()}>
              Logout
            </Button>
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
