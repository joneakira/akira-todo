import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "text": "Welcome to React and react-i18next",
      "email": "E-MAIl",
      "password": "PASSWORD",
      "login": "LOGIN",
      "signup": "SIGNUP"
    }
  },
  pt: {
    translation: {
      "text": "arroz",
      "email": "E-MAIL",
      "password": "SENHA",
      "login": "ENTRAR",
      "signup": "CADASTRAR-SE"
    }
  }
};


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false,
    }
  });


export default i18n;