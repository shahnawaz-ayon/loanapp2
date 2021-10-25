import * as React from "react";
import { Chart } from "react-google-charts";
 
const ExampleChart = () => {
  return (
    <Chart
      chartType="ScatterChart"
      rows={[[8, 12], [4, 5.5], [11, 14], [4, 5], [3, 3.5], [6.5, 7]]}
      columns={[
        {
          type: "number",
          label: "Deposit"
        },
        {
          type: "number",
          label: "Interest"
        }
      ]}
      options={
        // Chart options
        {
          title: "Deposit vs. Interest comparison",
          hAxis: {
            title: "Deposit",
            viewWindow: { min: 0, max: 15 }
          },
          vAxis: { title: "Interest", viewWindow: { min: 0, max: 15 } },
          legend: "none"
        }
      }
      width={"100%"}
      height={"400px"}
      legendToggle
    />
  );
};
export default ExampleChart;