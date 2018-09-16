import React from 'react';

const Boat = () => (
  <>
    <svg viewBox="0 0 400 370" fill="none">
      <path
        className="wave"
        stroke="#3E3E3E"
        strokeWidth="11"
        d="M25 310.03c4.3 55.63 81.88 48.16 81.88 0 4.3 55.63 81.87 48.16 81.87 0 4.31 55.63 81.88 48.16 81.88 0 4.3 55.63 81.88 48.16 81.88 0"
      />
      <g className="boat">
        <path
          fill="#49C2C4"
          d="M357.76 236.3H50.28c1.5 16.43 7.3 48.23 35.97 55.82H320.1c17.99 0 40.47-33.06 37.66-55.83z"
        />
        <path
          stroke="#3E3E3E"
          strokeWidth="11"
          d="M189.3 225.88H37c-.55 0-1 .45-1 1 .38 22.46 13.32 51.37 37.17 54.7h.15c64.4-.82 193.96 0 228.6 0 27.17 0 38.55-34.99 40.6-54.62a.98.98 0 0 0-.99-1.08H189.3zm0 0V40.48m0 0L338.44 200.1a1 1 0 0 1-.73 1.68H97.5a1 1 0 0 1-.86-1.5L189.3 40.48zm0 0V33m101.34 215.33h21.66"
        />
        <path
          fill="#F18B2B"
          stroke="#F18B2B"
          d="M183.7 33h-67.58l21.98 21.6-21.98 21.06h67.59V33z"
        />
      </g>
      <path
        className="bird"
        stroke="#3E3E3E"
        strokeWidth="11"
        d="M35.99 109.17c19.23-2.64 40.11 11.06 40.11 27.9 0-10.52 12.64-30.01 40.67-27.9"
      />
    </svg>
    <style jsx>{`
      .wave {
        transition: 0.3s;
        animation: wave 1.8s alternate infinite;
      }

      .bird {
        transition: 0.3s;
        animation: bird 3s alternate infinite;
        animation-delay: 0.5s;
      }

      .boat {
        transition: 0.3s;
        animation: boat 1.8s alternate infinite;
      }

      @keyframes boat {
        100% {
          transform: translate(6px, -6px);
        }
      }

      @keyframes bird {
        100% {
          transform: translate(-20px, -10px);
        }
      }

      @keyframes wave {
        100% {
          transform: translate(-6px, -6px);
        }
      }
    `}</style>
  </>
);

export default Boat;
