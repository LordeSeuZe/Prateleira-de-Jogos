import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFavorites, addFavorite, removeFavorite, isFavorited } from "../../services/favorites";
import Loader from "../../components/Loader/Loader";
import Alert from "../../components/Alert/Alert";
import './GamePage.scss';

function GamePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [game, setGame] = useState(null);
  const [favorites, setFavorites] = useState(getFavorites());

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${id}?key=9b83afe1d7784bdc9caecb835d3f0f8c`)
      .then(res => res.json())
      .then(data => setGame(data));
  }, [id]);

  function homePage() {
    navigate("/");
  }

  const [message, setMessage] = useState("");

  const toggleFavorite = () => {
    let updated;
    if (isFavorited(game.id)) {
      updated = removeFavorite(game.id);
      setMessage("Removido dos favoritos!");
    } else {
      updated = addFavorite(game);
      setMessage("Adicionado aos favoritos!");
    }
    setFavorites(updated);
    setTimeout(() => setMessage(""), 2000);
  };

  if (!game) return <Loader />;

  return (
    <div className="game-page">
      {message && <Alert type="success">{message}</Alert>}
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
          {isFavorited(game.id) ? "Favoritado" : "Favoritar"}
        </button>
        <button onClick={homePage}>Voltar</button>
      </div>
    </div>
  );
}

export default GamePage;
