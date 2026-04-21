import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function CardGame({ image, title }) {
  const [favorite, setFavorite] = useState(false);
  const [rating, setRating] = useState(0);

  return (
    <>
    <div style={styles.card}>
      {/* Estrela de favorito */}
      <div style={styles.favorite} onClick={() => setFavorite(!favorite)}>
        <FaStar color={favorite ? "gold" : "gray"} size={24} />
      </div>

      {/* Imagem do jogo */}
      <img src={image} alt={title} style={styles.image} />

      {/* Título */}
      <h3>{title}</h3>

      {/* Botão de analisar */}
      <button style={styles.button}>Analisar</button>

      {/* Avaliação com estrelas */}
      <div style={styles.stars}>
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            size={20}
            color={i < rating ? "gold" : "lightgray"}
            onClick={() => setRating(i + 1)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
    </div>
    </>
  );
}



export default CardGame;