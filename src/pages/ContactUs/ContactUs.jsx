import { useState } from "react";
import { FaMapLocation, FaShareNodes } from "react-icons/fa6";
import { useForm, ValidationError } from "@formspree/react";
import "./ContactUs.css";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";

function ContactUs() {
  const [state, handleSubmit] = useForm("mrbzqapr");
  const [showPopup, setShowPopup] = useState(false);

  const handleFormSubmit = async (event) => {
    await handleSubmit(event);
    if (state.succeeded) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Hide the popup after 3 seconds
    }
  };

  return (
    <div className="ContactUs">
      {showPopup && (
        <div className="popup">
          <p>Thanks for joining!</p>
        </div>
      )}
      <div className="container">
        <div className="about_header">
          <h2>Contact</h2>
          <p>Contact Me</p>
        </div>
        <div className="contact_Box">
          <div className="contact_card">
            <div className="svg_box">
              <FaMapLocation />
            </div>
            <div className="card_info">
              <h3>Address</h3>
              <p>Syria - Latakia</p>
            </div>
          </div>
          <div className="contact_card">
            <div className="svg_box">
              <FaShareNodes />
            </div>
            <div className="card_info">
              <h3>Social Profile</h3>
              <ul className="social_icon">
                <li>
                  <a href="https://www.facebook.com/neven.ghasoun?mibextid=ZbWKwL">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/nievenghasoun?igsh=M3VtNXg0Z204MDVy">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/neven-ghasoun-062542230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="t.me/Nieven_gh">
                    <FaTelegram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="contact_card">
            <div className="svg_box">
              <FaEnvelope />
            </div>
            <div className="card_info">
              <h3>Email Me</h3>
              <p>nevenghasoun@gmail.com</p>
            </div>
          </div>
          <div className="contact_card">
            <div className="svg_box">
              <FaPhone />
            </div>
            <div className="card_info">
              <h3>Call Me</h3>
              <p>+963 993748380</p>
            </div>
          </div>
        </div>
        <div className="form_contact">
          <form onSubmit={handleFormSubmit} action="https://formspree.io/f/mrbzqapr" method="POST">
            <div className="input_group">
              <input type="text" name="name" placeholder="Your Name" />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <input type="text" name="subject" placeholder="Subject" className="subject" />
            <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
            <textarea id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button className="submit" type="submit" disabled={state.submitting}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
