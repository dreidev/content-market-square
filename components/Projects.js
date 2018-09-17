import React from 'react';
import Button from './atoms/Button';
import DecorativeLine from './atoms/DecorativeLine';
import proj1 from '../static/proj1new.png';
import proj2 from '../static/proj2.png';
import proj3 from '../static/proj3.png';
import proj4 from '../static/proj4.png';

const Projects = () => (
  <div className="col bordered">
    <div className="sub-content">
      <div className="text-row" style={{ height: '20px' }}>
        <b className="Main-title">OUR</b>
        <DecorativeLine width="8%" id="services_line1" />
      </div>
      <b className="sub-Main-title">SERVICES</b>
      <div className="col centered">
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <div className="col proj-col">
            <img src={proj2} alt="project photo" className="proj-pic" />
            <h2 className="proj-title">PROJECT TITLE GOES HERE</h2>
            <p className="proj-description">
              Curabitur blandit tempus porttitor. Sed posuereconsectetur est at
              lobortis.
            </p>
          </div>
          <div className="col proj-col">
            <img src={proj1} alt="project photo" className="proj-pic" />
            <h2 className="proj-title">PROJECT TITLE GOES HERE</h2>
            <p className="proj-description">
              Curabitur blandit tempus porttitor. Sed posuereconsectetur est at
              lobortis.
            </p>
          </div>
        </div>
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <div className="col proj-col">
            <img src={proj3} alt="project photo" className="proj-pic" />
            <h2 className="proj-title">PROJECT TITLE GOES HERE</h2>
            <p className="proj-description">
              Curabitur blandit tempus porttitor. Sed posuereconsectetur est at
              lobortis.
            </p>
          </div>
          <div className="col proj-col">
            <img src={proj4} alt="project photo" className="proj-pic" />
            <h2 className="proj-title">PROJECT TITLE GOES HERE</h2>
            <p className="proj-description">
              Curabitur blandit tempus porttitor. Sed posuereconsectetur est at
              lobortis.
            </p>
          </div>
        </div>
        <Button id="projectsBtn" text="LOAD MORE PROJECTS" width="45%" />
      </div>
    </div>
    <style jsx>{`
      .proj-pic {
        width: 100%;
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }

      .proj-pic:hover {
        transition: 0.3s;
        transform: scale(1.02);
      }

      .proj-title {
        font-weight: 900;
        color: #f19018;
      }

      .proj-description {
        font-family: 'Belgrano', serif;
        width: 515px;
        color: #6c6e6d;
        margin: 0px 0px 40px 0px;
      }

      .proj-col {
        width: 50%;
      }

      @media screen and (max-width: 1000px) {
        .proj-description {
          width: 100%;
        }

        .proj-col {
          width: 100%;
        }
      }
    `}</style>
  </div>
);

export default Projects;
