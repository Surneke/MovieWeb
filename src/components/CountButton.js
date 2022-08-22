import { Box, Button, Typography } from "@mui/material";

export const CountButton =() => {
    return (
        <Box 
            display="flex"
            justifyContent="space-between"
            width="400px"
        >
          <Box>
            <p>Хүүхэд*</p>
            <Box display="flex">
                <Button>-</Button>
                <Typography>0</Typography>
                <Button>+</Button>
             </Box>
          </Box>
          <Box>
            <p>Том хүн*</p>
            <Box display="flex" >
                <Button>-</Button>
                <Typography>0</Typography>
                <Button>+</Button>
             </Box>
          </Box>
     </Box>
    )
}