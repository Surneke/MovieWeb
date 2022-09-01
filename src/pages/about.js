import { Container, Box, Typography, Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "../App.css";
import { Footer } from "../Components/Footer";

export const About = () => {
  const location = useLocation();
  const state = location.state;
  console.log();
  return (
        <Container>
           <Box
                mt='200px'
                display='flex'
                gap='30px'
           >
           <Box
              display='flex'
              flexDirection='column' 
           >
                <img height="600px" width='400x' alt="logo" src={state.img}/>
           </Box>
            <Box
              display="flex"
              flexDirection='column'
              justifyContent='center'
            >
                <Box>
                    <Typography variant="h3">{state.name}</Typography>
                    <h3>Дэлгэцнээ гарах : {state.date}</h3>
                    <Typography variant="h5">{state.continueTime}</Typography>
                </Box>
                <Box>
                    <p>{state.description}</p>
                    <Box display='flex' gap='20px'>
                      <Button variant="contained">
                        <Link
                          style={{ textDecoration: "none", color: "#f0f0f0" }}
                          to="/movie">
                            Буцах
                        </Link>
                      </Button>
                      <Button variant="contained">
                        <Link
                          style={{ textDecoration: "none", color: "#f0f0f0" }}
                          to="/order"
                        >
                          Захиалга
                        </Link>
                      </Button>
                    </Box>
                </Box>
              </Box>
           </Box>
      </Container>
  );
};
