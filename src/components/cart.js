import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
export const Cart = (props) => {
    const { img, name, time } = props.el;
    return (
        <Box
            className='cartPage'
        >
            <Box   
            >
            <Box
                component="img"
                gap="10px"
                sx={{
                  height: '300px',
                }}
                src={img}
            >
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
            </Box>
        </Box>
    )
}