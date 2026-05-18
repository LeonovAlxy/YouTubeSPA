import { IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteFavorite, getFavorites } from '../../../../utils/favorites';
import { useSelector } from 'react-redux';

const DeleteButton = ({ index, setFavorites }) => {
  const { loading } = useSelector((store) => store.videos);

  const handleClick = () => {
    deleteFavorite(index);
    setFavorites(getFavorites());
  };

  return (
    <Tooltip title={'Удалить'}>
      <IconButton onClick={handleClick} disabled={loading} color="default" size="small">
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};

export default DeleteButton;
