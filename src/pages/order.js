import { Box, Grid, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
export const Order = () => {
  const [checkBox, setcheckBox] = useState([]);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="20px"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        gap="20px"
        sx={{
          height: "600px",
          width: "400px",
        }}
      >
        <TextField id="outlined-basic" label="Нэр" variant="outlined" />
        <TextField id="outlined-basic" label="Имайл" variant="outlined" />
        <TextField id="outlined-basic" label="Утас" variant="outlined" />
      </Box>
      <Box>
        <Checkbox {...label} defaultChecked size="small" />
      </Box>
    </Box>
  );
};
