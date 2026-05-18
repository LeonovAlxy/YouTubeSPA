import { IconButton, CircularProgress, Tooltip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { fetchVideos, setSearchText } from '../../../../redux/videosSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const SearchButton = ({ item }) => {
  const { loading } = useSelector((store) => store.videos);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      fetchVideos({
        query: item.query,
        maxResults: item.maxResults,
        order: item.sortBy || 'relevance',
      }),
    );
    dispatch(setSearchText(item.query));
    navigate('/');
  };
  return (
    <Tooltip title={'Поиск'}>
      <IconButton
        variant="text"
        onClick={handleClick}
        disabled={loading}
        color="primary"
        size="small"
      >
        <SearchIcon sx={{ mr: 0.5 }} />
      </IconButton>
    </Tooltip>
  );
};

export default SearchButton;
