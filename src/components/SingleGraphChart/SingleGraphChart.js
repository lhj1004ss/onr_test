import React, { useEffect, useRef, useState } from "react";
import { select, line, axisBottom } from 'd3';
import * as d3 from 'd3';
import './SingleGraphChart.css';

function SingleGraphChart({ data, title }) {
  console.log(data, title);
  const scores = data.map(e => e.score);
  console.log(scores);

  const months = data.map(e => e.date);
  const svgRef = useRef();

  useEffect(() => {
      const svg = select(svgRef.current);
      const xScale = d3.scaleBand()
                       .domain(months)
                       .range([-50,500]);
      const xAxis = axisBottom(xScale);

      svg.select(".x-aixs").call(xAxis);

      svg.append("g")
         .call(xAxis)
         .attr("transform",`translate(0,${270})`);

      const myLine = line()
                     .x((value, index) => index * 145)
                    .y(value => -80 - value);

      svg.selectAll("path")
         .data([scores])
         .join("path")
         .attr("d", myLine)
         .attr("fill","none")
         .attr("stroke","blue")
         .attr("stroke-width","3");

  }, [scores, months])
  return (
    <div className="line-container"> 
      <h2 className="line-title">
        {title} Trend
      </h2>
      <svg className="line-svg"ref={svgRef}>
      </svg>   
    </div>
      
  )
}


export default SingleGraphChart
