import React, { Component, useContext, useState, useEffect } from "react";
import "../../styles/home.scss";
import { Card } from "../component/card.js";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadSomeData();
	}, []);

	let planetsDisplayed = "";

	planetsDisplayed = store.planets.map((item, index) => {
		return <Card key={index} urlData={item.url} />;
	});

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			{planetsDisplayed.length > 0 ? planetsDisplayed : "Loading planets"}
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
		</div>
	);
};
