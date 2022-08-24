import { Box, Button, TextField } from "@mui/material";
import { CountButton } from "../components/CountButton";
import { Time } from '../components/Time'
import { useState } from "react";
import { Seat } from "../components/Seat";
import { Link } from "react-router-dom";

export const Order = () => {
 
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
      className='orderPage'
    >
      <CountButton/>
      <Time/>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
         <p>Display</p>
       <Seat/>
      <Box
        display='flex'
        justifyContent='space-between'
        sx={{
          width: '400px'
        }}
      >
        <Button >
          <Link 
              style={{ textDecoration: "none", color: "#f0f0f0" }}
					     to="/movie" 
          > 
              Буцах 
          </Link></Button>
        <Button > Хадгалах </Button>
      </Box>
      </Box>
      
    </Box>
  );
};
