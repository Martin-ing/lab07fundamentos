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

function product() {
  let { productName } = useParams();
  const navigate = useNavigate();
  const product = productos.find((c) => c.name === productName);

  if (!product) {
    return <Typography variant="h5">product not found</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4">{product.name}</Typography>
      <List>
        {product.features.map((feature) => (
          <ListItem
            key={feature}
            button
            component={Link}
            to={`/product/${productName}/feature/${feature}`}
          >
            <ListItemText primary={feature} />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" onClick={() => navigate("/")}>
        Back to Home
      </Button>
    </Container>
  );
}

export default product;
