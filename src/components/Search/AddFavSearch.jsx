import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { addFavorite } from '../../utils/favorites';

function AddFavSearch({ searchQuery }) {
  const handleSave = () => {
    if (!searchQuery?.trim()) {
      alert('Введите запрос');
      return;
    }
    addFavorite(searchQuery);
  };

  return (
    <IconButton
      onClick={handleSave}
      disabled={!searchQuery?.trim()}
      size="small"
      edge="end"
      sx={{ color: '#1976d2' }}
    >
      {' '}
      <FavoriteBorderIcon />
    </IconButton>
  );
}

export default AddFavSearch;
