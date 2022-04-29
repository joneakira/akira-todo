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
      "confirmPassword": "CONFIRM YOUR PASSWORD",
      "minUsernameChar": "Your username is too short :(",
      "maxUsernameChar": "Your username is too long :(",
      "invalidEmail": "Invalid e-mail.",
      "minPassword": "Your password must have at least 8 characters.",
      "maxPassword": "Your password can't have more than 16 characters",
      "invalidPassword": "Password requires at one lower case letter, one upper case letter, one digit, 8-16 length, no spaces and one symbol(# @ *).",
      "passwordsMustMatch": "Passwords must match.",
      "requiredField": "This filed is required.",
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
      "confirmPassword": "CONFIRME SUA SENHA",
      "minUsernameChar": "Nome de usuário muito curto :(",
      "maxUsernameChar": "Seu nome de usuário está muito longo :(",
      "invalidEmail": "E-mail inválido",
      "minPassword": "Sua senha deve conter pelo menos 8 caracteres",
      "maxPassword": "Sua deve ter menos de 16 caracteres",
      "invalidPassword": "Sua senha não pode conter espaços e deve conter pelo menos uma letra minúscula, uma maiúscula, um dígito, entre 8 e 16 caracteres e um símbolo(@ # *).",
      "passwordsMustMatch": "A senhas devem ser iguais",
      "requiredField": "Este campo é obrigatório"
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