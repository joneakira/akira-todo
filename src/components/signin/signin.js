import { useState, useEffect } from 'react'
import { 
  Flex,
  FormControl,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Text
} from "@chakra-ui/react"
import AkiraPlate from "../akiraPlate/akiraPlate"
import { useTranslation } from 'react-i18next'

import OpenEye from '../../assets/icons/open_eye.svg'
import ClosedEye from '../../assets/icons/closed_eye.svg'

const SignIn = (type, setType) => {
  const {t, i18n} = useTranslation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [secure, setSecure] = useState(true)

 

  const handleChangeText = (event, f) => {
    f(event.target.value)
  }
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
          px={'5px'}
          variant={'unstyled'}
          borderRadius={0}
          borderWidth={'4px'}
          borderColor={'bg.200'}
          width={'70%'}
          height={'50px'}
          type={'text'} />
      </Flex>
      <Flex
      width={'100%'}
      alignItems={'center'}
      direction={'column'}>
        <Flex width={'70%'} alignItems={'flex-start'}>
          <Text fontWeight={'600'} fontSize={'1rem'} color={'bg.200'}>
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
      </FormControl>
    </Flex>
  )
}

export default SignIn