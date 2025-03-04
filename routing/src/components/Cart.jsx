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

function Cart({ total, Prods, Cants, removeProds, subCants, addCants }) {
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h4">Shopping Cart</Typography>
      <List>
        {Prods.map((feature, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={feature}
              secondary={`Precio: ${
                productos.find((p) => p.name === feature).features[0]
              } | Cantidad: ${Cants[index]}`}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "8px",
              }}
            >
              <Button
                variant="outlined"
                style={{ borderColor: "grey" }}
                className="text-danger"
                onClick={() => addCants(index)}
              >
                +
              </Button>
              <Button
                variant="outlined"
                style={{ borderColor: "grey" }}
                onClick={() => subCants(index)}
                disabled={Cants[index] === 1}
              >
                -
              </Button>
              <Button
                variant="outlined"
                style={{ color: "red", borderColor: "grey" }}
                onClick={() => removeProds(index)}
              >
                Remove
              </Button>
            </div>
          </ListItem>
        ))}
      </List>
      <Typography variant="h6" sx={{ marginY: 2 }}>
        Total: {total}
      </Typography>
      <Button
        variant="contained"
        onClick={() => navigate("/")}
        sx={{
          backgroundColor: "purple",
        }}
      >
        Go to home
      </Button>
    </Container>
  );
}

export default Cart;
