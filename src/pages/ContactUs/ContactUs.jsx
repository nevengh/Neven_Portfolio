import { FaMapLocation, FaShareNodes } from 'react-icons/fa6'
import Navbar from '../../components/Navbar/Navbar'
import './ContactUs.css'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTelegram } from 'react-icons/fa'

function ContactUs() {
  return (
    <div className='ContactUs'>
        <Navbar/>
        <div className="container">
        <div className="about_header">
          <h2>Contact</h2>
          <p>Contact Me</p>
        </div>
        <div className="contact_Box">
          <div className="contact_card">
            <div className="svg_box">

            <FaMapLocation/>
            </div>
            <div className="card_info">
              <h3>Address</h3>
              <p>Syria - Latakia</p>
            </div>
          </div>
          <div className="contact_card">
            <div className="svg_box">

            <FaShareNodes/>
            </div>
            <div className="card_info">
              <h3>Social Profile</h3>
              <ul className="social_icon">
                <li><a href="https://www.facebook.com/neven.ghasoun?mibextid=ZbWKwL"><FaFacebook/></a></li>
                <li><a href="https://www.instagram.com/nievenghasoun?igsh=M3VtNXg0Z204MDVy"><FaInstagram/></a></li>
                <li><a href="https://www.linkedin.com/in/neven-ghasoun-062542230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin/></a></li>
                <li><a href="t.me/Nieven_gh"><FaTelegram/></a></li>
              </ul>
            </div>
          </div>
          <div className="contact_card">
            <div className="svg_box">

            <FaEnvelope/>
            </div>
            <div className="card_info">
              <h3>Email Me</h3>
              <p>nevenghasoun@gmail.com</p>
            </div>
          </div>
          <div className="contact_card">
            <div className="svg_box">

            <FaPhone/>
            </div>
            <div className="card_info">
              <h3>CAll Me</h3>
              <p>+963 993748380</p>
            </div>
          </div>
        </div>
        <div className="form_contact">
          <form action="">
            <div className="input_group">
            <input type="text" placeholder='your Name' />
            <input type="email" placeholder='your Email' />
            </div>
            <input type="text" placeholder='Subject' className='subject' />
            <textarea name="" id="" placeholder='Message'></textarea>
            <button className='submit'>Send Message</button>
          </form>
        </div>
        </div>
    </div>
  )
}

export default ContactUs