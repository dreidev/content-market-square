import React from 'react';
import DecorativeLine from '../atoms/DecorativeLine';
import animation from '../../static/animation.svg';
import app from '../../static/app.svg';
import marketing from '../../static/marketing.svg';
import socialmedia from '../../static/socialmedia.svg';
import research from '../../static/research.svg';

const Services = () => (
  <div className="col bordered">
    <div className="sub-content">
      <div className="col">
        <div className="text-row" style={{ height: '20px' }}>
          <b className="Main-title">OUR</b>
          <DecorativeLine width="8%" id="services_line1" />
        </div>
        <b className="sub-Main-title">SERVICES</b>
        <div
          className="text-row"
          style={{ height: '20px', margin: '40px 0px 15px' }}>
          <b className="sub-title">ANIMATION &amp; VIDEO</b>
          <DecorativeLine width="53%" id="services_line2" />
        </div>
        <div className="col">
          <div className="text-row service">
            <img
              className="service-img"
              src={animation}
              alt="animation&video"
            />
            Tell a great story, visually.
          </div>
          <div className="text-row options">
            <span>Development</span>
            <span className="single-circle"> &#9900;</span>
            <span>Story</span>
            <span className="single-circle"> &#9900;</span>
            <span>Illustration</span>
            <span className="single-circle"> &#9900;</span>
            <span>Animation</span>
          </div>
        </div>
        <div
          className="text-row"
          style={{ height: '20px', margin: '40px 0px 15px' }}>
          <b className="sub-title">APP &amp; DIGITAL PRODUCTS</b>
          <DecorativeLine width="47%" id="services_line3" />
        </div>
        <div className="col">
          <div className="text-row service">
            <img
              className="service-img"
              src={app}
              alt="app & digital products"
            />
            Your customers need simpler and easier web. We buildclear, beautiful
            webs and apps.
          </div>
          <div className="text-row options">
            <span> Planning </span>
            <span className="single-circle"> &#9900;</span>
            <span>Storyboards</span>
            <span className="single-circle"> &#9900;</span>
            <span>Design</span>
            <span className="single-circle"> &#9900;</span>
            <span>Development</span>
          </div>
        </div>
        <div
          className="text-row"
          style={{ height: '20px', margin: '40px 0px 15px' }}>
          <b className="sub-title">CONTENT MARKETING</b>
          <DecorativeLine width="52%" id="services_line4" />
        </div>
        <div className="col">
          <div className="text-row service">
            <img
              className="service-img"
              src={marketing}
              alt="content marketing"
            />
            Discover your sweet spot, drive your strategy, grow your brandunique
            and sustainable.
          </div>
          <div className="text-row options">
            <span> Consumer Relations</span>
            <span className="single-circle"> &#9900;</span>
            <span>Blogging</span>
            <span className="single-circle"> &#9900;</span>
            <span>Social Network</span>
          </div>
        </div>
        <div
          className="text-row"
          style={{ height: '20px', margin: '40px 0px 15px' }}>
          <b className="sub-title">SOCIAL MEDIA CONTENT</b>
          <DecorativeLine width="52%" id="services_line4" />
        </div>
        <div className="col">
          <div className="text-row service">
            <img className="service-img" src={socialmedia} alt="social media" />
            Subscribers to fans. Creative and constant content feed improves
            brand perception.
          </div>
          <div className="text-row options">
            <span> Facebook</span>
            <span className="single-circle"> &#9900;</span>
            <span>Twitter</span>
            <span className="single-circle"> &#9900;</span>
            <span>Instagram</span>
          </div>
        </div>
        <div
          className="text-row"
          style={{ height: '20px', margin: '40px 0px 15px' }}>
          <b className="sub-title">RESEARCH</b>
          <DecorativeLine width="65%" id="services_line5" />
        </div>
        <div className="col">
          <div className="text-row service">
            <img className="service-img" src={research} alt="research" />
            Through research, we envision better marketing practice.
          </div>
          <div className="text-row options">
            <span>example</span>
            <span className="single-circle"> &#9900;</span>
            <span>example</span>
            <span className="single-circle"> &#9900;</span>
            <span>example</span>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .service {
        width: 100%;
        justify-content: space-between;
        align-items: flex-start;
        font-family: 'Belgrano', serif;
        color: #7bc6c1;
        font-size: 27px;
      }
      .service p {
        width: 70%;
      }

      .options {
        color: #3e3e3e;
        font-size: 19px;
        width: 70%;
        justify-content: space-between;
      }

      .service-img {
        width: 170px;
        margin: 0px 2.5rem;
      }

      .single-circle {
        font-size: 35px;
        color: #8ddbd6;
      }

      .text-row.service > img {
        float: right;
      }

      .text-row.service {
        display: inline-block;
      }

      @media screen and (max-width: ${'1100px'}) {
        .service {
          width: 100%;
          align-items: unset;
          justify-content: space-between;
        }

        .service p {
          width: 80%;
          font-size: 25px;
        }

        .service-img {
          width: 150px;
          height: 150px;
        }

        .options {
          font-size: 17px;
          width: 100%;
        }
      }

      @media screen and (max-width: ${'800px'}) {
        .service-img {
          width: 120px;
          height: 120px;
        }

        .service p {
          width: 90%;
        }

        .options {
          font-size: 15px;
          width: 100%;
        }

        .single-circle {
          font-size: 20px;
        }
      }

      @media screen and (max-width: ${'500px'}) {
        .service-img {
          width: 60px;
          height: 60px;
          margin: 0 0.5rem;
        }

        .service p {
          width: 90%;
          margin: 0px;
          font-size: 18px;
        }

        .options {
          font-size: 13px;
          width: 100%;
        }

        .single-circle {
          font-size: 11px;
        }

        .text-row.service {
          font-size: 18px;
          margin: 15px 0px;
        }
      }
    `}</style>
  </div>
);

export default Services;
