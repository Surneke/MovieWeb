import { Box, Button, TextField } from "@mui/material";
import { CountButton } from "../components/CountButton";
import { Time } from '../components/Time'
import { useState,useContext } from "react";
import { Seat } from "../components/Seat";
import { Link } from "react-router-dom";
import {CartContext } from "../context/Cartcontext";

export const Order = () => {
    const {data}= useContext(CartContext)
    console.log({data})
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="20px"
      alignItems="center"
      justifyContent="center"
      className='orderPage'
    >
        <Box>{data.map((el) => <img alt='logo' src={el.img}/>)}</Box>
        <Box>
          <CountButton />
          <Time />
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
