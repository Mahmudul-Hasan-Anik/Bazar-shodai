import React from 'react'
import { Grid,Box,Typography } from '@mui/material'
import { Container } from '@mui/system'
import {Link} from 'react-router-dom'
import AdbIcon from '@mui/icons-material/Adb';


const FooterNav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}  className='footer-nav'>
      <Container maxWidth='lg'>
        <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
                <h2>Company</h2>
                <ul>
                  <li><Link to='/about'>About Us</Link></li>
                  <li><Link to='/contact'>Contact us</Link></li>
                  <li><Link to='/careers'>Careers</Link></li>
                  <li><Link to='/news'>Latest News</Link></li>
                </ul>
            </Grid>
            <Grid item xs={6} md={3}>
                <h2>Top Category</h2>
                <ul>
                  <li><Link to='/fish'>Fish & Meat</Link></li>
                  <li><Link to='/drinks'>Soft Drinks</Link></li>
                  <li><Link to='/baby'>Baby Care</Link></li>
                  <li><Link to='/health'>Beauty & Health</Link></li>
                </ul>
            </Grid>
            <Grid item xs={6} md={3}>
                <h2>Company</h2>
                <ul>
                  <li><Link to='/dashboard'>Dashboard</Link></li>
                  <li><Link to='/order'>My Orders</Link></li>
                  <li><Link to='/recentOrder'>Recent Orders</Link></li>
                  <li><Link to='/editProfile'>Updated Profile</Link></li>
                </ul>
            </Grid>
            <Grid item xs={6} md={3}>
            <div className='footer-nav-logo'>
            <AdbIcon sx={{ mr: 1 }} />
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                }}
            >
                FRESH
            </Typography>
            </div>
                <p>987 Andre Plain Suite High Street 838</p>
                <p>Lake Hestertown, USA</p>
                <p>Tell: 02.356.1666</p>
                <p>Email: ccruidk@test.com</p>
            </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default FooterNav