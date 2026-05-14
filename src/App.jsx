import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router';
import AuthPage from './components/auth/AuthPage';
import PrivateRoute from './Routes/PrivateRoute';
import { Box } from '@mui/material';
import FavVid from './components/header/FavVid';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {' '}
        <Box
          sx={{
            minHeight: '100vh',
            bgcolor: '#f5f5f5',
            background: 'linear-gradient(135deg, #b2dff7 0%, #fafafa 100%)',
          }}
        >
          <Routes>
            <Route path="/auth" element={<AuthPage />} />
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Layout />} />
              <Route path="/favorites" element={<FavVid />} />
            </Route>
          </Routes>
        </Box>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
