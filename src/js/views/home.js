import React, { useContext } from "react";
import CharacterCard from "../component/CharacterCard.jsx";
import PlanetCard from "../component/PlanetCard.jsx";
import "../../styles/home.css";
import { Context } from "./../store/appContext.js"


export const Home = () => {

	const { store, actions } = useContext(Context) //This line is to import my elements from flux
	const { characters, planets } = store //Destructuring the store object

	return (

		<>
			<div className="container mt-5">
				<h1 className="text-danger">Characters</h1>
				<div className="my-carrousel">

					{characters.map((character, index) => {
						return (
							//						<CharacterCard character={character} index={index} key={character.uid} /> //Adding a prop, in this case character
							<CharacterCard character={character} key={character.uid} /> //Adding a prop, in this case character and the index
						)
					})}

				</div>
			</div>

			<div className="container mt-5">

				<h1 className="text-danger">Planets</h1>
				<div className="my-carrousel">

					{planets.map((planet, index) => {
						return (
							<PlanetCard planet={planet} key={planet.uid} />
						)
					})}

				</div>


			</div>
		</>



	)
};
