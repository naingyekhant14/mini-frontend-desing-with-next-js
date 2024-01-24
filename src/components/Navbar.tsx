import { Box, Typography } from "@mui/material";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "black",
        color: "white",
        justifyContent: "space-between",
        px: 20,
        alignItems: "center",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 900 }}>
        Mi Vape
      </Typography>
      <Box style={{ display: "flex" }}>
        <SearchOutlinedIcon />
        <ShoppingCartOutlinedIcon sx={{ mx: 3 }} />
        <MenuOutlinedIcon />
      </Box>
    </Box>
  );
};

export default Navbar;
