import React from 'react';

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100px',
  backgroundColor: '#E8E8E8',
  borderBottom: '1px solid darkgrey',
};

export default function Header() {
  return (
    <div style={headerStyle}>
      <h1>Todo App with React</h1>
    </div>
  );
}
