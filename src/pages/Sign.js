import { Box, Grid, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../AppLogin.css'

export const Sign = () => {
    const [userDetails, setUserDetails] = useState({
        email: '',
        phoneNumber: '',
        password: '',
        password1: ''
    })
    const handleUseInfo = (e) => {
        const { name, value } = e.target
        setUserDetails({ ...userDetails, [name]: value })
    }
    const handlClicker = (e) => {
        e.preventDefault()
        handleUseInfo(e)
        if(userDetails.password === userDetails.password1) {
            alert('hi')
        }
    }

    return (
        <Grid
            container
            className="loginPage"
            alignItems="center"
            justifyContent='center'
            flexDirection='column'
        >
            <Box
                display="flex"
                flexDirection="column"
                gap="20px"
                alignItems="center"
                justifyContent="center"
                className="loginPageInput"
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    gap="20px"
                    sx={{
                        width: "400px",
                    }}
                    mt='50px'
                >
                    <Typography
                        variant="h5"
                    >
                        Бүртгүүлэх
                    </Typography>
                    <TextField
                        value={userDetails.email}
                        onChange={(e) => handleUseInfo(e)}
                        name="email"
                        variant="standard"
                        label='Имэйл'
                        color="success"
                        focused
                    />
                    <TextField
                        id="outlined-basic"
                        value={userDetails.password}
                        onChange={(e) => handleUseInfo(e)}
                        name="password"
                        variant="outlined"
                        label='Нууц үг'
                        color="success"
                        focused
                    />
                    <TextField
                        id="outlined-basic"
                        value={userDetails.phoneNumber}
                        onChange={(e) => handleUseInfo(e)}
                        name="password2"
                        variant="standard"
                        label='Нууц үг давтах'
                        color="success"
                        focused
                    />
                </Box>
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
                            to="/login"
                        >
                            Нэвтрэх
                        </Link></Button>
                    <Button
                        onClick={handlClicker}
                    >
                        Хадгалах
                    </Button>
                </Box>
            </Box>
            <Box  mt='50px' >
                <Button>
                    <Link
                        style={{ textDecoration: "none", color: "#f0f0f0" }}
                        to="/movie"
                    >
                        <i class="fa-solid fa-left-long"></i>
                    </Link>
                </Button>
            </Box>

        </Grid>

    )
}