export const getFavorites = () => {
  const currentUser = localStorage.getItem('currentUser');
  if (!currentUser) return [];
  return JSON.parse(localStorage.getItem(currentUser) || '[]');
};

export const addFavorite = (favSearch) => {
  const currentUser = localStorage.getItem('currentUser');
  if (!currentUser) return localStorage.setItem(currentUser, JSON.stringify([favSearch]));
  const favorites = getFavorites();
  favorites.push(favSearch);
  return localStorage.setItem(currentUser, JSON.stringify(favorites));
};
