import {
  Alert,
  AlertIcon,
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Box,
} from '@chakra-ui/react';
import { useState } from 'react';

const Home = () => {
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
    <Box minH='100vh' py='12' px={{base: '4', lg: '8'}} bg='gray.50' >
      <Box maxW='md' mx='auto' >
        <Heading textAlign='center' m='6'>
          Welcome to Todo App
        </Heading>
        {error && (
          <Alert status='error' mb='6'>
            <AlertIcon />
            <Text textAlign='center'>{error}</Text>
          </Alert>
        )}
        <Box 
          py='8'
          px={{base: '4', md: '10'}}
          shadow='base'
          rounded={{sm: 'lg'}}
          bg='white' >
            {isSubmitted ? (
              <Heading size='md' textAlign='center' color='gray.50'>
                Please check {email} for login link
              </Heading>
            ) : (
              <chakra.form onSubmit={submitHandler} >

              </chakra.form>
            )}

        </Box>
      </Box>
    </Box>
  )
}

export default Home