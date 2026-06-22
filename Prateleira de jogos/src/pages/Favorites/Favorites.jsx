import { useState } from "react";
import CardGame from "../../components/cardGame/cardGame";
import { useNavigate } from "react-router-dom";

function Favorites() {
  const [favorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

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
        <div style={{display:"flex", flexWrap:"wrap"}}>
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
      <button className="button" onClick={homePage}>Página Inicial</button>
    </div>
  );
}

export default Favorites;
