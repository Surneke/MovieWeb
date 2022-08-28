import { Box, Grid, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Navbar } from "../components/Header";
import { Theme } from '../theme/muiTheme'
import { Link } from "react-router-dom";
import '../AppLogin.css'

export const Sign = () => {
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        phoneNumber: ''
    })
    const handleUseInfo = (e) => {
        const { name, value } = e.target
        setUserDetails({ ...userDetails, [name]: value })
    }

    const styles = {
        form: {
            input: {
                color: '#9CA6B1'
            }
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

                        value={userDetails.name}
                        onChange={(e) => handleUseInfo(e)}
                        name="name"
                        variant="standard"
                        label='Нэр'
                        color="success"
                        focused
                    />

                    <TextField
                        id="outlined-basic"
                        value={userDetails.email}
                        onChange={(e) => handleUseInfo(e)}
                        name="email"
                        variant="outlined"
                        label='Имэйл'
                        sx={styles.form}
                        color="success"
                        focused
                    />
                    <TextField
                        id="outlined-basic"
                        value={userDetails.phoneNumber}
                        onChange={(e) => handleUseInfo(e)}
                        name="phoneNumber"
                        variant="standard"
                        label='Утас'
                        sx={styles.form}
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
                    <Button sx={styles.form} >
                        <Link
                            style={{ textDecoration: "none", color: "#f0f0f0" }}
                            to="/login"
                        >
                            Нэвтрэх
                        </Link></Button>
                    <Button
                        sx={styles.form}
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