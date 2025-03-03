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

function Cart({ Prods, removeProds }) {
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h4">hola</Typography>
      <List>
        {Prods.map((feature, index) => (
          <ListItem key={index}>
            <div>{feature}</div>
            <Button
              variant="light"
              className="text-danger"
              onClick={() => removeProds(index)}
            >
              +
            </Button>
            <Button
              variant="light"
              className="text-danger"
              onClick={() => removeProds(index)}
            >
              -
            </Button>
            <Button
              variant="light"
              className="text-danger"
              onClick={() => removeProds(index)}
            >
              X
            </Button>
          </ListItem>
        ))}
      </List>
      <Button variant="contained" onClick={() => navigate("/")}>
        Back to Home
      </Button>
    </Container>
  );
}

export default Cart;
