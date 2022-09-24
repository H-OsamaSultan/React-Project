import "./Chart.css";

import ChartBar from "./ChartBar";
const Chart = (props) => {
  const MaxValueArray = props.dataPoints.map((dataPoint) => dataPoint.value);
  let totallMaximum = Math.max(...MaxValueArray);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totallMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
