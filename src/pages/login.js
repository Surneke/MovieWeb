import { Box, Grid,Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Navbar } from "../components/Header";
import {Theme} from '../theme/muiTheme'
import { Link } from "react-router-dom";
import '../AppLogin.css'

export const Login = () => {
    const [userDetails, setUserDetails] = useState({
        name:'',
        email:'',
        phoneNumber: ''
      })
      const handleUseInfo = (e)=>{
        const {name, value} = e.target
        setUserDetails({...userDetails, [name]:value})
      }

      const styles = {
        form: {
          input: {
            color: '#fff'
          }
        }
      }
   return (
    <Grid
        container
        className="loginPage"
        alignItems="center"
        justifyContent='center'
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
            >
                <Typography 
                    variant="h5"
                > 
                    Бүртгүүлэх 
                </Typography>
                <TextField 
                   
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
                    sx={styles.form}
                />
                <TextField 
                    id="outlined-basic" 
                    value={userDetails.phoneNumber} 
                    onChange={(e)=> handleUseInfo(e)} 
                    name="phoneNumber" 
                    variant="outlined" 
                    color="secondary"
                    label='Утас'
                    sx={styles.form}
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
					     to="/movie"
                         >
                            Буцах
                        </Link></Button>
                    <Button 
                        sx={styles.form} 
                        onClick= {handleUseInfo} 
                    > 
                        Хадгалах 
                    </Button>
                </Box>
                </Box>
    </Grid>
   
   )
}