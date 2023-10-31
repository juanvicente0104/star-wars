import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./../store/appContext"

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	const { favorites } = store
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<div class="dropdown dropdown-end">
					<button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites {store.favorites.length}
					</button>
					<ul class="dropdown-menu dropdown-menu-end">
						{favorites.map((item, index) => {
							return (
								<li key={item} ><a class="dropdown-item" href="#"></a> {item} <i onClick={() => actions.deleteFavorite(item)} class="fas fa-trash"></i> </li>
							)
						})}
						{/* <li><a class="dropdown-item" href="#">Action</a></li>
						<li><a class="dropdown-item" href="# ">Another action</a></li>
						<li><a class="dropdown-item" href="#">Something else here</a></li> */}
					</ul>
				</div>
				{/* <button className="btn btn-primary">Check the Context in action</button> */}
			</div>
		</nav>
	);
};
