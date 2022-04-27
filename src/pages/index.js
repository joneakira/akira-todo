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
import AkiraPlate from '../components/akiraPlate/akiraPlate';
import SignIn from '../components/signin/signin';
import SignUp from '../components/signup/signup';


const Home = () => {
  const {t, i18n} = useTranslation()
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState(null)
  const [type, setType] = useState('signin')

  const changeHandler = (event) => {
    setEmail(event.target.value);
  }

  const submitHandler = () => {

  }

  return(
    <Flex
    justifyContent={'center'}
    direction={'column'}
    alignItems={'center'}
    minH='100vh'
    minW='100vw'
    bg={colors.bg100()} >
      <PublicAppBar />
      <Flex
      justifyContent={'center'}
      alignItems={'center'} >
        <Box
        backgroundColor={colors.shadowA()}
        width={'45vw'}
        height={'70vh'} >
          <Box
          justifyContent={'center'}
          alignItems={'center'}
          position={'relative'}
          right={5}
          bottom={5}
          borderWidth={'5px'}
          borderColor={colors.shadowA()}
          backgroundColor={'bg.100'}
          width={'100%'}
          height={'100%'} >
            
            {
              type === 'signin' ?
              <SignIn type={type} setType={setType} /> :
              <SignUp type={type} setType={setType} />

            }
              
          </Box> 
        </Box>
        
        {error && (
          <Alert status='error' mb='6'>
            <AlertIcon />
            <Text textAlign='center'>{error}</Text>
          </Alert>
        )}
      </Flex>
    </Flex>
  )
}

export default Home