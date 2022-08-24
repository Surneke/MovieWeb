import { Box, Button, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

export const Seat = () => {
  const [checked, setChecked] = useState([]);
  const [seat, setSeat] = useState([])
  const SuudalA = new Array(8).fill(0);
  const SuudalB = new Array(10).fill(0);
  const SuudalC = new Array(12).fill(0);
  const SuudalD = new Array(14).fill(0);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const getSeatNum = (e, i)=>{
    const {id} = e.target
    setSeat([...seat, {row: id, col: i+1}])
  }
  console.log(seat);
  return (
    <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center"
        className="seatPage"
    >
        <Box display="flex">
            <p>A</p>
            {SuudalA.map((el, i) => (
            <Checkbox id="A" {...label} onClick={(e)=>getSeatNum(e, i)} size="small" />
            ))}
        </Box>
        <Box display="flex">
            {" "}
            <p>B</p>{" "}
            {SuudalB.map((el,i) => (
            <Checkbox id="B" {...label} onClick={(e) =>getSeatNum(e,i)} size="small" />
            ))}
        </Box>
        <Box display="flex">
            {" "}
            <p>C</p>{" "}
            {SuudalC.map((el,i) => (
            <Checkbox id="C" {...label} onClick={(e) => getSeatNum(e,i)} size="small" />
            ))}
        </Box>
        <Box display="flex">
            {" "}
            <p>D</p>{" "}
            {SuudalD.map((el,i) => (
            <Checkbox id="D" {...label} onClick={(e) => getSeatNum(e,i)} size="small" />
            ))}
        </Box>
    </Box>
  );
};
