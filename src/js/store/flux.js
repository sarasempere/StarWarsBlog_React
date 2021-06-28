const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			planets: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadSomeData: () => {
				let planets = [];
				fetch("https://www.swapi.tech/api/planets")
					.then(res => res.json())
					.then(data => {
						let pages = data.total_pages;
						for (let i = 0; i < pages; i++) {
							fetch("https://www.swapi.tech/api/planets?page=" + i + "&limit=10")
								.then(res => res.json())
								.then(data => {
									data.results.map(planet => planets.push(planet));
									const store = getStore();
									setStore({ planets: planets });
									console.log(planets);
								})

								.catch(err => console.error(err));
						}
					})

					.catch(err => console.error(err));
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
