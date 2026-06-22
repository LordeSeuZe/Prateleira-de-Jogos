export function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

export function addFavorite(game) {
  const favorites = getFavorites();
  const updated = [...favorites, game];
  localStorage.setItem("favorites", JSON.stringify(updated));
  return updated;
}

export function removeFavorite(id) {
  const favorites = getFavorites();
  const updated = favorites.filter(f => f.id !== id);
  localStorage.setItem("favorites", JSON.stringify(updated));
  return updated;
}

export function isFavorited(id) {
  const favorites = getFavorites();
  return favorites.some(f => f.id === id);
}
