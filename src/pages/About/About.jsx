/* eslint-disable react/no-unescaped-entities */
import { FaArrowAltCircleRight, FaClock } from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar";
import "./About.css";
import { FaBook, FaRegFaceSmile } from "react-icons/fa6";
import neven from '../../assets/1721650340124.jpg'
import { useEffect, useState } from "react";

function About() {
  const [clientCount, setClientCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [hours, setHours] = useState(0);
  const clientTargetNumber = 132;
  const projectTargetNumber = 32;
  const hoursTargetNumber = 500;
  const duration = 2000; // Duration of the animation in milliseconds
  const intervalDuration = 20; // How often to update the number (in milliseconds)

  useEffect(() => {
    const animateCount = (start, end, setter) => {
      const totalIncrements = duration / intervalDuration;
      const incrementAmount = (end - start) / totalIncrements;

      const timer = setInterval(() => {
        start += incrementAmount;
        if (start >= end) {
          clearInterval(timer);
          setter(end);
        } else {
          setter(Math.floor(start));
        }
      }, intervalDuration);

      return timer;
    };

    const clientTimer = animateCount(0, clientTargetNumber, setClientCount);
    const projectTimer = animateCount(0, projectTargetNumber, setProjectCount);
    const hoursTimer = animateCount(0, hoursTargetNumber, setHours);

    return () => {
      clearInterval(clientTimer);
      clearInterval(projectTimer);
      clearInterval(hoursTimer);
    };
  }, []);
  return (
    <div className="about-me">
      <Navbar />
      <div className="container">
        <div className="about_header">
          <h2>About</h2>
          <p>Learn more about me</p>
        </div>
        <div className="about_content">
          <img src={neven} alt="" />
          <div className="about_content_text">
            <h1>Front End Developer</h1>
            <p className="lorem">
              I'm a software engineer with a Bachelor's degree in Computer engineering and automatic control from Tishreen University.
            </p>
            <div className="ul_container">
              <ul>
                <li>
                  <FaArrowAltCircleRight />
                  <strong>Birthday:</strong>
                  <span> 3 October 1998 </span>
                </li>
                <li>
                  <FaArrowAltCircleRight />
                  <strong>Phone:</strong>
                  <span>+963 993748380</span>
                </li>
                <li>
                  <FaArrowAltCircleRight />
                  <strong>City:</strong>
                  <span>Syria-Latakia</span>
                </li>
              </ul>
              <ul>
                <li>
                  <FaArrowAltCircleRight />
                  <strong>Age:</strong>
                  <span> 26 </span>
                </li>
                <li>
                  <FaArrowAltCircleRight />
                  <strong>Degree:</strong>
                  <span>bachelor degree</span>
                </li>
                <li>
                  <FaArrowAltCircleRight />
                  <strong>Email:</strong>
                  <span>nevenghasoun@gmail.com</span>
                </li>
              </ul>
            </div>
            <p className="lorem">
              Specializing in software .with  over two years of experience in the field, I bring a wealth of knowledge and expertise in front-end development.
              My skills include Html , Css , JavaSCript , Bootstrap , React , Redux , Redux Toolkit , github , git , trello and Typescript.
            </p>
          </div>
        </div>
        <div className="count_container">
          <div className="count_box">
            <div className="icon">
              <FaRegFaceSmile />
            </div>
            <div className="number">
              <h2>+{clientCount}</h2>
              <p>Happy Client</p>
            </div>
          </div>
          <div className="count_box">
            <div className="icon">
              <FaBook />
            </div>
            <div className="number">
              <h2>+{projectCount}</h2>
              <p>Projects</p>
            </div>
          </div>
          <div className="count_box">
            <div className="icon">
              <FaClock />
            </div>
            <div className="number">
              <h2>+{hours}</h2>
              <p>Hours Of Support</p>
            </div>
          </div>
        </div>
        <div className="skills">
          <div className="about_header">
            <h2>Skills</h2>
            
          </div>
          <div className="skills-con">
          <div className="skils-left">
          <div className="skill-box">
              <span className="title">HTML</span>

              <div className="skill-bar">
                <span className="skill-per html">
                  <span className="tooltip">100%</span>
                </span>
              </div>
            </div>

            <div className="skill-box">
              <span className="title">css</span>

              <div className="skill-bar">
                <span className="skill-per scss">
                  <span className="tooltip">80%</span>
                </span>
              </div>
            </div>
            <div className="skill-box">
              <span className="title">Boostrap</span>

              <div className="skill-bar">
                <span className="skill-per Boostrap">
                  <span className="tooltip">80%</span>
                </span>
              </div>
            </div>
            <div className="skill-box">
              <span className="title">Laravel</span>

              <div className="skill-bar">
                <span className="skill-per redux">
                  <span className="tooltip">50%</span>
                </span>
              </div>
            </div>
          </div>


          <div className="skils-right">
          <div className="skill-box">
              <span className="title">java script</span>

              <div className="skill-bar">
                <span className="skill-per java">
                  <span className="tooltip">60%</span>
                </span>
              </div>
            </div>

            <div className="skill-box">
              <span className="title">redux</span>

              <div className="skill-bar">
                <span className="skill-per redux">
                  <span className="tooltip">50%</span>
                </span>
              </div>
            </div>
            <div className="skill-box">
              <span className="title">React</span>

              <div className="skill-bar">
                <span className="skill-per react">
                  <span className="tooltip">90%</span>
                </span>
              </div>
            </div>
            <div className="skill-box">
              <span className="title">php</span>

              <div className="skill-bar">
                <span className="skill-per redux">
                  <span className="tooltip">50%</span>
                </span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
