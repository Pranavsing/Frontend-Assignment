import React, { useState, useEffect, useRef } from "react";
import { useParams, useHistory } from "react-router-dom";
import { MimicLogs, MimicMetrics } from "../api/api-mimic";
import { Line, Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
function Metrices() {
  const [graphData, setGraphData] = useState([]);
  const time = new Date().getMilliseconds();
  const getAllGraphs = async () => {
    try {
      const response = await MimicMetrics.fetchMetrics(0, time);
      setGraphData(response);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllGraphs();
  }, []);
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
  return (
    <div>
      <div style={{ width: "50%" }}>
        {allGraphs.map((i, j) => {
          return (
            <Line
              // width="50%"
              // height="50%"
              datasetIdKey={j.toString()}
              data={i}
            />
          );
        })}
      </div>
      <div>Hello</div>
    </div>
  );
}
export default Metrices;
