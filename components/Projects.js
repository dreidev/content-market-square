import React from 'react';
import Button from './atoms/Button';
import proj1 from '../static/proj1new.png';
import proj2 from '../static/proj2.png';
import proj3 from '../static/proj3.png';
import proj4 from '../static/proj4.png';

const Projects = () => (
  <div className="col bordered">
    <div className="sub-content">
      <div className="row">
        <svg viewBox="0 0 1000 100" fill="none" style={{ width: '100%' }}>
          <text x="0" y="20" fontSize="30px" fill="#3e3e3e" fontWeight="bold">
            OUR
          </text>
          <path
            stroke="#3E3E3E"
            strokeWidth="2"
            fill="none"
            d="M70 13 L155 13 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 "
          />
          <text x="0" y="55" fontSize="35px" fill="#46C0C6" fontWeight="900">
            PROJECTS
          </text>
        </svg>
      </div>
      <div className="col centered">
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <div className="col" style={{ width: '510px' }}>
            <img src={proj2} alt="project photo" className="proj-pic" />
            <h2 className="proj-title">PROJECT TITLE GOES HERE</h2>
            <p className="proj-description">
              Curabitur blandit tempus porttitor. Sed posuereconsectetur est at
              lobortis.
            </p>
          </div>
          <div className="col" style={{ width: '510px' }}>
            <img src={proj1} alt="project photo" className="proj-pic" />
            <h2 className="proj-title">PROJECT TITLE GOES HERE</h2>
            <p className="proj-description">
              Curabitur blandit tempus porttitor. Sed posuereconsectetur est at
              lobortis.
            </p>
          </div>
        </div>
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <div className="col" style={{ width: '510px' }}>
            <img src={proj3} alt="project photo" className="proj-pic" />
            <h2 className="proj-title">PROJECT TITLE GOES HERE</h2>
            <p className="proj-description">
              Curabitur blandit tempus porttitor. Sed posuereconsectetur est at
              lobortis.
            </p>
          </div>
          <div className="col" style={{ width: '510px' }}>
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
         {
          /* width: 510px;
        height: 325px; */
        }
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
    `}</style>
  </div>
);

export default Projects;
