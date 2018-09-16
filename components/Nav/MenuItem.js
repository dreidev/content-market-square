import React from 'react';

const MenuItem = ({ text, select, toggle, id }) => (
  <>
    <div
      className="menuItem-row row"
      style={{
        width: '100%',
        cursor: 'pointer'
      }}
      onClick={() => {
        select(id);
        toggle();
      }}>
      <div
        className="row bordered"
        style={{
          width: '90%'
        }}>
        <span className="menuItem">{text}</span>
      </div>
    </div>
    <style jsx>{`
      .menuItem {
        font-size: 30px;
        font-weight: 900;
        width: 80%;
      }
    `}</style>
  </>
);

export default MenuItem;
