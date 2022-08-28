import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
export const Cart = (props) => {
    const { img, name, time } = props.el;
    return (
        <Box
            className='cartPage'
        >
            <Box 
                gap='10px'  
            >
            <Box
                component="img"
                sx={{
                  height: '300px',
                  width: '200px'
                }}
                src={img}
            >
            </Box>
            <Typography variant="h6" component="h2">
                {name}
            </Typography>
            <Typography variant="h6" >{time}</Typography>
            <Button
                variant="contained"
                
            >  
             <Link  style={{textDecoration: 'none', color: '#f0f0f0'}} to='/about' state={props.el}> Дэлгэрэнгүй <i class="fa-solid fa-arrow-right-long"></i> </Link>
              </Button>
            </Box>
        </Box>
    )
}