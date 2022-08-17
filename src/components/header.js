import {Grid,Container } from "@mui/material";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export const Navbar = () => {
    return (
       <Container>
            <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            className="link"
        >
            <Grid
                item
            >
                <img alt="logo" height='100px' src="https://static.vecteezy.com/system/resources/thumbnails/005/188/413/small/cinema-logo-template-isolated-on-white-background-vector.jpg" /></Grid>
            <Grid 
                item
            >
                <Link 
                    style={{textDecoration: 'none'}} to="/"
                >
                    Эхлэл
                </Link></Grid>
            <Grid 
                item
            >
                <Link 
                    style={{textDecoration: 'none'}} to="/order"
                >
                    Захиалга</Link></Grid>
            <Grid 
                item
            >
                <Link 
                    style={{textDecoration: 'none'}} to="/login"
                >
                    Нэвтрэх</Link></Grid>
        </Grid>
       </Container>
    )
}