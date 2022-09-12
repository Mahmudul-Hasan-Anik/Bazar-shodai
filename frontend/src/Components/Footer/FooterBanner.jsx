import React from "react";
import { Grid, Box } from "@mui/material";

const FooterBanner = () => {
  return (
    <div className="footer-banner">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} className="footer-banner_imageOne">
            <img src="./image/shoping01.png" style={{ width: "100%" }} />
          </Grid>
          <Grid item xs={12} md={4} className="footer-banner_content">
            <h1>Get Your Daily Needs From Our KachaBazar Store</h1>
            <p>
              There are many products you will find our shop, Choose your daily
              necessary product from our KachaBazar shop and get some special
              offer.
            </p>
            <Grid style={{ display: "flex" }}>
              <Grid xs={12} md={6}>
                <img src="./image/appstore.png" style={{ marginTop: "28px" }} />
              </Grid>
              <Grid xs={12} md={6}>
                <img src="./image/playstore.png" style={{ height: "134px" }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} className="footer-banner_imageTwo">
            <img src="./image/shoping02.png" style={{ width: "100%" }} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default FooterBanner;
