import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleCharacter = props => {
	const { store, actions } = useContext(Context);
	let params = useParams();
	const [detail, setDetail] = useState({});

	//Define a functions to look for details in the store!
	const findDetail = () => {
		const result = store.characters.find((person) => person._id == params.theid)
		setDetail(result)
	}

	useEffect(() => {
		findDetail()
	}, [store.characters])

	return (
		<div className="jumbotron">
			<div className="container text-center">
				<div className="row">
					<div className="col-6">
						<img src={`https://starwars-visualguide.com/assets/img/characters/${detail?.uid}.jpg`} className="w-50 align-middle" alt="..." />
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
							Birth Year
						</h4>
						<h4 class="col-2">
							Gender
						</h4>
						<h4 class="col-2">
							Height
						</h4>
						<h4 class="col-2">
							Skin Color
						</h4>
						<h4 class="col-2">
							Eye Color
						</h4>
					</div>

					<div class="row">

						<div class="col-2">
							{detail?.properties?.name}
						</div>
						<div class="col-2">
							{detail?.properties?.birth_year}
						</div>
						<div class="col-2">
							{detail?.properties?.gender}
						</div>
						<div class="col-2">
							{detail?.properties?.height}
						</div>
						<div class="col-2">
							{detail?.properties?.skin_color}
						</div>
						<div class="col-2">
							{detail?.properties?.eye_color}
						</div>
					</div>

				</div>
			</div>

			<Link to="/">
				<span className="btn btn-primary btn-lg my-4" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

SingleCharacter.propTypes = {
	match: PropTypes.object
};
