/* eslint-disable react/no-unescaped-entities */
import Navbar from "../../components/Navbar/Navbar";
import "./Resum.css";

function Resum() {
  return (
    <div className="resum">
      <Navbar />
      <div className="container">
        <div className="about_header">
          <h2>Resume</h2>
          <p>Check My Resume</p>
        </div>
        <div className="resum_container">
          <div className="resum_left">
            <div className="summary">
              <h3 className="resum_title">Sumary</h3>
              <h2 className="resum_subtitle">Neven Ghasoun</h2>
              <p className="resum_text">
                I'm a software engineer with a Bachelor's degree in Computer
                engineering and automatic control from Tishreen University.
                Specializing in software .with over two years of experience in
                the field, I bring a wealth of knowledge and expertise in
                front-end development. My skills include Html , Css , JavaSCript
                , Bootstrap , React , Redux , Redux Toolkit , github , git ,
                trello and Typescript.
              </p>
              <ul>
                <li>Syria-Latakia</li>
                <li>+963 993748380</li>
                <li>nevenghasoun@gmail.com</li>
              </ul>
            </div>
            <div className="education">
              <h3 className="resum_title">Education</h3>
              <h2 className="resum_subtitle resum_subtitle_edu">
                Bachelor in computer engineering and automatic control
              </h2>
              <h5 className="year_edu">2016-2021</h5>
              <p className="resum_text">
              I'm a software engineer with a Bachelor's degree in Computer
              engineering and automatic control from Tishreen University.
              </p>
            </div>
          </div>
          <div className="resum_right">
            <div className="experiens">
              <h3 className="resum_title">Professional Experience</h3>
              <h2 className="resum_subtitle">
                Traines as Front-End developer{" "}
              </h2>
              <h5 className="year_edu">2023</h5>

              <ul>
                <li>we execute many project as a team and individually </li>
                <li>
                  we implement many project using Html5 and css and js and also
                  using react and bootstrap
                </li>
              </ul>
            </div>
            <div className="experiens">
              {/* <h3 className="resum_title">Professional Experience</h3> */}
              <h2 className="resum_subtitle">
                Traines as Full Stack Developer{" "}
              </h2>
              <h5 className="year_edu">2023</h5>

              <ul>
                <li>we execute many project as a team and individually </li>
                <li>
                  we implement many project using Html5 and css and js and also
                  using react , php and laravel
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resum;
