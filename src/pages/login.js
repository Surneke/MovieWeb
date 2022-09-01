import { Box, Grid, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../AppLogin.css'

export const Login = () => {
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        phoneNumber: ''
    })
    const handleUseInfo = (e) => {
        const { name, value } = e.target
        setUserDetails({ ...userDetails, [name]: value })
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
                    mt='20px'
                >
                    <Typography
                        variant="h5"
                    >
                        Нэвтрэх
                    </Typography>
                    <TextField
                         id="outlined-basic"
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
                         variant="standard"
                         label='Нууц үг'
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
                    <Button>
                        <Link
                            style={{ textDecoration: "none", color: "#f0f0f0" }}
                            to="/sign"
                        >
                            Бүртгүүлэх
                        </Link></Button>
                    <Button
                        onClick={handleUseInfo}
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