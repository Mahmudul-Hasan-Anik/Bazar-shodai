import React from "react";
import Layout from "../../Components/Layout";
import { Container } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Layout>
      <img src="./image/contact.jpg" className="contact-image" />
      <Container maxWidth="lg">
        <div className="contact-card-main">
          <div className="contact-card">
            <MailOutlineIcon />
            <h1>Email Us</h1>
            <p>
              <span>kachabazar@gmail.com</span> Interactively grow empowered for
              process-centric total linkage.
            </p>
          </div>
          <div className="contact-card">
            <PhoneInTalkIcon />
            <h1>Call Us</h1>
            <p>
              <span>029-00124667</span> Distinctively disseminate focused
              solutions clicks-and-mortar ministate.
            </p>
          </div>
          <div className="contact-card">
            <LocationOnIcon />
            <h1>Location</h1>
            <p>Cecilia Chapman, 561-4535 Nulla LA, United States 96522</p>
          </div>
        </div>

        <ContactForm />
      </Container>
    </Layout>
  );
};

export default Contact;
