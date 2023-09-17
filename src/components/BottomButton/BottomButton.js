import React from 'react';
import './BottomButton.css';

function BottomButton({ title, statusActive }) {
  return (
    <button
      className={`${statusActive ? 'bottom-button' : 'bottom-button_inactive'}`}
    >
      {title}
    </button>
  );
}

export default BottomButton;
