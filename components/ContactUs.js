import React from 'react';

const ContactUS = () => (
  <div className="col bordered">
    <div className="sub-content">
      <div className="row">
        <svg viewBox="0 0 1000 100" fill="none" style={{ width: '100%' }}>
          <text x="0" y="20" fontSize="30px" fill="#3e3e3e" fontWeight="bold">
            DROP
          </text>
          <path
            stroke="#3E3E3E"
            strokeWidth="2"
            fill="none"
            d="M90 13 L155 13 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 "
          />
          <text x="0" y="55" fontSize="35px" fill="#46C0C6" fontWeight="900">
            US A LINE
          </text>
        </svg>
      </div>

      <div className="col">
        <div className="row">
          <div className="col">
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
          <div className="col">
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
          <div className="col">
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
          <div className="col" />
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
      `}</style>
    </div>
  </div>
);

export default ContactUS;
