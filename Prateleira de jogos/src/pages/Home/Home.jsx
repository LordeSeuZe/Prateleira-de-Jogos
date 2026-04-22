import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";


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
            <div className="searchHome">
                <span className="title">Prateleira de Jogos</span>
                <div className="searchContainer">
                    <input
                    className="inputS"
                        type="text"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder="Buscar jogo..."
                    />
                    <button className="buttonS" onClick={searchGames}>Pesquisar</button>
                </div>
                <Link to="/favorites" className="buttonLink">Ver Favoritos</Link>

            </div>
            <div className="respContainer" style={{ display: "flex", flexWrap: "wrap" }}>
                {games.map(game => (
                    <div className="respGame" key={game.id} >
                        <img src={game.background_image} alt={game.name} />
                        <span>{game.name}</span>
                        <Link className="linkGame" to={`/game/${game.id}`}>Ver mais</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
