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

function Cart({ Prods, Cants, removeProds, subCants, addCants }) {
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h4">hola</Typography>
      <List>
        {Prods.map((feature, index) => (
          <ListItem key={index}>
            <div>{feature}</div>
            <div>----{Cants[index]}</div>
            <Button
              variant="light"
              className="text-danger"
              onClick={() => addCants(index)}
            >
              +
            </Button>
            <Button
              variant="light"
              className="text-danger"
              onClick={() => subCants(index)}
              disabled={Cants[index] === 1}
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
