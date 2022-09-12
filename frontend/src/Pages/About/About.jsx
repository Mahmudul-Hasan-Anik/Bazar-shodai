import React from "react";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import Layout from "../../Components/Layout";

const About = () => {
  return (
    <Layout>
      <img src="./image/about.jpg" className="contact-image" />
      <Container maxWidth="lg" className="about">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} className="about-content">
            <h1>Welcome to our KachaBazar</h1>
            <p>
              Holisticly seize parallel metrics and functional ROI. Seamlessly
              revolutionize error-free internal or "organic" sources before
              effective scenarios. Progressively incentivize state of the art
              applications for efficient intellectual capital. Credibly leverage
              existing distinctive mindshare through cutting-edge schemas.
              Proactively procrastinate team building paradigms coordinate
              client-centric total transparent internal.
            </p>
            <p>
              Dynamically embrace diverse customer service and installed base
              paradigms. Credibly seize enterprise-wide experiences for
              end-to-end data. Professionally brand flexible alignments and cost
              effective architectures. Enthusiastically incentivize seamless
              communities with seamlessly facilitate revolutionary metrics with
              strategic theme areas.
            </p>

            <div className="about-card">
              <div className="about-card-item">
                <h1>10K</h1>
                <h3>Listed Products</h3>
                <p>
                  Dynamically morph team driven partnerships after vertical.
                </p>
              </div>
              <div className="about-card-item">
                <h1>8K</h1>
                <h3>Lovely Customer</h3>
                <p>
                  Competently productize virtual models without performance.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src="./image/conForm.png" alt="" />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default About;
