import {AppBar, Button, Container, Toolbar} from "@mui/material";
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";

export default function HeaderMenu() {
  const navItems = ['Homepage', "Careers"];
  const accountItems = ["SignIn", "Login", "Logout"];
  const navigate = useNavigate();

  function handleNavigation(e, pageName) {
    e.preventDefault();
    const page = pageName.toLowerCase()

    if (page === "logout") {
      logout();
      return;
    }

    const url = page === 'homepage' ? '/' : `/${page}`;
    navigate(url);
  }

  function logout() {
    navigate("/login");
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters={true}>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
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
            {accountItems.map((item) => (
              <Button
                key={item}
                sx={{ color: '#fff' }}
                onClick={(e) => handleNavigation(e, item)}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
