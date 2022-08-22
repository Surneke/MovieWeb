import { Box, Button, TextField } from "@mui/material";
import { CountButton } from "../components/CountButton";
import { Time } from '../components/Time'
import { useState } from "react";
import { Seat } from "../components/Seat";
export const Order = () => {
  const [userDetails, setUserDetails] = useState({
    name:'',
    email:'',
    phoneNumber: ''
  })
  const handleUseInfo = (e)=>{
    const {name, value} = e.target
    setUserDetails({...userDetails, [name]:value})
  }
  console.log(userDetails);
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
          width: "400px",
        }}
      >
        <p>Захиалгын хэсэг</p>
        <TextField 
            id="outlined-basic" 
            value={userDetails.name} 
            onChange={(e)=> handleUseInfo(e)} 
            name="name" 
            variant="outlined"  
            label='Нэр'
        />
        <TextField 
            id="outlined-basic" 
            value={userDetails.email} 
            onChange={(e)=> handleUseInfo(e)} 
            name="email" 
            variant="outlined" 
            label='Имэйл'
        />
        <TextField 
            id="outlined-basic" 
            value={userDetails.phoneNumber} 
            onChange={(e)=> handleUseInfo(e)} 
            name="phoneNumber" 
            variant="outlined" 
            label='Утас'
        />
      </Box>
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
        <Button > Буцах </Button>
        <Button > Хадгалах </Button>
      </Box>
      </Box>
      
    </Box>
  );
};
