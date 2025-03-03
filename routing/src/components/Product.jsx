import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import { productos } from "../data/productData";

function product({ addProds }) {
  let { productName } = useParams();
  const navigate = useNavigate();
  const product = productos.find((c) => c.name === productName);

  if (!product) {
    return <Typography variant="h5">product not found</Typography>;
  }

  const handleprod = (Prod) => {
    addProds(Prod);
  };

  return (
    <Container>
      <Typography variant="h4">{product.name}</Typography>
      <List>
        {product.features.map((feature) => (
          <ListItem key={feature}>Hola{feature}</ListItem>
        ))}
      </List>
      <Button variant="contained" onClick={() => navigate("/")}>
        Back to Home
      </Button>
      <Button variant="contained" onClick={() => handleprod(product.name)}>
        a;adir al carrito
      </Button>
    </Container>
  );
}

export default product;
