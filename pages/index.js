import React from 'react';
import Head from '../components/head';
import Nav from '../components/Nav';
import FirstRow from '../components/FirstRow';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import ContactUs from '../components/ContactUs';

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav title="Home" />
    <div className="main content">
      <FirstRow />
      <About />
      <Services />
      <Projects />
      <ContactUs />
      <div className=" row centered">
        <span
          style={{
            width: '400px',
            margin: '10px',
            fontFamily: 'Belgrano, serif',
            fontSize: '15px',
            color: ' #6c6e6d'
          }}>
          Content Marketing Square 2016
        </span>
      </div>
    </div>

    <style jsx global>{`
      body {
        font-family: 'Titillium Web', sans-serif;
        letter-spacing: 2px;
      }

      ::-webkit-scrollbar {
        width: 10px;
      }

      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      ::-webkit-scrollbar-thumb {
        background: #49bfc5;
        border-radius: 350px;
      }

      .content {
        margin: 0px auto;
      }
      .main {
        left: 0px;
        width: 80%;
        padding-top: 6rem;
      }

      .sub-content {
        padding: 5%;
        width: 90%;
      }

      .col {
        width: 100%;
        display: flex;
        flex-direction: column;
      }

      .bordered {
        border-bottom: solid #97dbd7 2px;
      }

      .row {
        width: 100%;
        display: flex;
        flex-direction: row;
      }

      .text-row {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .centered {
        justify-content: center;
        align-items: center;
      }

      .Main-title {
        font-weight: 600;
        font-size: 1.7rem;
        color: #3e3e3e;
        justify-self: flex-start;
      }

      .sub-Main-title {
        font-weight: 900;
        font-size: 2rem;
        color: #46c0c6;
        align-self: flex-start;
      }

      .sub-title {
        font-weight: 900;
        font-size: 1.3rem;
        color: #f19018;
        align-self: flex-start;
      }

      @media screen and (max-width: ${'1000px'}) {
        .row {
          flex-direction: column;
        }

        .row,
        .col {
          justify-content: center;
          align-items: center;
        }

        .main {
          width: 90%;
        }
      }

      @media screen and (max-width: ${'800px'}) {
        .main {
          width: 100%;
        }
        body {
          letter-spacing: 1px;
        }

        .Main-title {
          font-size: 1.2rem;
        }

        .sub-Main-title {
          font-size: 1.5rem;
        }

        .sub-title {
          font-size: 0.8rem;
        }
      }
    `}</style>
  </div>
);

export default Home;
