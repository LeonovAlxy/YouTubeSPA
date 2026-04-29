import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { fetchVideos } from '../../redux/videosSlice';
import { setSearchText } from '../../redux/videosSlice';
import { InputAdornment } from '@mui/material';
import AddFavSearch from './AddFavSearch';

function Input() {
  const [inputSearch, setSearch] = useState('React');
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.videos);

  const handleSearchChange = (e) => setSearch(e.target.value);
  const handleSearchClick = () => {
    if (inputSearch.trim()) {
      dispatch(fetchVideos(inputSearch));
      dispatch(setSearchText(inputSearch));
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'center',
        mb: 2,
        mt: 2,
      }}
    >
      <TextField
        variant="outlined"
        size="medium"
        placeholder="Введите запрос..."
        value={inputSearch}
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress}
        disabled={loading}
        sx={{
          width: '400px',
          '& .MuiOutlinedInput-root': {
            borderRadius: 3,
            '&:hover fieldset': {
              borderColor: '#1976d2',
            },
          },
        }}
      />
      <AddFavSearch searchQuery={inputSearch} />
      <Button
        variant="contained"
        onClick={handleSearchClick}
        disabled={loading || !inputSearch.trim()}
        sx={{
          borderRadius: 3,
          px: 4,
          py: 1.5,
          textTransform: 'none',
          fontSize: '1rem',
        }}
      >
        {loading ? 'Поиск...' : 'Искать'}
      </Button>
    </Box>
  );
}

export default Input;
