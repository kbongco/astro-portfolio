import React from "react";
import './button.css'

export default function Counter(props) {
  console.log(props);
  
  const handleClick = () => {
    console.log('Button was clicked!');
  };
  return (
    <div className='chbi-button-parent'>
      <div className='chbi-button-container'>
        <button className='chbi-button' onClick={handleClick}>
        View Resume
        </button>
     </div>
    </div>
  )
}