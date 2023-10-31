import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetCard = (props) => {

    const { store, actions } = useContext(Context)

    const { name, population, terrain } = props.planet.properties
    const { planet } = props
    return (

        <div className="my-card">
            <img src={`https://starwars-visualguide.com/assets/img/${planet.uid == 1 ? "placeholder.jpg" : `planets/${planet.uid}.jpg`}`} alt="..." className="w-100" />
            <div className="p-3">
                <h3>{name}</h3>

                <p>Population: {population}</p>
                <p>Terrains: {terrain}</p>

            </div>
            <div className="d-flex justify-content-between p-3">
                <Link to={`/planet/${planet._id}`} className="btn btn-primary"> Learn more</Link>
                <button className="btn btn-warning">  <i class="far fa-heart" onClick={() => actions.addFavorite(name)}></i> </button>
            </div>
        </div >

    )
};

export default PlanetCard