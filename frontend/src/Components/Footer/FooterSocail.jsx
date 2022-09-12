import React from "react";
import { Grid, Box } from "@mui/material";
import { Container } from "@mui/system";

const FooterSocail = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className="footer-socail">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <h2>Follow Us</h2>
            <ul className="footer-socail-icon">
              <li>
                <img src="./image/facebook.png" />
              </li>
              <li>
                <img src="./image/twitter.png" />
              </li>
              <li>
                <img src="./image/linkedin.png" />
              </li>
              <li>
                <img src="./image/whatsapp.png" />
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={6} className="footer-socail-middle">
            <h2>Call Us Today!</h2>
            <h1>+012345-67900</h1>
          </Grid>
          <Grid item xs={12} md={3}>
            <img src="./image/pay.jpg" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FooterSocail;
