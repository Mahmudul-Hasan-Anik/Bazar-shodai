import React, {useState} from 'react'
import { Box,AppBar,Toolbar,IconButton,Typography,Container,FormControl, OutlinedInput,Modal,Backdrop,Button  } from '@mui/material'

import InputAdornment from '@mui/material/InputAdornment';
import AdbIcon from '@mui/icons-material/Adb';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import NavbarFooter from '../Navbar/NavbarFooter';
import Registration from '../../Pages/Auth/Registration';


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <AppBar position="static" style={{background:'#10B981'}} className='navbar'>
      <Container maxWidth='lg'>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            FRESH
          </Typography>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} style={{marginLeft:'100px'}}>
          <FormControl sx={{ m: 3, width: '80ch'}} variant="outlined">
            <OutlinedInput
                className='search-input'
                style={{background:'white', height:'45px', borderRadius:'8px', fontSize:'14px'}}
                placeholder='search for products (e.g. fish, apple, oil)'
                endAdornment={
                    <InputAdornment position="end" style={{cursor:'pointer'}}>
                         <SearchOutlinedIcon/>
                    </InputAdornment>
                }
            />
          </FormControl>
          </Box>

          <Box sx={{ flexGrow: 0, color:'white' }}>
              <IconButton  sx={{ p: 2, color:'white'}} className='icon-hover'>
                <NotificationsNoneOutlinedIcon/>
              </IconButton>
              <IconButton sx={{ p: 2, color:'white'}}>
                <ShoppingCartOutlinedIcon/>
              </IconButton>
              <IconButton sx={{ p: 2, color:'white'}} onClick={handleOpen}>
                <PermIdentityOutlinedIcon/>
              </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

    <NavbarFooter/>


    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
      
          <Box className='auth-modal'>
            <Registration/>
          </Box>
      
      </Modal>
    </div>
    </>
  );
};
export default Navbar;
