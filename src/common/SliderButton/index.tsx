import React, { useState } from 'react';
import './styles.css';

const SliderPayButton = ({ amount, onConfirm }: { amount: number; onConfirm: () => void }) => {
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    if (!animate) {
      setAnimate(true);
      setTimeout(() => {
        onConfirm();
        setAnimate(false); 
      }, 1000); 
    }
  };

  return (
    <div className="slider-button" onClick={handleClick} style={{background: amount === 0 ? '#ccc': '#007bff', cursor: amount === 0 ? 'not-allowed': 'pointer'}}>
      <span className="slider-text">Pay ${amount.toFixed(2)}</span>
      <div className={`slider-arrow ${animate ? 'animate' : ''}`}>
        →
      </div>
    </div>
  );
};

export default SliderPayButton;
