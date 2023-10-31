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
			characters: [],
			planets: [],
			favorites: [],
			urlBase: "https://www.swapi.tech/api"
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
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
			},
			//Define a function to get the characters from the API
			getCharacters: async () => {
				let store = getStore()
				try {
					let response = await fetch(`${store.urlBase}/people`)
					let data = await response.json()
					// console.log("this is data.results")
					// console.log(data.results)

					for (let person of data.results) {
						let responseTwo = await fetch(person.url)
						let dataTwo = await responseTwo.json()
						//console.log(dataTwo)
						setStore({
							characters: [...store.characters, dataTwo.result]
						})
					}

					// setStore({
					// 	characters: data.results
					// })


				} catch (error) {
					console.log(error)
				}
			},
			//Define a function to get the planets from the API
			getPlanets: async () => {
				let store = getStore()
				try {
					let response = await fetch(`${store.urlBase}/planets`)
					let data = await response.json()
					//console.log(data.results)

					for (let planet of data.results) {
						let responseTwo = await fetch(planet.url)
						let dataTwo = await responseTwo.json()
						//console.log(dataTwo)
						setStore({
							planets: [...store.planets, dataTwo.result]
						})
					}

					// setStore({
					// 	planets: data.results
					// })


				} catch (error) {
					console.log("this is an error")
					console.log(error)
				}
			},
			//Define a function to get the favorites
			addFavorite: (favToSave) => {
				let store = getStore()
				let exists = store.favorites.some((item) => item == favToSave)
				// let exists  = store.favorites.some((item) => item.id == favToSave._id)
				if (exists) {
					let newList = store.favorites.filter((item) => item != favToSave)

					setStore({
						favorites: newList //filter returns a list!!!
					})

				}
				else {
					setStore({
						favorites: [...store.favorites, favToSave]
					})
				}
			},
			deleteFavorite: (favToDelete) => {
				let store = getStore()
				let newList = store.favorites.filter((item) => item != favToDelete)

				setStore({
					favorites: newList
				})
			}
		}
	};
};

export default getState;
