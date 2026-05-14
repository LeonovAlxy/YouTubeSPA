import { Container, Box, Paper } from '@mui/material';
import Input from './Input';
import Videos from './videos/Videos';

function SearchBody() {
  return (
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
  );
}

export default SearchBody;
