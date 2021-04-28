import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar/ChartBar";

type dataPoints = { label: string; value: number };
type Props = {
  dataPoints: dataPoints[];
};

const Chart = (props: Props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const max = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={max}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
