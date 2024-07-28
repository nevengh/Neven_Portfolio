/* eslint-disable react/no-unescaped-entities */
import "./Home.css";
import { FaFacebook , FaInstagram , FaLinkedin , FaGithub } from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar";
const Home = () => {
  
  return (
    <div className="home">
        <Navbar/>
      <div className="home_content">
        <h1 className="name">Neven Ghasoun</h1>
        <p className="brief">
          I'm a passionate <span>Web developer</span> from Syria
        </p>
        
        <div className="social_links">
            <a href="https://www.facebook.com/neven.ghasoun?mibextid=ZbWKwL"><FaFacebook/></a>
            <a href="https://www.instagram.com/nievenghasoun?igsh=M3VtNXg0Z204MDVy"><FaInstagram/></a>
            <a href="https://www.linkedin.com/in/neven-ghasoun-062542230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin/></a>
            <a href="https://github.com/nevengh"><FaGithub/></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
