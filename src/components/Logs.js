import React, { useEffect, useState } from "react";
import { MimicLogs } from "../api/api-mimic";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "rsuite";
import { useChangeTimer } from "../store/store";
export default function Logs() {
	const [logs, setLogs] = useState([]);
	const { currentTime, incrTimer } = useChangeTimer();
	const getPreviousLogs = async () => {
		try {
			const data = await MimicLogs.fetchPreviousLogs(0, 60000000, 6);
			setLogs((prevData) => [...prevData, ...data]);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		getPreviousLogs();
	}, []);
	console.log(logs.length);
	useEffect(() => {
		const generateData = async () => {
			try {
				const data = await MimicLogs.fetchPreviousLogs(
					60000000 - currentTime,
					60000000,
					6
				);
				setLogs((prevData) => [...prevData, ...data]);
			} catch (err) {
				console.log(err);
			}
		};
		generateData();
	}, [currentTime]);
	console.log(logs);
	const getLiveLogs = () => {
		const response = MimicLogs.subscribeToLiveLogs(getPreviousLogs);
	};
	// getLiveLogs()

	return (
		<InfiniteScroll
			dataLength={logs.length}
			next={() => {
				getLiveLogs();
			}}
			inverse={true}
			hasMore={true}
			loader={<Loader size="sm" />}
			endMessage={<p>No more data to load.</p>}
			id="vishisht"
			style={{
				backgroundColor: "black",
				position: "absolute",
				width: "70%",
				height: "70%",
				top: "20%",
				left: "20%",
				borderRadius: "20px",
			}}
		>
			{/* <div> */}
			{logs.map((item) => {
				return (
					<div
						key={item.timestamp}
						style={{ display: "flex", flexDirection: "row" }}
					>
						<p
							style={{
								fontSize: "16px",
								fontWeight: "bold",
								letterSpacing: "1px",
								marginRight: "2px",
								color: "gray",
								marginLeft: "10px",
							}}
						>
							{item.timestamp + ":"}
						</p>
						<p
							style={{
								fontSize: "16px",
								fontWeight: "bold",
								letterSpacing: "1px",
								marginRight: "2px",
								color: "#38BDF8",
								marginLeft: "10px",
								width: "70%",
							}}
						>
							{item.message}
						</p>
					</div>
				);
			})}
			<h1
				style={{
					color: "white",
					fontSize: "18px",
					height: "25px",
					width: "250px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					background: "#38BDF8",
					borderRadius: "5px",
					cursor:"pointer"
				}}
        onClick={getLiveLogs}
			>
				click to get more logs
			</h1>
		</InfiniteScroll>
	);
}
