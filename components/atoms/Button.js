import React from 'react';

const Button = ({ text, width, id }) => (
  <>
    <button id={id}>
      {text}
      <svg viewBox="0 0 100 70" fill="none" width="1.5em">
        <path
          stroke="#3E3E3E"
          strokeWidth="4"
          fill="none"
          d="M50 20 L75 45 L100 20 M50 40 L75 65 L100 40"
        />
      </svg>
    </button>
    <style jsx>{`
      #${id} {
        width: ${width};
      }
      button {
        background: white;
        border: solid #46c0c6 2px;
        color: #3e3e3e;
        height: 60px;
        cursor: pointer;
        font-size: 100%;
      }
    `}</style>
  </>
);

export default Button;
