import React from 'react'
import PieChart from '../PieChart';
import './SingleGaugeChart.css';

function SingleGaugeChart({selectedData, name, sample, score}) {
  const scoreData = [
    {
    value: score
    }, 
    {
    value: 100 - score
    }]
  return (
    <div className="chart-container" onClick={() => selectedData(name)}>          
      <div className="chart-name">{name}</div>
      <div>
          <PieChart 
            data={scoreData}
            width={80}
            height={80}
            innerRadius={35}
            outerRadius={40}
          />
        </div>
      <div className="chart-mini">
        <div className="chart-score">
          {score}%
        </div>
        <div className="chart-na">N/A</div> 
      </div>
      <div className="chart-sample">Sample: {sample}</div>
    </div>
  )
}

export default SingleGaugeChart
