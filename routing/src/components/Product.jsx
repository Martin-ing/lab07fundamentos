import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Alert,
} from "@mui/material";
import { productos } from "../data/productData";

function product({ addProds }) {
  let { productName } = useParams();
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState(false);
  const product = productos.find((c) => c.name === productName);

  if (!product) {
    return <Typography variant="h5">product not found</Typography>;
  }

  const handleprod = (Prod) => {
    addProds(Prod);
  };

  const handleCompra = () => {
    setMensaje(true);
    setTimeout(() => {
      setMensaje(false);
    }, 5000);
  };

  return (
    <Container>
      <Typography variant="h4">{product.name}</Typography>
      <List sx={{ fontFamily: "'Arial'" }}>
  {product.features.slice(0, 2).map((feature) => (
    <ListItem key={feature}>{feature}</ListItem>
  ))}
</List>
      <Button
        variant="contained"
        onClick={() => navigate("/")}
        sx={{
          backgroundColor: "purple",
        }}
      >
        Back to Home
      </Button>
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          handleprod(product.name);
          handleCompra();
        }}
      >
        Add to shopping cart
      </Button>
      {mensaje && (
        <Alert severity="success" sx={{ mt: 3 }}>
          Añadido al carrito de compras
        </Alert>
      )}
    </Container>
  );
}

export default product;
