import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SaveQueryModal from './SaveQueryModal';
import { addFavorite } from '../../utils/favorites';

function AddFavSearch({ searchQuery }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (!searchQuery?.trim()) {
      alert('Введите поисковый запрос');
      return;
    }
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleSave = (data) => {
    addFavorite(data);
    alert('Запрос сохранён');
    handleClose();
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        disabled={!searchQuery?.trim()}
        size="small"
        edge="end"
        sx={{ color: '#1976d2' }}
      >
        <FavoriteBorderIcon />
      </IconButton>

      <SaveQueryModal
        open={open}
        onClose={handleClose}
        searchQuery={searchQuery}
        onSave={handleSave}
      />
    </>
  );
}

export default AddFavSearch;
