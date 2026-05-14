import { Box } from '@mui/material';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { getFavorites } from '../../utils/favorites';
import Header from './Header';

function FavVid() {
  const favorites = getFavorites();

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
        {favorites.map((item) => (
          <Box
            key={item}
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
              m: 1,
              p: 1,
              bgcolor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            {item}
          </Box>
        ))}
      </Box>
    </>
  );
}

export default FavVid;
