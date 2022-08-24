import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import '../AppLogin.css';

export const Select= () => {
    return(
        <Container>
            <Box
                className="selectedMovie"
                display="flex"
                flexDirection="column"
                gap="40px"
            >
            <Typography 
                variant="h5"
            > Тун удахгүй :
            </Typography>
                <Box
                     display="flex"
                     gap="40px"
                >
                <Box 
                    className="box1"
                    sx={{
                    height: '400px',
                    }}
                >
                    <Typography variant="h3">Thor</Typography>
                    <Typography variant="body2"> Love and Thunde </Typography>
                </Box>
                <Box
                    className="box2"
                    sx={{
                        height: '400px',
                    }}
                >
                    <Typography variant="h3">Doctor Strange</Typography>
                    <Typography variant="body2">Multiverse of Madness</Typography>
                </Box>
                </Box>
            </Box>
            <Divider/>
        </Container>
    )
}