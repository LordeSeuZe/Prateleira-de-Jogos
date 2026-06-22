import { FaStar } from "react-icons/fa";
import React from "react";
import "./FavoriteIcon.scss";

function FavoriteIcon({ active, onClick }) {
  return (
    <div className={`favorite ${active ? "active" : ""}`} onClick={onClick}>
      <FaStar size={24} />
    </div>
  );
}

export default FavoriteIcon;
