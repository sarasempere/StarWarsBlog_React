import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Card = l => {
	console.log(l, "url");
	const [charged, setCharged] = useState(undefined);
	useEffect(() => {
		fetch(l.urlData.url)
			.then(res => res.json())
			.then(data => {
				setCharged(data.result);
				console.log(data.result);
			})
			.catch(err => console.error(err));
	}, []);
	return (
		<div className="col-4">
			<div className="card">
				<img className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">
						Name:
						{charged ? charged.properties.name : ""}
					</h5>
					<h5 className="card-title">Climate: {charged ? charged.properties.climate : ""}</h5>
					<p className="card-text">Description: {charged ? charged.description : ""}</p>
					<Link to="">
						<button className="btn btn-primary">Info</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
