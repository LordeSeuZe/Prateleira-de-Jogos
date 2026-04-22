import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./CardGame.scss"; // importa seu arquivo SCSS

function CardGame({ image, title }) {
  const [favorite, setFavorite] = useState(false);
  const [rating, setRating] = useState(0);

  return (
    <div className="card-game">

      <div className="favorite" onClick={() => setFavorite(!favorite)}>
        <FaStar color={favorite ? "gray" : "gold"} size={24} />
      </div>

      <img src={image} alt={title} className="image" />

      <h3 className="title">{title}</h3>

      <button className="button">Analisar</button>

      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            size={20}
            color={i < rating ? "gold" : "lightgray"}
            onClick={() => setRating(i + 1)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
    </div>
  );
}

export default CardGame;
