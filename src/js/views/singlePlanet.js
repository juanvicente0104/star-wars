import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = props => {
	const { store, actions } = useContext(Context);
	let params = useParams();
	const [detail, setDetail] = useState({});

	//Define a functions to look for details in the store!
	const findDetailPlanets = () => {
		const result = store.planets.find((planet) => planet._id == params.theid)
		setDetail(result)
	}

	useEffect(() => {
		findDetailPlanets()
	}, [store.planets])

	return (
		<div className="jumbotron">
			<div className="container text-center">
				<div className="row">
					<div className="col-6">
						<img src={`https://starwars-visualguide.com/assets/img/${detail?.uid == 1 ? "placeholder.jpg" : `planets/${detail?.uid}.jpg`}`} alt="..." className="w-50" />
					</div>
					<div className="col-6 align-middle justify-content-center">
						<h1 className="display-4">{detail?.properties?.name}</h1>

						<p>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
						</p>

					</div>
				</div>

				<div className="container text-center text-danger">

					<hr className="my-4 border border-danger border-1 opacity-100" />

					<div class="row">
						<h4 class="col-2">
							Name
						</h4>
						<h4 class="col-2">
							Climate
						</h4>
						<h4 class="col-2">
							Population
						</h4>
						<h4 class="col-2">
							Orbital Period
						</h4>
						<h4 class="col-2">
							Rotation Period
						</h4>
						<h4 class="col-2">
							Diameter
						</h4>
					</div>

					<div class="row">

						<div class="col-2">
							{detail?.properties?.name}
						</div>
						<div class="col-2">
							{detail?.properties?.climate}
						</div>
						<div class="col-2">
							{detail?.properties?.population}
						</div>
						<div class="col-2">
							{detail?.properties?.orbital_period}
						</div>
						<div class="col-2">
							{detail?.properties?.rotation_period}
						</div>
						<div class="col-2">
							{detail?.properties?.diameter}
						</div>
					</div>

				</div>
			</div>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

SinglePlanet.propTypes = {
	match: PropTypes.object
};
