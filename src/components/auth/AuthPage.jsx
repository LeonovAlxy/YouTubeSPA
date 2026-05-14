import { useState } from 'react';
import { Box, Button, Container, Typography, Paper } from '@mui/material';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Registration from './Registration';
import Login from './Login';

const AuthPage = () => {
  const [RegComp, setRegComp] = useState(null);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #b2dff7 0%, #fafafa 100%)',
        p: 2,
      }}
    >
      <Container maxWidth="sm">
        {!RegComp ? (
          <Paper
            elevation={3}
            sx={{
              p: 5,
              borderRadius: 4,
              textAlign: 'center',
              bgcolor: 'white',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                mb: 2,
              }}
            >
              <YouTubeIcon sx={{ fontSize: 36, color: '#FF0000' }} />
              <Typography variant="h5" sx={{ fontWeight: 500 }}>
                YouTube SPA
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <Button
                variant="contained"
                startIcon={<AppRegistrationIcon />}
                onClick={() => setRegComp(<Registration />)}
                sx={{ px: 4, py: 1.2, borderRadius: 3, textTransform: 'none' }}
              >
                Регистрация
              </Button>
              <Button
                variant="outlined"
                startIcon={<LoginIcon />}
                onClick={() => setRegComp(<Login />)}
                sx={{ px: 4, py: 1.2, borderRadius: 3, textTransform: 'none' }}
              >
                Вход
              </Button>
            </Box>
          </Paper>
        ) : (
          RegComp
        )}
      </Container>
    </Box>
  );
};

export default AuthPage;
