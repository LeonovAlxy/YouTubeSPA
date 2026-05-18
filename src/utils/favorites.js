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

export const deleteFavorite = (index) => {
  const currentUser = localStorage.getItem('currentUser');
  const favorites = getFavorites();
  favorites.splice(index, 1);
  return localStorage.setItem(currentUser, JSON.stringify(favorites));
};

export const editFavorite = (item, index) => {
  const currentUser = localStorage.getItem('currentUser');
  const favorites = getFavorites();
  favorites.splice(index, 1, item);
  return localStorage.setItem(currentUser, JSON.stringify(favorites));
};
