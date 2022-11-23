import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import airBnb from "./data";
import "./index.css";

function App() {
	const cards = airBnb.map((data) => {
		let { id } = data;
		return <Card key={id} item={data} />;
	});
	return (
		<div className="wrapper">
			<div className="header">
				<div className="container_header">
					<Navbar />
				</div>
			</div>
			<Hero />
			<section className="card-section">
				<div className="card-parent">
					<div className="scroll">{cards}</div>
				</div>
			</section>
		</div>
	);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
