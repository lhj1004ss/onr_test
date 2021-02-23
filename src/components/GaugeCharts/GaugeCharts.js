import React from 'react'
import jsonData from '../../data/data.json'
import PieChart from '../PieChart'
import SingleGaugeChart from '../SingleGaugeChart'
import './GaugeCharts.css'

function Chart({ selectedData }) {
  const myData = jsonData.gaugeData.map((data, i) => <SingleGaugeChart key={i} selectedData={selectedData} {...data}/>);
  return (
    <>
    <div className="chart-row">
      {myData.slice(0, 3)}
    </div>
    <div className="chart-row">
      {myData.slice(3)}
    </div>
    </>
  )
}

export default Chart
