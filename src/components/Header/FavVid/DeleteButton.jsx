import { IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { fetchVideos, setSearchText } from '../../../redux/videosSlice';
import { useDispatch, useSelector } from 'react-redux';

const DeleteButton = () => {
  const { loading } = useSelector((store) => store.videos);
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log('delete');
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
