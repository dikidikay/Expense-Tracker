import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

  let totalValue = 0;
  for (let i = 0; i < dataPointValues.length; i++) {
    totalValue += dataPointValues[i];
  }

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          sumValue={totalValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
