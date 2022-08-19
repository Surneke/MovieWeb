import { Box, Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
export const Cart = (props) => {
    const { img, name, time } = props.el;
    return (
        <Grid
            item
            xs={4}
            mt={2}
        >
            <Box
            >
                <img
                    height='300px'
                    alt="zurag" src={img} />
            </Box>
            <Typography variant="h4" component="h2">
                {name}
            </Typography>
            <Typography variant="h6" >{time}</Typography>
            <Button
                variant="contained"
            >  
             <Link  style={{textDecoration: 'none', color: '#f0f0f0'}} to='/about' state={props.el}> Дэлгэрэнгүй </Link>
              </Button>
        </Grid>
    )
}