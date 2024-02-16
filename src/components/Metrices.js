import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { MimicLogs, MimicMetrics } from "../api/api-mimic";

const Metrices = () => {
  const [graphData, setGraphData] = useState([]);
  var time = new Date().getMilliseconds();
  time = time * 24 * 60 * 60 * 1000;
  console.log(time);
  const getAllGraphs = async () => {
    try {
      const response = await MimicMetrics.fetchMetrics(100, 1200000);
      setGraphData(response);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllGraphs();
  }, []);
  console.log(graphData);
  const allGraphs = [];
  if (graphData.length > 0) {
    graphData.map((value, key) => {
      const data_last = {
        labels: value.name,
        datasets: [],
      };
      const y = value.graphLines;
      y.map((sub_value, sub_key) => {
        const alpha = [];
        const beeta = [];
        sub_value.values.map((v_1, k_1) => {
          alpha.push(v_1.timestamp);
          beeta.push(v_1.value);
        });
        var x = {};
        if (sub_value.name == "Used" || sub_value.name == "Write") {
          x = {
            label: sub_value.name,
            backgroundColor: "rgb(210, 43,43)",
            borderColor: "rgb(210, 43, 43)",
            data: beeta,
          };
        } else if (sub_value.name == "Requested" || sub_value.name == "Read") {
          x = {
            label: sub_value.name,
            backgroundColor: "rgb(0,150,255)",
            borderColor: "rgb(0,150,255)",
            data: beeta,
          };
        } else {
          x = {
            label: sub_value.name,
            backgroundColor: "rgb(34,139,34)",
            borderColor: "rgb(34,139,34)",
            data: beeta,
          };
        }
        data_last.labels = alpha;
        data_last.datasets.push(x);
      });
      allGraphs.push(data_last);
    });
  }

  useEffect(() => {
    const interval = setInterval(getAllGraphs, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);
  console.log(allGraphs);
  return (
    <div>
      <div style={{ width: "50%", display: "grid", gridTemplateColumns: 3 }}>
        {allGraphs.map((i, j) => {
          return (
            <Line
              width="50%"
              height="50%"
              datasetIdKey={j.toString()}
              data={i}
            />
          );
        })}
        {/* <div>
          <Line width="50%" height="50%" datasetIdKey="0" data={allGraphs[0]} />
          <Line width="50%" height="50%" datasetIdKey="1" data={allGraphs[1]} />
        </div>
        <div>
          <Line width="50%" height="50%" datasetIdKey="2" data={allGraphs[2]} />
          <Line width="50%" height="50%" datasetIdKey="3" data={allGraphs[3]} />
        </div> */}
      </div>
      {/* <div>Hello</div> */}
    </div>
  );
};

export default Metrices;
