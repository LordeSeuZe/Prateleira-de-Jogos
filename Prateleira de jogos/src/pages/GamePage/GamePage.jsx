import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './GamePage.scss';

function GamePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [game, setGame] = useState(null);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${id}?key=9b83afe1d7784bdc9caecb835d3f0f8c`)
      .then(res => res.json())
      .then(data => setGame(data));
  }, [id]);

  const isFavorited = favorites.some(f => f.id === game?.id);

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


  function homePage() {
    navigate("/");
  }

  if (!game) return <p>Carregando...</p>;

  return (
    <div className="game-page">
      <div>
        <span>{game.name}</span>
        <img src={game.background_image} alt={game.name} width="400" />
        <p className="description">{game.description_raw}</p>
      </div>
      <p><strong>Nota da comunidade:</strong> {game.rating}</p>
      <p><strong>Data de lançamento:</strong> {game.released}</p>
      <p><strong>Gêneros:</strong> {game.genres.map(g => g.name).join(", ")}</p>
      <p><strong>Plataformas:</strong> {game.platforms.map(p => p.platform.name).join(", ")}</p>
      <p><strong>Desenvolvedores:</strong> {game.developers?.map(d => d.name).join(", ")}</p>
      <p><strong>Publicadoras:</strong> {game.publishers?.map(p => p.name).join(", ")}</p>


      <div>
        <button onClick={toggleFavorite}>
          {isFavorited ? "Favoritado" : "Favoritar"}
        </button>
        <button onClick={homePage}>Voltar</button>
      </div>
    </div>
  );
}

export default GamePage;
