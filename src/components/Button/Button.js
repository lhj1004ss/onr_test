import React from 'react';
import './Button.css';

function Button() {
  const button = [
    {
      name: "Day"
    },
    {
      name: "Week"
    },
    {
      name: "Month"
    },
    {
      name: "Quater"
    },
    {
      name: "Half"
    },
    {
      name: "Year"
    }
  ]
  return (
    <div className="button-container"> 
      {button.map((btn,i) => 
          <button className="button" key={i}>
            {btn.name}
          </button>
        )}
    </div>
  )
}

export default Button
