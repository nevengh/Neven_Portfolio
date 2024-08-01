import {  FaFastForward, FaLaptop, FaLayerGroup, FaReact, FaUser } from "react-icons/fa";

import "./ServicesPage.css";


function ServicesPage() {
  return (
    <div className="ServicesPage">
      
      <div className="container">
        <div className="about_header">
          <h2>Services</h2>
          <p>My Services</p>
        </div>
        <div className="services_container">
            <div className="service_card">
                <FaLaptop/>
                <h1>Web Application Development</h1>
                <p>Creating interactive and dynamic web applications using frameworks like React.</p>
            </div>
            <div className="service_card">
                <FaLayerGroup/>
                <h1>Responsive Web Design</h1>
                <p>Ensuring websites and applications function seamlessly across various devices and screen sizes</p>
            </div>
            <div className="service_card">
                <FaUser/>
                <h1>User Experience (UX) Enhancement</h1>
                <p>Collaborating with UX designers to improve the overall user experience of websites and applications</p>
            </div>
            <div className="service_card">
                <FaFastForward/>
                <h1>Performance Optimization</h1>
                <p>Creating interactive and dynamic web applications using frameworks like React,</p>
            </div>
            <div className="service_card">
                <FaReact/>
                <h1>Single Page Application (SPA) Development</h1>
                <p>Creating interactive and dynamic web applications using frameworks like React,</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
