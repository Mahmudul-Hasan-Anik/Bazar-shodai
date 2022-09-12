import React from "react";
import { Grid, Box, TextField, InputAdornment } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const ContactForm = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <img src="./image/conForm.png" alt="" />
      </Grid>
      <Grid item xs={12} md={6} className="contact_form-head">
        <h1>For any suppoort just send your query</h1>
        <p>
          Collaboratively promote client-focused convergence vis-a-vis customer
          directed alignments via plagiarize strategic users and standardized
          infrastructures.
        </p>
        <div className="contact-form">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "250px" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Your Name"
              variant="outlined"
              placeholder="Name"
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Your Email"
              variant="outlined"
              placeholder="Email"
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "517px" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField label="Subject" variant="outlined" required />
            <TextField
              multiline
              rows={3}
              label="Message"
              variant="outlined"
              required
            />
          </Box>
          <button>Send Message</button>
        </div>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
