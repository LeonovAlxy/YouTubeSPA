import { IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { editFavorite, getFavorites } from '../../../../utils/favorites';
import EditModal from './EditModal';

const EditButton = ({ item, index, setFavorites }) => {
  const [open, setOpen] = useState(false);
  const { loading } = useSelector((store) => store.videos);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleSave = (data) => {
    editFavorite(data, index);
    setFavorites(getFavorites());
    alert('Запрос изменен');
    handleClose();
  };

  return (
    <>
      <Tooltip title={'Редактировать'}>
        <IconButton onClick={handleClick} disabled={loading} color="default" size="small">
          <EditIcon />
        </IconButton>
      </Tooltip>

      <EditModal open={open} onClose={handleClose} item={item} onSave={handleSave} />
    </>
  );
};

export default EditButton;
