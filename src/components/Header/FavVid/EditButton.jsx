import { IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { fetchVideos, setSearchText } from '../../../redux/videosSlice';
import { useDispatch, useSelector } from 'react-redux';

const EditButton = () => {
  const { loading } = useSelector((store) => store.videos);
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log('edit');
  };
  return (
    <Tooltip title={'Редактировать'}>
      <IconButton onClick={handleClick} disabled={loading} color="default" size="small">
        <EditIcon />
      </IconButton>
    </Tooltip>
  );
};

export default EditButton;
