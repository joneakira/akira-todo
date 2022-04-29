import { useState } from 'react'
import { 
  Flex,
  FormControl,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Text,
  keyframes,
  Box
} from "@chakra-ui/react"

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

import AkiraPlate from "../akiraPlate/akiraPlate"

import OpenEye from '../../assets/icons/open_eye.svg'
import ClosedEye from '../../assets/icons/closed_eye.svg'



const SignIn = ({type, setType}) => {
  const {t, i18n} = useTranslation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [secure, setSecure] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const handleSignIn = () => {
    setIsLoading(!isLoading)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const animationKeyframes = keyframes`
    0% {opacity: 0.3;}
    100% {opacity: 1;}
  `

  const animation = `${animationKeyframes} 2s`;

  return(
    <Flex
    width={'100%'}
    height={'100%'}
    direction={'column'}
    justifyContent={'flex-start'}
    alignItems={'center'}
    padding={'15px'}>
      <AkiraPlate />
      <FormControl alignSelf={'center'}>
      <Flex
      as={motion.div}
      animation={animation}
      width={'100%'}
      alignItems={'center'}
      direction={'column'}
      mb={'30px'}>
        <Flex width={'70%'} alignItems={'flex-start'}>
          <Text fontWeight={'600'} color={'bg.200'} fontSize={'1rem'}>
            {t('email')}
          </Text>
        </Flex>
        <Input
        value={email}
        onChange={(e) => handleEmailChange(e)}
        textColor={'bg.200'}
        px={'5px'}
        variant={'unstyled'}
        borderRadius={0}
        borderWidth={'4px'}
        borderColor={'bg.200'}
        width={'70%'}
        height={'50px'} />
      </Flex>
      <Flex
      as={motion.div}
      animation={animation}
      width={'100%'}
      alignItems={'center'}
      direction={'column'}>
        <Flex
        width={'70%'}
        alignItems={'flex-start'}>
          <Text
          fontWeight={'600'}
          fontSize={'1rem'}
          color={'bg.200'}>
            {t('password')}
          </Text>
        </Flex>
        
        <InputGroup
        variant={'unstyled'}
        borderRadius={0}
        borderWidth={'4px'}
        borderColor={'bg.200'}
        width={'70%'}
        height={'50px'} >
          <Input
          textColor={'bg.200'}
          value={password}
          onChange={(e) => handlePasswordChange(e)}
          pl={'5px'}
          pr={'5px'}
          type={secure ? 'password' : 'text'} />
            <InputRightElement width={'4.5rem'}>
              <Button
              left={'5px'}
              top={'-3px'}
              size='sm'
              width={'3rem'}
              height={'3rem'}
              variant={'ghost'} 
              onClick={() => setSecure(!secure)}>
                {
                  secure ?
                  <OpenEye /> :
                  <ClosedEye />
                }
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
        <Flex
        mt={'25px'}
        mb={'15px'}
        alignItems={'center'}
        justifyContent={'center'} >
          <Button
          onClick={handleSignIn}
          backgroundColor={'bg.100'}
          colorScheme={'blackAlpha'}
          isLoading={isLoading}
          alignItems={'center'}
          justifyContent={'center'}
          borderRadius={0}
          borderWidth={'4px'}
          borderColor={'bg.200'}
          height={'50px'}
          width={'70%'}
          _hover={{
            bg: '#FFFFF9'
          }} >
            <Text
            fontWeight={'600'}
            fontSize={'1.3rem'}
            color={'bg.200'}>
              {t('login')}
            </Text>
          </Button>
        </Flex>

        <Flex
        my={'25px'}
        alignItems={'center'}
        justifyContent={'center'} >
          <Button
          width={{base: '200px', 'lg': '240px'}}
          height={{base: '45px'}}
          onClick={() => setType('signup')}
          _hover={{
            borderBottomColor: '#23244D',
            borderWidth: '4px'
          }}
          variant={'link'}
          borderRadius={0} >
            <Text
            fontWeight={'600'}
            fontSize={'1.3rem'}
            color={'bg.200'} >
              {t('signup')}
            </Text>
          </Button>
        </Flex>    
      </FormControl>
    </Flex>
  )
}

export default SignIn