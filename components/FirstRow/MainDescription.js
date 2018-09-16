import React from 'react';
import DecorativeLine from '../atoms/DecorativeLine';

const MainDescription = () => (
  <>
    <div className="text-row centered" style={{ height: '20px' }}>
      <span className="regular-font">
        WHERE YOUR <b className="highlighted">IDEAS</b>
      </span>
      <DecorativeLine width="19%" id="topLine" />
    </div>
    <div className="text-row centered">
      <DecorativeLine reversed width="13%" id="bottomLine" />
      <span className="regular-font">
        &amp; <b className="highlighted">PROJECTS</b> SET SAIL.
      </span>
    </div>

    <style jsx>{`
      .regular-font {
        font-size: 1.8rem;
        color: #3e3e3e;
        font-weight: 600;
      }

      .highlighted {
        font-size: 3.8rem;
        color: #46c0c6;
      }

      @media screen and (max-width: ${'1100px'}) {
        .regular-font {
          font-size: 1.5rem;
        }

        .highlighted {
          font-size: 3.1rem;
        }
      }

      @media screen and (max-width: ${'550px'}) {
        .regular-font {
          font-size: 1.1rem;
        }

        .highlighted {
          font-size: 2.1rem;
        }
      }
    `}</style>
  </>
);

export default MainDescription;
