import {Button,Box,Stack, Divider, Typography} from '@mui/material'

export const Footer = () => {
    return (
        <Stack
            gap='20px'
            justifyContent='center'
            alignItems='center'
        >
            <Box 
                mt='20px'
                display='flex'
                justifyContent='space-between'
            >
                <Button>
                    <i class="fa-solid fa-play"></i>
                    <p style={{ marginLeft: "10px" }}  >Play store</p>
                </Button>
                <Button>
                    <i class="fa-brands fa-apple"></i>
                    <p style={{ marginLeft: "10px" }}  >App store</p>
                </Button>
            </Box>
            <Box
                display='flex'
                gap='10px'
                
            >
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
            </Box>
            <Typography
                variant="body1"
                align="center"
                sx={{
                    marginBottom: 10,
                    fontSize: {
                        xs: 14,
                        md: 16
                    }
                }}
            >
                &copy; {new Date().getFullYear()} Бүх эрх хуулиар хамгаалагдсан
            </Typography>
        </Stack>
    )
}