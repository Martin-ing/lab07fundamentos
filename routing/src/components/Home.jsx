import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { productos } from "../data/productData";

function Home() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Product List
      </Typography>
      <List>
        {productos.map((product) => (
          <ListItem
            key={product.name}
            button
            component={Link}
            to={`/product/${product.name}`}
          >
            <ListItemText primary={product.name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Home;
