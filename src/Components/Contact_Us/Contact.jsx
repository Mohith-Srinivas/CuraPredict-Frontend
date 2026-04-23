import React from "react";
import "./Contsct.css";

import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  return (
    <div className="contact-page">

      {/* ECG BACKGROUND */}
      <div className="ecg-container">
        <svg viewBox="0 0 700 200" className="ecg">
          <path
            className="ecg-line"
            d="M0,100 
               L100,100 
               L140,50 
               L180,150 
               L220,10 
               L260,190 
               L300,100 
               L400,100 
               L440,50 
               L480,150 
               L520,10 
               L560,190 
               L600,100 
               L700,100"
          />
        </svg>
      </div>

      {/* GLASS BOX */}
      <div className="glass-box">

        <h1>Contact Us</h1>

        <p className="intro">
          <strong>CuraPredict</strong> is an AI-powered healthcare platform that
          analyzes patient data to predict health risks and improve treatment outcomes.
        </p>

        {/* CONTACT INFO (IMPROVED) */}
        <div className="contact-info">

          <div className="info-row">
            <PhoneIcon className="icon" />
            <span>+91-7337309992</span>
          </div>

          <div className="info-row">
            <LanguageIcon className="icon" />
            <span>www.curapredict.in</span>
          </div>

          <div className="info-row">
            <EmailIcon className="icon" />
            <span>mohithsrinivasjujjuru.2006@gmail.com</span>
          </div>

          <div className="info-row">
            <LocationOnIcon className="icon" />
            <span>VIT AP University, Amaravati</span>
          </div>

        </div>

        {/* FORM */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="4" placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>

      </div>
    </div>
  );
};

export default Contact;