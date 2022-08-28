import { Container, Box, Typography, Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import { CountButton } from "../components/CountButton";
import { Time } from '../components/Time'
import { Link } from "react-router-dom";
import "../App.css";
import { Footer } from "../components/Footer";

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
                          state={props.el}>
                        >
                          Захиалга
                        </Link>
                      </Button>
                    </Box>
              </Box>
           </Box>
      </Container>
  );
};
