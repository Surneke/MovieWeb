import { Grid, Container, Box, Typography } from "@mui/material";
import { Cart } from "../components/Cart";
import { useCartContext } from "../context/Cartcontext";

export const Home = () => {
  let { data } = useCartContext();

  return (
    <Container>
      <Typography variant="h4">Кино жагсаалт</Typography>
      <Grid container>
        {data.map((el) => {
          return <Cart el={el} />;
        })}
      </Grid>
    </Container>
  );
};
