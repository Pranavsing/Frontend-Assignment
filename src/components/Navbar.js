import React, { useEffect, useState } from "react";
import { useChangeTimer } from "../store/store";
import { NavLink } from "react-router-dom";
import Metrices from "./Metrices";
function Navbar({children}) {
	const [selected, setSelected] = useState("Last 0 minutes");
	const {currentTime,incrTimer} = useChangeTimer();
	const options = [
    "Last 0 minutes",
		"Last 5 minutes",
		"Last 15 minutes",
		"Last 30 minutes",
		"Last 1 hour",
		"Last 3 hours",
		"Last 6 hours",
	];
	const secondOptions = {
    "Last 0 minutes":0,
		"Last 5 minutes": 300000,
		"Last 15 minutes": 900000,
		"Last 30 minutes": 1800000,
		"Last 1 hour": 3600000,
		"Last 3 hours": 10800000,
		"Last 6 hours": 21600000,
	};
  useEffect(() => {
    incrTimer(secondOptions[selected]);
  }, [selected, incrTimer]);
	return (
    <div>
      <div
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
				borderBottom: "2px solid blue",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					marginLeft: "20px",
				}}
			>
				<h1 href="/" className="site-title">
					Truefondry
				</h1>
				<ul style={{ display: "flex", flexDirection: "row", gap: "3rem" }}>
					<a
						href="metrices"
						style={{
							border: "2px solid black",
							backgroundColor: "black",
							width: "100px",
							height: "40px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							color: "white",
							fontSize: "20px",
							borderRadius: "10px",
						}}
					>
					Metrices
					</a>
					<a
						href="logs"
						style={{
							border: "2px solid black",
							backgroundColor: "black",
							width: "100px",
							height: "40px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							color: "white",
							fontSize: "20px",
							borderRadius: "10px",
						}}
					>
						Logs
					</a>
          <a
						href="storybook"
						style={{
							border: "2px solid black",
							backgroundColor: "black",
							width: "100px",
							height: "40px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							color: "white",
							fontSize: "20px",
							borderRadius: "10px",
						}}
					>
						Story Book
					</a>
				</ul>
			</div>
			<div>
				<select
					value={selected}
					onChange={(e) => {
						setSelected(e.target.value);
					}}
					style={{
						width: "140px",
						height: "40px",
						marginRight: "20px",
						borderRadius: "10px",
					}}
				>
					{options.map((option, index) => (
						<option key={index} value={option}>
							{option}
						</option>
					))}
				</select>
			</div>
		</div>
    <div>{children}</div>
    </div>
		
	);
}
export default Navbar;
