import React, { useState } from 'react';

function ClickableDiv() {
  const [message, setMessage] = useState('');

  const handleButtonClick = (e) => {
    e.stopPropagation(); // зупинити вспливання події на рівні div
    setMessage('Button clicked');
  };

  const handleDivClick = () => {
    setMessage('Div clicked');
  };

  return (
    <div onClick={handleDivClick}>
      {message && <p>{message}</p>}
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
}

export default ClickableDiv;
