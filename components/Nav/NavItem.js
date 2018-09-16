import React from 'react';

const NavItem = ({ text, select, id }) => (
  <>
    <svg
      viewBox="0 0 90 16"
      fill="none"
      fontWeight="bold"
      style={{ width: '20%' }}
      className="navlist-item"
      onClick={() => select(id)}>
      <g fill="none">
        <text
          className="navlist-item-text"
          x="30"
          y="9"
          fontWeight="100"
          fontSize="10px">
          {text}
        </text>
        <path stroke="#3E3E3E" d="M18 6 a2 2 0 1 0 4 0 a2 2 0 1 0 -4 0" />
        <path
          stroke="#3E3E3E"
          className="underline"
          d="M10 6 l8 0 m2 1.8 l5 7 l45 0"
        />
      </g>
    </svg>
    <style jsx>{`
      .underline {
        stroke-dasharray: 100;
        stroke-dashoffset: 100;
      }

      .navlist-item {
        cursor: pointer;
      }

      .navlist-item-text {
        fill: #3e3e3e;
        font-weight: 900;
      }

      .navlist-item-text.selected {
        fill: #46c0c6;
      }

      .navlist-item:hover .underline {
        animation: draw 0.8s linear forwards;
      }
    `}</style>
  </>
);

export default NavItem;
