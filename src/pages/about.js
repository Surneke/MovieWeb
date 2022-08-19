import {Container,Box, Typography, Button} from "@mui/material"
import { useLocation } from "react-router-dom"
import '../App.css';

export const About = () => {
    const location = useLocation()
    const state = location.state
    console.log()
    return(
        
        <Container>
            <Box
                display='flex'
                gap='30px'
            >
                    <img 
                        height='800px' 
                        alt="logo" 
                        src={state.img}
                    />
                <Box
                    display='flex'
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                >
                    <Typography
                        variant="h3"
                    >
                        {state.name}
                    </Typography>
                    <p>Дэлгэцнээ гарах: </p>
                    <p>{state.date}</p>
                    <Typography
                        variant="h5"
                    >
                        {state.continueTime}
                        
                    </Typography>
                    <p>{state.description}</p>
                    <Button
                        variant="outlined"
                    >
                        Захиалга</Button>
                </Box>
            </Box>
        </Container>
    )
}