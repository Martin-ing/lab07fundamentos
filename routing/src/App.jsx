import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
import AppRoutes from "./AppRoutes";

function App() {
  const [items, setItems] = useState(0);
  const [abierto, setabierto] = useState(false);
  const menuHamburguesa = useMediaQuery("(max-width:500px)");

  const abrir = (state) => () => {
    setabierto(state);
  };

  return (
    <Router>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "purple",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ color: "white", textDecoration: "none", flexGrow: 1 }}
          >
            Product Dashboard
          </Typography>

          {menuHamburguesa ? (
            <>
              <IconButton color="inherit" onClick={abrir(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={abierto} onClose={abrir(false)}>
                <List>
                  <ListItem
                    button
                    component={Link}
                    to="/"
                    onClick={abrir(false)}
                  >
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to="/cart"
                    onClick={abrir(false)}
                  >
                    <ListItemText primary={`View Cart (${items})`} />
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button component={Link} to="/" sx={{ color: "white" }}>
                Home
              </Button>
              <Button component={Link} to="/cart" sx={{ color: "white" }}>
                View Cart ({items})
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Container sx={{ marginTop: "20px" }}>
        <AppRoutes items={items} setItems={setItems} />
      </Container>
    </Router>
  );
}

export default App;
