import React from "react";
export default function Storybook() {
	return (
		<div
			style={{
				position: "absolute",
				top: "20%",
				width:"100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<img
				src={process.env.PUBLIC_URL + "/screen101.png"}
				alt="hierarchy"
				width="600"
				height="500"
			/>
			<div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
				<p>
					The Project follows the hierarchy in which 4 files are created in src
					folder one for navbar, one for metrices, one for logs and one for the
					storybook{" "}
				</p>
				<p>Developed using react and deployed on vercel</p>
				<p>The image above shows the file structure</p>
				<p>
					Just clone the repo from github and then run npm i and then npm start
					and by default the server will be started on localhost:3000
				</p>
			</div>
			<div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
				{" "}
				<p style={{ fontSize: "20px", fontWeight: "bold" }}>
					Preview of metrices
				</p>
				<img src={process.env.PUBLIC_URL + "/screen102.png"} />
			</div>
			<div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
				<p style={{ fontSize: "20px", fontWeight: "bold" }}>Preview of logs</p>
				<img src={process.env.PUBLIC_URL + "/screen103.png"} />
			</div>
		</div>
	);
}
