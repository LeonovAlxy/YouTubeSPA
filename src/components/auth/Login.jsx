import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Paper, TextField, Button, CircularProgress, Typography, Box } from '@mui/material';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const loginResponse = await axios.post(import.meta.env.VITE_API_URL_LOGIN, data);
      if (loginResponse.status === 200) {
        localStorage.setItem('token', loginResponse.data.token);
        localStorage.setItem('currentUser', data.email);
        alert('Успешно вошли в систему');
        reset();
        navigate('/');
      }
    } catch (loginError) {
      alert('Логин не удался: ' + (loginError.response?.data?.message || loginError.message));
      setLoading(false);
      return;
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 450, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          label="Email"
          type="email"
          margin="normal"
          placeholder="example@gmail.com"
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register('email', { required: 'Обязательно к заполнению' })}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          placeholder="password"
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register('password', {
            required: 'Обязательно к заполнению',
            minLength: {
              value: 8,
              message: 'Минимальная длина 8 символов',
            },
            pattern: {
              value:
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+=[$${}|\\:;"'<>,.?/-]).{8,}$/,
              message:
                'Должен содержать минимум 8 символов, одну заглавную букву, маленькую, цифру и спецсимвол',
            },
          })}
        />

        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
          {loading ? (
            <CircularProgress />
          ) : (
            <Button type="submit" variant="contained" disabled={!isValid} fullWidth>
              Login
            </Button>
          )}
        </Box>
      </form>
    </Paper>
  );
};

export default Login;
