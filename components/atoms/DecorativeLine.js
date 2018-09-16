import React from 'react';

const DecorativeLine = ({ id, reversed, width }) => (
  <>
    <div
      id={id}
      className={`decorative-line centered ${reversed ? 'reversed' : ''}`}>
      <div className="line" />
      <div className="circle" />
    </div>
    <style jsx>{`
      #${id} {
        width: ${width};
      }

      .decorative-line {
        padding: 10px 0px 0px 10px;
        display: flex;
      }

      .line {
        height: 0px;
        border: black solid 1px;
        width: 100%;
      }

      .circle {
        width: 8px;
        height: 8px;
        border: black solid 2px;
        border-radius: 50%;
        background: white;
      }

      .reversed {
        transform: scaleX(-1);
      }

      @media screen and (max-width: 500px) {
        #${id} {
          width: ${width};
        }
      }
    `}</style>
  </>
);

export default DecorativeLine;
