import React from 'react';

const footerStyle = {
  /*position: 'fixed',
  bottom: 0,
  left: 0,*/
  height: '50px',
  display: 'flex',
  'align-items': 'center',
  'justify-content': 'center',
  width: '100%',
  'background-color': '#E8E8E8',
  'border-top': '1px solid darkgrey',
};

export default function Footer() {
  return (
    <div style={footerStyle}>
      <p>Jofresh</p>
    </div>
  );
}
