import React from 'react';
import { BiRectangle } from 'react-icons/bi';
import { FaExclamationCircle } from 'react-icons/fa';
import './Filter.css';

function Filter() {
  return (
    <div className="filter-container">
      <h3 className="filter-title">Filters</h3>
      <div className="filter-subtitle">
        <div> 
          <span className="rect-icon1">
            <BiRectangle/>
          </span> 
            All CQA Result 
          <span className="ex-mark">
            <FaExclamationCircle/>
          </span>
        </div>
        <div>
          <span className="rect-icon2">
            <BiRectangle/>
          </span>CQAs with Closed Loop
          <span className="ex-mark">
            <FaExclamationCircle/>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Filter
