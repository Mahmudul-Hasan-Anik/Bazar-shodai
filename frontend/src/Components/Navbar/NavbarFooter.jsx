import React, { useState } from "react";
import {
  Box,
  Divider,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

export default function NavbarFooter(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const [page, setPage] = useState(null);

  const open = Boolean(anchorEl);
  const openPage = Boolean(page);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickPage = (event) => {
    setPage(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setPage(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        FRESH
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <div
        style={{
          background: "white",
          color: "black",
          boxShadow: "0px 0px 1px 0px gray",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: "none", sm: "block", flexGrow: 1 } }}>
              <Button
                sx={{ color: "black", textTransform: "initial" }}
                id="basic-button "
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
              >
                Categories
              </Button>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Organic Food</MenuItem>
                <MenuItem onClick={handleClose}>Household Tools</MenuItem>
                <MenuItem onClick={handleClose}>Baby Care</MenuItem>
              </Menu>

              <Button sx={{ color: "black", textTransform: "initial" }}>
                <Link to="/about">About Us</Link>
              </Button>
              <Button sx={{ color: "black", textTransform: "initial" }}>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button
                sx={{ color: "black", textTransform: "initial" }}
                id="basic-page "
                onClick={handleClickPage}
                endIcon={<KeyboardArrowDownIcon />}
              >
                Pages
              </Button>

              <Menu
                id="basic-menu"
                anchorEl={page}
                open={openPage}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-page",
                }}
              >
                <MenuItem onClick={handleClose}>Offer</MenuItem>
                <MenuItem onClick={handleClose}>Checkout</MenuItem>
                <MenuItem onClick={handleClose}>About Us</MenuItem>
                <MenuItem onClick={handleClose}>Contact Us</MenuItem>
              </Menu>
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button sx={{ color: "black", textTransform: "initial" }}>
                Privacy Policy
              </Button>
              <Button sx={{ color: "black", textTransform: "initial" }}>
                Terms & Conditions
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </div>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
