import React from 'react';
import './Card.css';
import {Link} from "react-router-dom";

function Card({id, src, title, description, price}) {
  return (
    <Link to = {`/card/${id}`} className="card" > 
        <img src={src} alt="" />
        <div className="card__info">
            <h2>{title}</h2>
            <h3>{description}</h3>
            <h4>{price}</h4>
        </div>
    </Link>
  );
}

export default Card