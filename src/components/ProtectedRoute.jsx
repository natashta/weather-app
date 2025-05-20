import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  // Проверяем наличие токена в localStorage
  const token = localStorage.getItem('token');
  // Если токен есть — показываем защищённую страницу, иначе редирект на /login
  return token ? children : <Navigate to="/login" replace />;
} 