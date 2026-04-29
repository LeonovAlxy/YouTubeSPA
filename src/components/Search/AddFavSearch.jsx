import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Tooltip from '@mui/material/Tooltip';

function AddFavSearch({ searchQuery }) {
  const handleSave = () => {
    if (!searchQuery?.trim()) {
      alert('Введите поисковый запрос');
      return;
    }
    console.log('Сохранить запрос:', searchQuery);
    // сохранить в локал по юзеру логин
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
