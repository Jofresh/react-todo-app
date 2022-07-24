import React from 'react';

const todoStyle = {
  display: 'flex',
  alignItems: 'center',

  justifyContent: 'space-between',
  width: '50%',
  padding: '5px',
  borderRadius: '5px',
  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
};

import CloseIcon from './CloseIcon';

export default function Todo({ id, todo, deleteTodo }) {
  return (
    <div style={todoStyle}>
      <div>{todo}</div>
      <CloseIcon handleClick={() => deleteTodo(id)} />
    </div>
  );
}
