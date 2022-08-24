import { Container, Box, Typography, Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "../App.css";

export const About = () => {
  const location = useLocation();
  const state = location.state;
  console.log();
  return (
      <Box 
        gap="30px"
        height='120vh'
        width='100%'
        className="cartBox"
      >
        <img height="100%" width='100%' alt="logo" src={state.img} />
        <Container>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          className="cartBoxTitle"
		  gap='150px'
        >
         <Box>
            <Typography variant="h3">{state.name}</Typography>
            <p>Дэлгэцнээ гарах: </p>
            <p>{state.date}</p>
            <Typography variant="h5">{state.continueTime}</Typography>
         </Box>
         <Box
			height='200px'
			width='800px'
         >
            <p>{state.description}</p>
            <Box
				gap="20px"
			>
				<Button variant="oulined">
				<Link
					style={{ textDecoration: "none", color: "#f0f0f0" }}
					to="/movie"
				>
					Буцах
				</Link>
				</Button>
				<Button variant="oulined">
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
        </Container>
      </Box>
  );
};
