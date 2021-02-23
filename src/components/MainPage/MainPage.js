import React, { useState } from 'react';
import jsonData from '../../data/data.json'
import GaugeCharts from '../GaugeCharts';
import GraphCharts from '../GraphCharts';
import Filter from '../Filter';
import Button from '../Button';
import { AiOutlineGlobal } from 'react-icons/ai';
import { BiPin } from 'react-icons/bi';
import './MainPage.css';

function MainPage() {
  const [title, setTitle] = useState('');
  const [data, setData] = useState([]);

  const selectedData = (name) => {
    setData(
      jsonData.areaData[name]
    );
    setTitle(name);
  }
  return (
    <div className="container">
      <div className="title">
        <h1>Performance management</h1>
      </div>
      <div className="sub-title">
        <h3>
          <span className="global-icon">
            <AiOutlineGlobal/>
          </span> Diagnostic Tool
          <span className="pin-icon">
            <BiPin/>
          </span>
        </h3>
      </div>

      <div className="main-container">
      <div className="main-chart">
        <Filter/>
        <GaugeCharts selectedData={selectedData} />  
      </div>
      <div className="main-graph">
        <Button/>
        <GraphCharts title={title} data={data} />
      </div>
      </div>

    </div>
  )
}

export default MainPage
