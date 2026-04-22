import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [query, setQuery] = useState("");
    const [games, setGames] = useState([]);

    const searchGames = () => {
        fetch(`https://api.rawg.io/api/games?key=9b83afe1d7784bdc9caecb835d3f0f8c&search=${query}`)
            .then(res => res.json())
            .then(data => setGames(data.results));
        if (data.results.length > 0) {
            navigate(`/game/${data.results[0].id}`);
        }
    };

    return (
        <div>
            <h1>Prateleira de Jogos</h1>
            <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Buscar jogo..."
            />
            <button onClick={searchGames}>Pesquisar</button>

            <Link to="/favorites">Ver Favoritos</Link>

            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {games.map(game => (
                    <div key={game.id} style={{ margin: "10px" }}>
                        <img src={game.background_image} alt={game.name} width="200" />
                        <h3>{game.name}</h3>
                        <Link to={`/game/${game.id}`}>Ver mais</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
