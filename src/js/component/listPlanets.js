import React, { Component, useContext, useState, useEffect } from "react";
import { Card } from "./card";

import { Context } from "../store/appContext";

export const ListPlanets = props => {
	const { store, actions } = useContext(Context);
	//const [count, setCount] = useState(1);
	useEffect(() => {
		actions.loadSomeData();
	}, []);
	/*useEffect(
		() => {
			actions.addPage();
		},
		[count]
    );*/
	const [indexTopPlanets, setIndexTopPlanets] = useState(4);
	const indexBottomPlanets = indexTopPlanets - 4;

	let planetsDisplay;
	planetsDisplay = store.planets.map((element, index) => {
		if (index <= indexTopPlanets && index >= indexBottomPlanets) {
			return <Card key={index} urlData={element} />;
		}
	});

	return (
		<div>
			<h1>Planets</h1>
			<div className="container">
				<div className="row">{planetsDisplay.length > 0 ? planetsDisplay : "Loading planets"}</div>
			</div>
			<button onClick={() => setIndexTopPlanets(indexTopPlanets + 5)}>Load</button>
		</div>
	);
};
