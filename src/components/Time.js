import { Box, Button,Grid, Typography } from "@mui/material";
import { useState } from "react";

export const Time = () => {
    const [getTime, setGetTime] = useState('')
    const MyButton =['11:30 AM',"12:00 AM", '16:30 AM', '17:40 PM','20:00 PM','22:00 PM']
    const getTimeFunction=(e)=>{
        const {id} = e.target
        setGetTime(id)
    }
    console.log(getTime);
    return (
        <Box
            width="400px"
            gap='10px'
        >
            <Typography>Цагаа Сонгоно уу*</Typography>
            <Grid
                container
                gap="20px"
            >
                    {MyButton.map((el, i) => <Grid item><Button id={el} onClick={(e)=> getTimeFunction(e)} key={i}>{el}</Button></Grid>)}
            </Grid>
        </Box>
    )
}
