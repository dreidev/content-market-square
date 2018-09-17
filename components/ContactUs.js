import React from 'react';
import DecorativeLine from './atoms/DecorativeLine';

const ContactUS = () => (
  <div className="col bordered">
    <div className="sub-content">
      <div className="col">
        <div className="text-row" style={{ height: '20px' }}>
          <b className="Main-title">Drop</b>
          <DecorativeLine width="12%" id="services_line1" />
        </div>
        <b className="sub-Main-title">US A LINE</b>
        <div className="row">
          <div className="col info-col">
            <svg viewBox="0 0 500 40" fill="none" style={{ width: '100%' }}>
              <text
                x="0"
                y="20"
                fontSize="23px"
                fill="#F19018"
                fontWeight="bold">
                EMAIL
              </text>
              <path
                stroke="#3E3E3E"
                strokeWidth="2"
                fill="none"
                d="M85 13 L410 13 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 "
              />
            </svg>
            <p className="info">mkim@ballast-inc.com</p>
          </div>
          <div className="col info-col">
            <svg viewBox="0 0 500 40" fill="none" style={{ width: '100%' }}>
              <text
                x="0"
                y="20"
                fontSize="23px"
                fill="#F19018"
                fontWeight="bold">
                PHONE
              </text>
              <path
                stroke="#3E3E3E"
                strokeWidth="2"
                fill="none"
                d="M95 13 L410 13 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 "
              />
            </svg>
            <p className="info">070-4607-3830</p>
          </div>
        </div>
        <div className="row">
          <div className="col info-col">
            <svg viewBox="0 0 500 40" fill="none" style={{ width: '100%' }}>
              <text
                x="0"
                y="20"
                fontSize="23px"
                fill="#F19018"
                fontWeight="bold">
                ADDRESS
              </text>
              <path
                stroke="#3E3E3E"
                strokeWidth="2"
                fill="none"
                d="M120 13 L410 13 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 "
              />
            </svg>
            <p className="info">
              8-storey building with 326 namjeon-dong, Gangnam-gu,Seoul
              Bongeunsa, Ltd I & C ballasts.
            </p>
          </div>
          <div className="col info-col" />
        </div>
        <div className="row" />
      </div>

      <style jsx>{`
        .info {
          font-family: 'Belgrano', serif;
          font-size: 20px;
          color: #6c6e6d;
          margin: 0px 0px 40px 0px;
        }

        @media screen and (max-width: ${'1000px'}) {
          .info-col {
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  </div>
);

export default ContactUS;
