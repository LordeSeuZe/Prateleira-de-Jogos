import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function GamePage() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${id}?key=9b83afe1d7784bdc9caecb835d3f0f8c`)
      .then(res => res.json())
      .then(data => setGame(data));
  }, [id]);

  const toggleFavorite = () => {
    let updated = [...favorites];
    if (updated.find(f => f.id === game.id)) {
      updated = updated.filter(f => f.id !== game.id);
    } else {
      updated.push(game);
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  if (!game) return <p>Carregando...</p>;

  return (
    <div>
      <h2>{game.name}</h2>
      <img src={game.background_image} alt={game.name} width="400"/>
      <p>Nota da comunidade: {game.rating}</p>
      {game.clip && (
        <video controls width="400">
          <source src={game.clip.clips.full} type="video/mp4"/>
        </video>
      )}
      <button onClick={toggleFavorite}>Favorito</button>
    </div>
  );
}

export default GamePage;
