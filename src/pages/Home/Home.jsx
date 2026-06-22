import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
  const [query, setQuery] = useState("");
  const [games, setGames] = useState([]);

  async function searchGames(query) {
    try {
      if (!query.trim()) return []; // evita busca vazia
      const response = await fetch(
        `https://api.rawg.io/api/games?key=9b83afe1d7784bdc9caecb835d3f0f8c&search=${query}`
      );
      if (!response.ok) throw new Error("Erro na API");
      const data = await response.json();
      return Array.isArray(data.results) ? data.results : [];
    } catch (error) {
      console.error("Erro na busca:", error);
      return [];
    }
  }

  return (
    <div>
      <div className="searchHome">
        <span className="titlePrincipal">Prateleira de Jogos</span>
        <div className="searchContainer">
          <input
            className="inputS"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar jogo..."
          />
          <button
            className="buttonS"
            onClick={async () => {
              const results = await searchGames(query);
              setGames(results);
            }}
          >
            Pesquisar
          </button>
        </div>
        <Link to="/favorites" className="buttonLink">
          Ver Favoritos
        </Link>
      </div>

      <div className="respContainer" style={{ display: "flex", flexWrap: "wrap" }}>
        {
          games.map((game) => (
            <div className="respGame" key={game.id}>
              {game.background_image && (
                <img src={game.background_image} alt={game.name} />
              )}
              <span>{game.name}</span>
              <Link className="linkGame" to={`/game/${game.id}`}>
                Ver mais
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Home;
