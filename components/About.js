import React from 'react';
import DecorativeLine from './atoms/DecorativeLine';
import Logo from '../static/Logo.png';

const About = () => (
  <div className="col bordered">
    <div className="sub-content">
      <div className="col">
        <div className="text-row" style={{ height: '20px' }}>
          <b className="Main-title">ABOUT</b>
          <DecorativeLine width="35%" id="about_line1" />
        </div>
        <b className="sub-Main-title">CONTENT MARKETING SQUARE</b>
        <div
          className="text-row"
          style={{ height: '20px', margin: '40px 0px 15px' }}>
          <b className="sub-title">WHO ARE WE?</b>
          <DecorativeLine width="60%" id="about_line2" />
        </div>
      </div>

      <div className="row">
        <p className="about">
          In a very simple terms, We're an agency that's very passionate about
          building meaningful videos and applications, as well as developing
          content for marketing strategies. We're here to deliver quality work
          that will ensure our customers' satisfaction.
        </p>
        <div className="about-pic-container" style={{ width: '30%' }}>
          <img src={Logo} alt="logo" className="about-pic" />
        </div>
      </div>
      <style jsx>{`
        .about {
          width: 70%;
          color: #6c6e6d;
          font-size: 25px;
          padding-right: 20px;
          font-family: 'Belgrano', serif;
        }

        .about-pic-container {
          display: flex;
          justify-content: flex-end;
        }

        .about-pic {
          width: 270px;
          height: 270px;
        }

        @media screen and (max-width: 1000px) {
          .about {
            width: 95%;
            padding: 0px;
            font-size: 30px;
          }

          .about-pic {
            display: none;
          }
        }
        @media screen and (max-width: 800px) {
          .about {
            font-size: 20px;
            width: 100%;
          }
        }
        @media screen and (max-width: 500px) {
          .about {
            font-size: 15px;
            width: 100%;
          }
        }
      `}</style>
    </div>
  </div>
);

export default About;
