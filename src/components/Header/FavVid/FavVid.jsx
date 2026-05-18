import { Box, Typography } from '@mui/material';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { getFavorites } from '../../../utils/favorites';
import Header from '../Header';
import SearchButton from './buttons/SearchButton';
import DeleteButton from './buttons/DeleteButton';
import EditButton from './buttons/EditButton';
import { useState } from 'react';

function FavVid() {
  const [favorites, setFavorites] = useState(getFavorites());

  return (
    <>
      <Header />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        {favorites.map((item, index) => (
          <Box
            key={`${item.query}_${item.name}_${item.maxResults}`}
            sx={{
              width: '100%',
              maxWidth: 600,
              borderRadius: 3,
              overflow: 'hidden',
              transition: '0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 24px rgb(25, 118, 210)',
              },
              display: 'flex',
              justifyContent: 'space-between',
              m: 1,
              p: 1,
              bgcolor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Typography sx={{ ml: 2, my: 'auto' }}>
              {' '}
              {item.query} ({item.name})
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <SearchButton item={item} />
              <EditButton item={item} index={index} setFavorites={setFavorites} />
              <DeleteButton index={index} setFavorites={setFavorites} />
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default FavVid;
