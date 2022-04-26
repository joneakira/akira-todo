import {
  Alert,
  AlertIcon,
  Button,
  Text,
  Box,
  Flex,
} from '@chakra-ui/react';
import { useState } from 'react';
import { colors } from '../helpers/colors';
import { useTranslation } from 'react-i18next';

//components
import PublicAppBar from '../components/publicAppBar/publicAppBar';


const Home = () => {
  const {t, i18n} = useTranslation();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const changeHandler = (event) => {
    setEmail(event.target.value);
  }

  const submitHandler = () => {

  }

  return(
    <Flex
    direction={'column'}
    alignItems={'center'}
    minH='100vh'
    bg={colors.bg100()} >
      <PublicAppBar />
      <Box maxW='md' mx='auto' >
        <Text
        color={'#000'}
        fontWeight={'500'}
        textAlign='center' m='6'>
          {t('text')}
        </Text>
        {error && (
          <Alert status='error' mb='6'>
            <AlertIcon />
            <Text textAlign='center'>{error}</Text>
          </Alert>
        )}
      </Box>
    </Flex>
  )
}

export default Home