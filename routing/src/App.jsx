import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
} from "@mui/material";
import AppRoutes from "./AppRoutes";

function App() {
  const [items, setItems] = useState(0);
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ color: "white", textDecoration: "none", flexGrow: 1 }}
          >
            Product dashboard
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button component={Link} to="/" sx={{ color: "white" }}>
              Home
            </Button>
            <Button component={Link} to="/cart" sx={{ color: "white" }}>
              View Cart ({items})
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: "20px" }}>
        <AppRoutes items={items} setItems={setItems} />
      </Container>
    </Router>
  );
}

export default App;
