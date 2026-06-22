import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardGame from "../../components/cardGame/CardGame";
import Button from "../../components/Button/Button";
import { getFavorites } from "../../services/favorites";

function Favorites() {
  const [favorites] = useState(getFavorites());
  const navigate = useNavigate();

  function homePage() {
    navigate("/");
  }

  return (
    <div>
      <h1>Meus Favoritos</h1>
      {favorites.length === 0 ? (
        <p>Nenhum favorito ainda.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {favorites.map(game => (
            <CardGame
              key={game.id}
              id={game.id}
              image={game.background_image}
              title={game.name}
            />
          ))}
        </div>
      )}
      <Button onClick={homePage}>Página Inicial</Button>
    </div>
  );
}

export default Favorites;
