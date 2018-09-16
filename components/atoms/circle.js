import React from 'react';

const Circle = () => (
  <>
    <div className="single-circle" />
    <style jsx>{`
      .single-circle {
        width: 8px;
        height: 8px;
        border: #8ddbd6 solid 2px;
        border-radius: 50%;
        background: white;
      }
    `}</style>
  </>
);

export default Circle;
