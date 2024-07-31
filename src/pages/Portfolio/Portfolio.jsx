import Navbar from "../../components/Navbar/Navbar";
import "./Portfolio.css";
import villa from "../../assets/villa agnecy.jpg";
import Resend from '../../assets/resend.jpg'
import calculator from '../../assets/screenshot.png'
import alhosn from '../../assets/alhosn.jpg'
import {  FaLink } from "react-icons/fa";


function Portfolio() {
  return (
    <div className="Portfolio">
      <Navbar />
      <div className="container">
        <div className="about_header">
          <h2>Portfolio</h2>
          <p>My Works</p>
        </div>
        <div className="work">
          <div className="card_one">
            <div className="card">
              <img src={villa} alt="" />
              <div className="card__content">
                <p className="card__title">Villa Agency</p>
                <a href="https://nevengh.github.io/VillaAgency/" className="card__description">
                  <FaLink/>
                </a>
              </div>
            </div>
            <div className="card">
              <img src={Resend} alt="" />
              <div className="card__content">
                <p className="card__title">Resend Website</p>
                <a href="https://nevengh.github.io/ResendVite/" className="card__description">
                  <FaLink/>
                </a>
              </div>
            </div>
            <div className="card">
              <img src={alhosn} alt="" />
              <div className="card__content">
                <p className="card__title">Alhosn Finicial Broker</p>
                <a href="https://steady-florentine-5ba0c9.netlify.app/" className="card__description">
                  <FaLink/>
                </a>
              </div>
            </div>
            <div className="card">
              <img src={villa} alt="" />
              <div className="card__content">
                <p className="card__title">Phono Website</p>
                <a href="https://github.com/nevengh/Phono_Website" className="card__description">
                  <FaLink/>
                </a>
              </div>
            </div>
            <div className="card">
              <img src={calculator} alt="" />
              <div className="card__content">
                <p className="card__title">Calcuator</p>
                <a href="https://github.com/nevengh/Calculator_React" className="card__description">
                  <FaLink/>
                </a>
              </div>
            </div>
            <div className="card">
              <img src={villa} alt="" />
              <div className="card__content">
                <p className="card__title">Villa Agency</p>
                <a href="" className="card__description">
                  <FaLink/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
