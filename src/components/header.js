import { Grid, Container, Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
      <Grid
        container
        className="header"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item>
          <Button id="myBtn" >
            <Link style={{ textDecoration: "none" , color: 'white' }} to="/movie">
            <i class="fa-solid fa-clapperboard"></i>
            </Link>
          </Button>
        </Grid>
        
        <Grid item>
          <Typography variant="h3"> 
                <Link style={{ textDecoration: "none" , color: 'white' }} to="/">
                  LCNATICII
                </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Button id="myBtn" ><i class="fa-solid fa-magnifying-glass"></i></Button>
          <Button id="myBtn" > 
                <Link style={{ textDecoration: "none" , color: 'white' }} to="/login">
                      <i class="fa-solid fa-arrow-right-from-bracket"></i>
                </Link>
          </Button>
        </Grid>
      </Grid>
  );
};

