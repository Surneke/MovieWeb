import { Box, Button,Grid, Typography } from "@mui/material";

export const Time = () => {
    const MyButton =['11:30 AM',"12:00 AM", '16:30 AM', '17:40 PM','20:00 PM','22:00 PM']
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
                    {MyButton.map((el) => <Grid item><Button>{el}</Button></Grid>)}
            </Grid>
        </Box>
    )
}
