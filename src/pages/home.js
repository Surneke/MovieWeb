
import { Grid, Button , Box, Typography } from "@mui/material";
import {Movie} from'./movie'
export const Home = () => {
    return (
        <Grid 
            className="homePage"
            justifyContent="space-around"
            alignItems="center"
            container
        >
            <Grid item>
                <Typography variant="h3">AVATAR</Typography>
                <p>Avatar premiered in London on December 10, 2009</p>
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
                    src="https://m.media-amazon.com/images/I/71rFOBqo98L._AC_SY879_.jpg"/>
                </Box>
            </Grid>
        </Grid>
    )
}