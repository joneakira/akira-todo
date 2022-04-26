import { ChakraProvider } from '@chakra-ui/react';
import { I18nextProvider } from 'react-i18next';
import theme from '../theme/theme';
import i18n from '../translation/i18n';
import '../styles/globals.css'

//translator
import '../translation/i18n'

function MyApp({ Component, pageProps }) {

  return(
    <ChakraProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nextProvider>
    </ChakraProvider>
  ) 
}

export default MyApp
