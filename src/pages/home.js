import { Grid, Button , Box, Typography } from "@mui/material";
import {Movie} from'./movie'
import ReactPlayer from 'react-player'

export const Home = () => {
    return (
        <Grid 
        className="homePage"
        justifyContent="space-around"
        alignItems="center"
        container
    >
        <Grid item>
            <Typography variant="h3">GROOT</Typography>
            <Box
                display='flex'
                gap="50px"
            >
                <Button id='myBtn' >About</Button>
                <Button id='myBtn' >Watch</Button>
            </Box>
        </Grid>
        <Grid item>
            <Button
                variant="outlined"
                contained
                id='mybtn'
            >
                   <i class="fa-solid fa-play"></i>
            </Button>
            <p>Watch Trailer</p>
        </Grid>
        <Grid item>
            <Box>
                <img height='250px' alt="logo" 
                src="https://th.bing.com/th/id/R.cadb955cdb6aa3b2450d4eb127ec6d38?rik=RENCEx0BXMVhKw&pid=ImgRaw&r=0"/>
            </Box>
        </Grid>
    </Grid>
    )
}