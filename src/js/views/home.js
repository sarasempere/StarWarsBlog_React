import React, { Component, useContext, useState, useEffect } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { ListPlanets } from "../component/listPlanets";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadSomeData();
	}, []);

	return (
		<div>
			<ListPlanets />
		</div>
	);
};
