import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const PieChart = props => {
  const ref = useRef(null);
  const createPie = d3
    .pie()
    .value(d => d.value)

  const createArc = d3
    .arc()
    .innerRadius(props.innerRadius)
    .outerRadius(props.outerRadius)

  const colors = d3.scaleOrdinal(d3.schemeCategory10);

  useEffect(
    () => {
      // console.log("chart: ", props.data)
      const data = createPie(props.data);
      const group = d3.select(ref.current);
      const groupWithData = group.selectAll("g.arc").data(data);

      groupWithData.exit().remove();

      const groupWithUpdate = groupWithData
        .enter()
        .append("g")
        .attr("class", "arc")

      const path = groupWithUpdate
        .append("path")
        .merge(groupWithData.select("path.arc"))

      path
        .attr("class", "arc")
        .attr("d", createArc)
        .attr("fill", (d, i) => colors(i))
    },
    [props.data]
  );

  return (
    <svg width={props.width} height={props.height}>
      <g
        ref={ref}
        transform={`translate(${props.outerRadius} ${props.outerRadius})`}
      />
    </svg>
  );
};

export default PieChart;
