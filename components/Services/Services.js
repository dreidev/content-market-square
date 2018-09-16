import React from 'react';
import DecorativeLine from '../atoms/DecorativeLine';
import Circle from '../atoms/circle';
import animation from '../../static/animation.png';
import app from '../../static/app.png';
import marketing from '../../static/marketing.png';
import socialmedia from '../../static/socialmedia.png';
import research from '../../static/research.png';

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
        <div className="text-row">
          <div className="col service">
            <p>Tell a great story, visually.</p>
            <div className="text-row options">
              <span> Concept Development</span>
              <Circle />
              <span>Story</span>
              <Circle />
              <span>Illustration</span>
              <Circle />
              <span>Animation</span>
            </div>
          </div>

          <div style={{ width: '20%' }}>
            <img
              src={animation}
              alt="animation&video"
              style={{
                width: '200px',
                height: '200px'
              }}
            />
          </div>
        </div>
        <div
          className="text-row"
          style={{ height: '20px', margin: '40px 0px 15px' }}>
          <b className="sub-title">APP &amp; DIGITAL PRODUCTS</b>
          <DecorativeLine width="47%" id="services_line3" />
        </div>
        <div className="text-row">
          <div className="col service">
            <p>
              Your customers need simpler and easier web. We buildclear,
              beautiful webs and apps.
            </p>
            <div className="text-row options">
              <span> Plan & Idea Development</span>
              <Circle />
              <span>Storyboards</span>
              <Circle />
              <span>Design</span>
              <Circle />
              <span>Development</span>
            </div>
          </div>

          <div style={{ width: '20%' }}>
            <img src={app} alt="app & digital products" />
          </div>
        </div>
        <div
          className="text-row"
          style={{ height: '20px', margin: '40px 0px 15px' }}>
          <b className="sub-title">CONTENT MARKETING</b>
          <DecorativeLine width="52%" id="services_line4" />
        </div>
        <div className="text-row">
          <div className="col service">
            <p>
              Discover your sweet spot, drive your strategy, grow your
              brandunique and sustainable.
            </p>
            <div className="text-row options">
              <span> Consumer Relations</span>
              <Circle />
              <span>Blogging</span>
              <Circle />
              <span>Social Network</span>
            </div>
          </div>

          <div style={{ width: '20%' }}>
            <img src={marketing} alt="content marketing" />
          </div>
        </div>
        <div
          className="text-row"
          style={{ height: '20px', margin: '40px 0px 15px' }}>
          <b className="sub-title">RESEARCH</b>
          <DecorativeLine width="65%" id="services_line5" />
        </div>
        <div className="text-row">
          <div className="col service">
            <p>Through research, we envision better marketing practice.</p>
            <div className="text-row options">
              <span>example</span>
              <Circle />
              <span>example</span>
              <Circle />
              <span>example</span>
            </div>
          </div>

          <div style={{ width: '20%' }}>
            <img src={research} alt="research" />
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .service {
        width: 80%;
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
        width: 90%;
        justify-content: space-between;
        margin-top: 40px;
      }
    `}</style>
  </div>
);

export default Services;
