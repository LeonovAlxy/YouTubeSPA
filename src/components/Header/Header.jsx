import { Box, Button } from '@mui/material';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { NavLink } from 'react-router';

import Exit from './Exit';
function Header() {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'white',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        borderRadius: '0 0 16px 16px',
      }}
    >
      <Box
        sx={{
          gap: 2,
          p: 2,
          ml: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <VideoLibraryIcon sx={{ color: '#1976d2', fontSize: 60 }} />
        <NavLink to="/">
          {({ isActive }) => <Button variant={isActive ? 'contained' : 'text'}>Поиск</Button>}
        </NavLink>

        <NavLink to="/favorites">
          {({ isActive }) => <Button variant={isActive ? 'contained' : 'text'}>Избранное</Button>}
        </NavLink>
      </Box>
      <Exit />
    </Box>
  );
}
export default Header;
