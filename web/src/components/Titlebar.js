import React, { useState } from "react";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { Menu, MenuItem } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import Logo from "../assets/wrenchit.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuIcon from "@mui/icons-material/Menu";
import LinkIcon from "@mui/icons-material/Link";
import "../styles/Titlebar.css";

function Titlebar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setIsClicked(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setIsClicked(false);
  };
  const handleChip = () => {
    console.log("Clicked");
  };

  return (
    <div>
      <div className="nav">
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <ArrowBackIosIcon
            style={{
              color: "#868e96",
              marginRight: "10px",
              fontSize: 20,
            }}
          />
        </Link>
        <Link style={{ display: "flex", alignItems: "center" }}>
          <img src={Logo} alt="Logo" className="d-navbar-logo" />
        </Link>
        <span className="d-navbar-company-name">Wrench it</span>
        <Link style={{ display: "flex", alignItems: "center" }}>
          <ArrowForwardIosIcon
            style={{
              color: "#868e96",
              marginRight: "10px",
              marginLeft: "30px",
              fontSize: 12,
            }}
          />
        </Link>
        <span style={{ color: "#22A1CB", fontSize: "13px" }}>Dashboard</span>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            marginLeft: "auto",
            marginRight: "10px",
          }}
        >
          <Chip label="Chip Filled" />
          <Chip label="Chip Filled" />
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 30, height: 30 }}
          />
          <Avatar
            alt="Travis Howard"
            src="/static/images/avatar/2.jpg"
            sx={{ width: 30, height: 30 }}
          />
          <Avatar
            alt="Cindy Baker"
            src="/static/images/avatar/3.jpg"
            sx={{ width: 30, height: 30 }}
          />
          <IconButton
            aria-label="menu"
            onClick={handleMenuOpen}
            style={{
              marginLeft: "20px",
              marginRight: "10px",
              backgroundColor: isClicked ? "#09beb26a" : "transparent",
            }}
            sx={{ width: 30, height: 30 }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
        </Stack>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Item 1</MenuItem>
          <MenuItem onClick={handleMenuClose}>Item 2</MenuItem>
          <MenuItem onClick={handleMenuClose}>Item 3</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Titlebar;
