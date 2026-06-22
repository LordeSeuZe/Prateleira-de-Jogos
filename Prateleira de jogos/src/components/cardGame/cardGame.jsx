import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./CardGame.scss";

function CardGame({ id, image, title }) {
  const [favorite, setFavorite] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavorited = storedFavorites.some((f) => f.id === id);
    setFavorite(isFavorited);
  }, [id]);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let newFavorites;

    if (favorite) {
      newFavorites = storedFavorites.filter((f) => f.id !== id);
    } else {
      newFavorites = [...storedFavorites, { id, title, image }];
    }

    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setFavorite(!favorite);
  };

  const goToGamePage = () => {
    navigate(`/game/${id}`);
  };

  return (
    <div className="card-game">
      <div 
        className={`favorite ${favorite ? "active" : ""}`} 
        onClick={toggleFavorite}
      >
        <FaStar size={24} />
      </div>
      <img src={image} alt={title} className="image" onClick={goToGamePage} />
      <h3 className="title" onClick={goToGamePage}>{title}</h3>
      <button className="button" onClick={goToGamePage}>
        Analisar
      </button>
    </div>
  );
}

export default CardGame;