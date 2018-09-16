import React from 'react';
import MainDescription from './MainDescription';
import Boat from './Boat';
import Button from '../atoms/Button';

const FirstRow = () => (
  <div className="col bordered">
    <div className="row" style={{ marginTop: '5%', marginBottom: '5%' }}>
      <div className="small-col">
        <Boat />
      </div>
      <div className="big-col">
        <MainDescription />
        <div className="actions">
          <Button id="firstRowAction" text="SEE OUR SERVICES" width="45%" />
          <Button id="firstRowAction" text="SEE OUR PROJECTS" width="45%" />
        </div>
      </div>
    </div>
    <div className="col centered" style={{ border: 'none' }}>
      <span
        style={{ fontWeight: 'bold', color: '#3e3e3e', letterSpacing: '1px' }}>
        Scroll Down For Full
      </span>
      <span
        style={{ fontWeight: '900', color: '#46C0C6', letterSpacing: '1px' }}>
        JOURNEY
      </span>
      <svg
        viewBox=" 0 0 60 85"
        width="35"
        height="56"
        fill="none"
        style={{ margin: '20px' }}>
        <path
          fill="#F38C15"
          d="M56.1 17.3c-12-14.7-32-18.3-46.4 0A9 9 0 0 0 7.8 23V64c0 2.4.9 4.7 2.5 6.4 18.8 19 38.5 8.3 46-.4a7.9 7.9 0 0 0 1.7-5.2V23c0-2-.6-4.1-1.9-5.7z"
        />
        <path
          stroke="#3E3E3E"
          strokeWidth="4"
          d="M2 35.3c10.1-4.1 18-5.7 25.6-5.6M53 35.3a82.5 82.5 0 0 0-25.5-5.6m0-27.7c-9-.2-18.2 4.4-25.3 15.5a2 2 0 0 0-.3 1v43.2c0 .4.1.8.3 1 11.6 19.3 36.1 23.4 50.5 0 .2-.2.3-.6.3-1V18.5a2 2 0 0 0-.3-1A31.4 31.4 0 0 0 27.6 2zm0 0v8.3m0 0h-2.9a2 2 0 0 0-2 2v7.5c0 1.1 1 2 2 2h2.9m0-11.5h2.8a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2h-2.8m0 0v7.9"
        />
      </svg>
    </div>

    <style jsx>{`
      .small-col {
        width: 35%;
        height: 80%;
      }

      .big-col {
        width: 65%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
      }

      .actions {
        padding: 2.5%;
        width: 95%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }

      @media screen and (max-width: 1000px) {
        .actions {
          width: 100%;
        }
      }

      @media screen and (max-width: 800px) {
        .big-col {
          width: 100%;
          margin-top: 2.3rem;
        }
        .small-col {
          width: 50%;
        }
      }
    `}</style>
  </div>
);

export default FirstRow;
