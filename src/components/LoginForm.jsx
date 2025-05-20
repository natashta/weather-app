import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  // Состояния для email, пароля и ошибок
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  console.log('REQRES API KEY:', import.meta.env.VITE_REQRES_API_KEY);

  // Обработка отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Отправляем POST-запрос на ReqRes.in с API-ключом
      const res = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': import.meta.env.VITE_REQRES_API_KEY // Используем API-ключ из .env
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        // При успешной авторизации сохраняем токен в localStorage
        localStorage.setItem('token', data.token);
        // Перенаправляем пользователя на страницу погоды
        navigate('/weather');
      } else {
        // Показываем ошибку, если авторизация не удалась
        setError(data.error || 'Ошибка авторизации');
      }
    } catch (err) {
      setError('Ошибка сети');
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f5f5f5' }}>
      <Paper elevation={3} sx={{ p: 4, width: 350 }}>
        <Typography variant="h5" mb={2} align="center">Вход</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Пароль"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Войти
          </Button>
          {/* Показываем ошибку, если она есть */}
          {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
        </form>
      </Paper>
    </Box>
  );
} 