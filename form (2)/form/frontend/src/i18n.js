// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          signup: 'Signup',
          login: 'Login',
          name: 'Name',
          email: 'Email',
          password: 'Password',
          logout: 'Logout',
          // add more translations here...
        },
      },
      es: {
        translation: {
          signup: 'Registrarse',
          login: 'Iniciar sesión',
          name: 'Nombre',
          email: 'Correo electrónico',
          password: 'Contraseña',
          logout: 'Cerrar sesión',
          // add more translations here...
        },
      },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
  });

export default i18n;
