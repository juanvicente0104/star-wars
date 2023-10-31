import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"

const CharacterCard = (props) => {

    const { store, actions } = useContext(Context)

    //console.log(props) //Props is an object that contains all the props in the home.js
    const { character } = props
    const { name, gender, hair_color, eye_color } = character.properties// props.character//

    return (

        <div className="my-card">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="w-100" alt="..." />
            <div className="p-3">
                <h3>{name}</h3>

                <p>Gender: {gender}</p>
                <p>Hair-color: {hair_color} </p>
                <p>Eye-color: {eye_color}</p>

            </div>
            <div className="d-flex justify-content-between p-3">
                <Link to={`/character/${character._id}`} className="btn btn-primary"> Learn more</Link>
                <button className="btn btn-warning" onClick={() => actions.addFavorite(name)}> <i class="far fa-heart"></i> </button>
            </div>
        </div>

    )
}

export default CharacterCard