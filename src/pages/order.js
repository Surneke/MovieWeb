import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
export const Order = () => {

  const [seatNumber,setSeatNumber] = useState({})

  const SuudalA = new Array(10).fill('')
  const SuudalB = new Array(12).fill(0)
  const SuudalC = new Array(14).fill(0)
  const SuudalD = new Array(16).fill(0)

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="20px"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        gap="20px"
        sx={{
          height: "600px",
          width: "400px",
        }}
      >
        <TextField id="outlined-basic" label="Нэр" variant="outlined" />
        <TextField id="outlined-basic" label="Имайл" variant="outlined" />
        <TextField id="outlined-basic" label="Утас" variant="outlined" />
      </Box>
      <Box>
          <Button></Button>
          <Typography></Typography>
          <Button></Button>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
       <Box> 
           {SuudalA.map((el,i) =>  
           <Checkbox {...label} 
                value={i+1}
                size="small" 
                color="secondary" 
                onChange= {() => console.log(i)}
                /> )}
        </Box>
       <Box> {SuudalB.map((el) =>  <Checkbox {...label} size="small"  color="secondary" /> )}</Box>
       <Box> {SuudalC.map((el) =>  <Checkbox {...label} size="small"  color="secondary" /> )}</Box>
       <Box> {SuudalD.map((el) =>  <Checkbox {...label} size="small"  color="secondary" /> )}</Box>
      </Box>
    </Box>
  );
};
