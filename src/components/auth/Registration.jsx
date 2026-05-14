import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Paper,
  TextField,
  Button,
  CircularProgress,
  Typography,
  Box,
  MenuItem,
} from '@mui/material';

const Registration = () => {
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
      const regResponse = await axios.post(import.meta.env.VITE_API_URL_REGISTER, {
        ...data,
        age: Number(data.age),
      });

      if (regResponse.status === 200) {
        let loginResponse;
        try {
          loginResponse = await axios.post(import.meta.env.VITE_API_URL_LOGIN, {
            email: data.email,
            password: data.password,
          });
        } catch (loginError) {
          alert('Логин не удался: ' + (loginError.response?.data?.message || loginError.message));
          setLoading(false);
          return;
        } finally {
          setLoading(false);
        }

        if (loginResponse.status === 200) {
          localStorage.setItem('token', loginResponse.data.token);
          localStorage.setItem('currentUser', data.email);
          setLoading(false);
          alert('Успешно вошли в систему');
          reset();
          navigate('/');
        }
      }
    } catch (error) {
      console.error('Ответ сервера:', error.response?.data);
      alert('Ошибка: ' + (error.response?.data?.message || error.message));
      setLoading(false);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 500, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Registration
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          label="Username"
          margin="normal"
          placeholder="Ivanov Ivan"
          error={!!errors.username}
          helperText={errors.username?.message}
          {...register('username', {
            required: 'Обязательно к заполнению',
            minLength: { value: 2, message: 'Минимум 2 символа' },
          })}
        />

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
            minLength: { value: 8, message: 'Минимальная длина 8 символов' },
            pattern: {
              value:
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+=[$${}|\\:;"'<>,.?/-]).{8,}$/,
              message:
                'Должен содержать минимум 8 символов, одну заглавную букву, маленькую, цифру и спецсимвол',
            },
          })}
        />

        <TextField
          select
          fullWidth
          label="Gender"
          margin="normal"
          error={!!errors.gender}
          helperText={errors.gender?.message}
          {...register('gender', { required: 'Обязательное поле' })}
        >
          <MenuItem value="male">male</MenuItem>
          <MenuItem value="female">female</MenuItem>
        </TextField>

        <TextField
          fullWidth
          label="Age"
          type="number"
          margin="normal"
          placeholder="18"
          error={!!errors.age}
          helperText={errors.age?.message}
          {...register('age', { required: 'Обязательно к заполнению' })}
        />

        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
          {loading ? (
            <CircularProgress />
          ) : (
            <Button type="submit" variant="contained" disabled={!isValid} fullWidth>
              Register
            </Button>
          )}
        </Box>
      </form>
    </Paper>
  );
};

export default Registration;
