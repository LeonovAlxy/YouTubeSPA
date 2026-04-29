import { Container, Box, Paper } from '@mui/material';
import Input from './Search/Input';
import Videos from './Search/Videos/Videos';
import Header from '../components/Header/Header';

function Layout() {
  // 1. добавить вторизацию
  // 2. настоить фав вид
  // 3. кнопка добавления фав
  // 4. кнопкавыхода
  // 5. маршруты настроить
  // 6. не забывть вывести серч в хедер возле фавида. посмореть как сделать его дефолтным

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#f5f5f5',
        background: 'linear-gradient(135deg, #b2dff7 0%, #fafafa 100%)',
      }}
    >
      <Header />
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Paper
            elevation={0}
            sx={{
              p: 2,
              borderRadius: 4,
              bgcolor: 'white',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              maxWidth: '700px',
              width: '100%',
            }}
          >
            <Input />
          </Paper>
        </Box>

        <Videos />
      </Container>
    </Box>
  );
}

export default Layout;
