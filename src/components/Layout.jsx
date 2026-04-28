import { Container, Box, Paper } from '@mui/material';
import Input from './Search/Input';
import Videos from './Search/Videos/Videos';
import viteLogo from '../assets/vite.svg';

function Layout() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#f5f5f5',
        background: 'linear-gradient(135deg, #b2dff7 0%, #fafafa 100%)',
      }}
    >
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Шапка с заголовком (опционально) */}
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Box
            component="img"
            src={viteLogo} // можно добавить логотип
            sx={{ height: 48, mb: 2 }}
            alt="MYTube"
          />
        </Box>

        {/* Компонент поиска */}
        <Paper
          elevation={0}
          sx={{
            p: 1,
            borderRadius: 4,
            bgcolor: 'white',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            maxWidth: '700px',
            justifySelf: 'center',
          }}
        >
          <Input />
        </Paper>

        <Videos />
      </Container>
    </Box>
  );
}

export default Layout;
