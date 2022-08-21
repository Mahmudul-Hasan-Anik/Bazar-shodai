import React,{useState} from 'react'
import { Box,Divider,Toolbar,IconButton,Typography,Container,Drawer, List, ListItem,ListItemButton,ListItemText} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';





const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export default function NavbarFooter(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <div style={{background:'white', color:'black', boxShadow:'0px 0px 1px 0px gray'}}>
    <Container maxWidth='lg'>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block', flexGrow: 1} }}>
             <Button sx={{ color: 'black', textTransform:'initial' }}>Categories</Button>
             <Button sx={{ color: 'black', textTransform:'initial' }}>About Us</Button>
             <Button sx={{ color: 'black', textTransform:'initial' }}>Contact Us</Button>
             <Button sx={{ color: 'black', textTransform:'initial' }}>Pages</Button>
             
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block',} }}>
 
            <Button sx={{ color: 'black', textTransform:'initial' }}>Privacy Policy</Button>
            <Button sx={{ color: 'black', textTransform:'initial' }}>Terms & Conditions</Button>
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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
