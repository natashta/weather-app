# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Weather App

## Тестовые данные для входа

- Email: `eve.holt@reqres.in`
- Пароль: `cityslicka`

## Настройка переменных окружения

Создайте файл `.env` в корне проекта и добавьте ваш API-ключ OpenWeatherMap:

```
VITE_WEATHER_API_KEY=your_openweathermap_api_key_here
```

Зарегистрировать ключ можно на https://openweathermap.org/api
