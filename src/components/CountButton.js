import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

export const CountButton =() => {
    let [count,setCount] = useState(0);
    let [count1,setCount1] = useState(0);
    return (
        <Box 
            display="flex"
            justifyContent="space-between"
            width="400px"
        >
          <Box>
            <p>Хүүхэд*</p>
            <Box display="flex">
                <Button onClick={() => setCount(count-1)}>-</Button>
                <Typography>{count}</Typography>
                <Button onClick={() => setCount(count+1)} >+</Button>
             </Box>
          </Box>
          <Box>
            <p>Том хүн*</p>
            <Box display="flex" >
                <Button onClick={() => setCount1(count1-1)}>-</Button>
                <Typography>{count1}</Typography>
                <Button onClick={() => setCount1(count1+1)}>+</Button>
             </Box>
          </Box>
     </Box>
    )
}