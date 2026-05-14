import { Button } from '@mui/material';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { useNavigate } from 'react-router';

function Exit() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    navigate('/auth');
  };

  return (
    <Button sx={{ mr: 3, pr: 2 }} onClick={handleLogout}>
      EXIT
    </Button>
  );
}

export default Exit;
