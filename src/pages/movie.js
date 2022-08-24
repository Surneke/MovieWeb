import { Grid, Container, Box, Typography, Divider } from "@mui/material";
import { Cart } from "../components/Cart";
import { Select} from "../components/SelectedMovie"
import { useCartContext } from "../context/Cartcontext";
import '../AppLogin.css'

export const Movie = () => {
  let { data } = useCartContext();

  return (
     <Container>
        <Select/>
        <Box 
            mt="40px"
        >
             <Typography 
                variant="h5"
                sx={{
                    marginLeft:"20px"
                }}
            >Манай дэлгэцнээ :
            </Typography>
            <Grid 
                container
                justifyContent="space-around"
            >
                {data.map((el) => {
                return <Cart el={el} />;
                })}
            </Grid>
        </Box>
     </Container>
  );
};
