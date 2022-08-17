import { Box, Typography, Grid } from "@mui/material";
export const Cart = (props) => {
    const { img, name, time } = props.el;
    console.log(img)
    return (
        <Grid
            item
            xs={4}
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
        </Grid>
    )
}