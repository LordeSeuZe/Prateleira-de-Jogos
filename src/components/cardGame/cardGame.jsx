import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "../FavoriteIcon/FavoriteIcon";
import Button from "../Button/Button";
import { addFavorite, removeFavorite, isFavorited } from "../../services/favorites";
import Alert from "../Alert/Alert";
import "./CardGame.scss";

function CardGame({ id, image, title }) {
  const [favorite, setFavorite] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setFavorite(isFavorited(id));
  }, [id]);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    if (favorite) {
      removeFavorite(id);
      setMessage("Removido dos favoritos!");
    } else {
      addFavorite({ id, title, image });
      setMessage("Adicionado aos favoritos!");
    }
    setFavorite(!favorite);
    setTimeout(() => setMessage(""), 2000);
  };

  const goToGamePage = () => navigate(`/game/${id}`);

  return (
    <div className="card-game">
      {message && <Alert type="success">{message}</Alert>}
      <FavoriteIcon active={favorite} onClick={toggleFavorite} />
      <img src={image} alt={title} className="image" onClick={goToGamePage} />
      <h3 className="title" onClick={goToGamePage}>{title}</h3>
      <Button onClick={goToGamePage}>Analisar</Button>
    </div>
  );
}

export default CardGame;
