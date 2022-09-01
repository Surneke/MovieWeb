import { Grid, Container, Box, Typography, Divider } from "@mui/material";
import { Cart } from "../Components/Cart";
import { Select} from "../Components/SelectedMovie"
import { useCartContext } from "../Context/Cartcontext";
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
