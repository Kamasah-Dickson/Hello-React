import React from "react";
export default function App2(props) {
	let { img, name, text, badge, openSpots } = props.item;
	console.log(props.item);
	let badgeText;
	if (openSpots === 0) {
		badgeText = "SOLD OUT";
	}
	return (
		<div className="card">
			{/* if badgeText has a value? then display badge */}
			{badgeText && <div className="card--badge">{badgeText}</div>}
			<div className="img">
				<img src={require(`../images/${img}`)} alt="house" />
			</div>
			<div className="head">
				<img
					className="star"
					src={require(`../images/${badge}`)}
					alt="verified"
				/>
				<span>{name}</span>
			</div>
			<p>{text}</p>
		</div>
	);
}
