import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { MimicLogs, MimicMetrics } from "../api/api-mimic";
import { useChangeTimer } from "../store/store";  


const Metrices = () => {
	const [graphData, setGraphData] = useState([]);
	var time = new Date().getMilliseconds();
	time = time * 24 * 60 * 60 * 1000;
  const {currentTime,incrTimer} = useChangeTimer()
	console.log(currentTime);
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
  useEffect(()=>{
    const previousGraphs = async () => {
      try {
        const response = await MimicMetrics.fetchMetrics(0-currentTime, 1200000000);
        setGraphData(response);
      } catch (err) {
        console.log(err);
      }
    };
    previousGraphs();
  },[currentTime])
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
	// console.log(allGraphs);
  const graphName = ["CPU Usuage","Memory Usuage", "Network Usuage","Disk IOPS"];
	return (
		<div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
				<div style={{width:"40%"}}>
					{allGraphs.length > 0 && (
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
              <p style={{fontSize:"20px",fontWeight:"bold"}}>{graphName[0]}</p>
              <Line
							datasetIdKey="0"
							data={allGraphs[0]}
						/>
            </div>
						
					)}
					{allGraphs.length > 1 && (
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <p style={{fontSize:"20px",fontWeight:"bold"}}>{graphName[1]}</p>
            <Line
            datasetIdKey="1"
            data={allGraphs[1]}
          />
          </div>
					)}
				</div>
				<div style={{width:"40%"}}>
					{allGraphs.length > 2 && (
						<div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <p style={{fontSize:"20px",fontWeight:"bold"}}>{graphName[2]}</p>
            <Line
            datasetIdKey="2"
            data={allGraphs[2]}
          />
          </div>
					)}
					{allGraphs.length > 3 && (
						<div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <p style={{fontSize:"20px",fontWeight:"bold"}}>{graphName[3]}</p>
            <Line
            datasetIdKey="3"
            data={allGraphs[3]}
          />
          </div>
					)}
				</div>
		</div>
	);
};

export default Metrices;
