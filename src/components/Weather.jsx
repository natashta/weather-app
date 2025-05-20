import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, CircularProgress, Alert } from '@mui/material';

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric&lang=ru`);
        const data = await res.json();
        if (res.ok) {
          setWeather(data);
        } else {
          setError(data.message || 'Ошибка получения погоды');
        }
      } catch (err) {
        setError('Ошибка сети');
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#e3f2fd' }}>
      <Paper elevation={3} sx={{ p: 4, minWidth: 320, textAlign: 'center' }}>
        <Typography variant="h5" mb={2}>Погода в Москве</Typography>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : weather ? (
          <>
            <Typography variant="h6" mb={1}>{weather.weather[0].description}</Typography>
            <Typography variant="body1">Температура: <b>{Math.round(weather.main.temp)}°C</b></Typography>
            <Typography variant="body1">Скорость ветра: <b>{weather.wind.speed} м/с</b></Typography>
          </>
        ) : null}
      </Paper>
    </Box>
  );
} 