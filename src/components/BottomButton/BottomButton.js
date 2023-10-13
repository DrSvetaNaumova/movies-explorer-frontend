import React from 'react';
import './BottomButton.css';

function BottomButton({ title, isInactive }) {
  return (
    <button
      className={isInactive ? 'bottom-button_inactive' : 'bottom-button'}
      type="submit"
      disabled={isInactive}
    >
      {title}
    </button>
  );
}

export default BottomButton;
