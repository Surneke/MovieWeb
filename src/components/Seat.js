import { Box, Button, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
// import { useState } from "react";

export const Seat = () => {

  const SuudalA = new Array(8).fill(0)
  const SuudalB = new Array(10).fill(0)
  const SuudalC = new Array(12).fill(0)
  const SuudalD = new Array(14).fill(0)

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

    return (
        <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h4">Дэлгэц</Typography>
       <Box display='flex'> <p>A</p> 
           {SuudalA.map((el,i) =>  
           <Checkbox {...label} 
                value={i+1}
                size="small" 
                color="secondary" 
                onChange= {() => console.log(i)}
                /> )}
        </Box>
       <Box display='flex'> <p>B</p> {SuudalB.map((el) =>  <Checkbox {...label} size="small"  color="secondary" /> )}</Box>
       <Box display='flex'> <p>C</p>  {SuudalC.map((el) =>  <Checkbox {...label} size="small"  color="secondary" /> )}</Box>
       <Box display='flex'> <p>D</p>  {SuudalD.map((el) =>  <Checkbox {...label} size="small"  color="secondary" /> )}</Box>
      </Box>
    )
}