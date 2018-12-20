import React from 'react';

const buttonText = function(dif) {
  if (dif === "mild")
    return "NORMAL";
  if (dif === "low")
    return "EASY";
  if (dif === "hard")
    return "HARD";
}

const speed = function(dif) {
  if (dif === "mild")
    return 1;
  if (dif === "low")
    return 3;
  if (dif === "hard")
    return 0.5;
}

const ButtonStart = ({ difficulty = "mild", onClick = () => {} }) => (
  <div
    style={{
      width: '29%',
      margin: '2%',
      display: 'inline-block',
      fontSize: '32px',
      fontStyle: 'italic',
      textAlign: 'center',
      lineHeight: '100px',
      cursor: 'pointer',
      backgroundColor: '#FF5042',
      color: '#21222C'
    }}
    onClick={() => onClick(speed(difficulty))}
  >
    {buttonText(difficulty)}
  </div>
);

export default ButtonStart;
