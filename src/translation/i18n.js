import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "text": "Welcome to React and react-i18next",
      "email": "E-MAIL",
      "password": "PASSWORD",
      "login": "LOGIN",
      "signup": "SIGN UP",
      "username": "NAME",
      "confirmPassword": "CONFIRM YOUR PASSWORD"
    }
  },
  pt: {
    translation: {
      "text": "arroz",
      "email": "E-MAIL",
      "password": "SENHA",
      "login": "ENTRAR",
      "signup": "CADASTRAR-SE",
      "username": "NOME",
      "confirmPassword": "CONFIRME SUA SENHA"
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