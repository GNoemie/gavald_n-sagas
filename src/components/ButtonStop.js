import React from 'react';

const ButtonStop = ({ onClick = () => {} }) => (
  <span
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      padding: '20px',
      margin: '20px',
      fontSize: '32px',
      fontStyle: 'italic',
      textAlign: 'center',
      cursor: 'pointer',
      backgroundColor: '#FF3072',
      color: '#21222C',
      fontSize: '1em'

    }}
    onClick={onClick}
  >
    STOP
  </span>
);

export default ButtonStop;