import React from 'react'
import BannerDiscount from './BannerDiscount'
import BannerSlider from './BannerSlider'
import { Container,Grid } from '@mui/material'
import BannerFooter from './BannerFooter'

const Banner = () => {
  return (
    <Container maxWidth='lg' className='banner'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
            <BannerSlider/>
        </Grid>
        <Grid item xs={12} md={5}>
            <BannerDiscount/>
        </Grid>
      </Grid>

      <BannerFooter/>
    </Container>
  )
}

export default Banner
