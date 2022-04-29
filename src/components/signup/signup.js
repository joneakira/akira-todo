import { useState } from 'react'
import {
  Flex,
  FormControl,
  keyframes,
  Input,
  Text,
  Button,
  InputGroup,
  InputRightElement,
  Box,
  FormErrorMessage
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

import BackIcon from '../../assets/icons/back.svg'
import OpenEye from '../../assets/icons/open_eye.svg'
import ClosedEye from '../../assets/icons/closed_eye.svg'

const SignUp = ({type, setType}) => {
  const {t, i18n} = useTranslation()

  const [securePass, setSecurePass] = useState(true)
  const [secureConfirm, setSecureConfirm] = useState(true)

  const ValidationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, t('minUsernameChar'))
      .max(24, t('maxUsernameChar'))
      .required(t('requiredField')),
    email: Yup.string()
      .email(t('invalidEmail'))
      .required(t('requiredField')),
    password: Yup.string()
      .min(8, t('minPassword'))
      .max(16, t('maxPassword'))
      .matches(/^[a-zA-Z0-9@*#]{8,16}$/, t('invalidPassword'))
      .required(t('requiredField')),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], t('passwordsMustMatch'))
  })

  const animationKeyframes = keyframes`
    0% {opacity: 0.3;}
    100% {opacity: 1;}
  `

  const animationA = `${animationKeyframes} 2s`;
  const animationB = `${animationKeyframes} 4s`;
  const animationC = `${animationKeyframes} 6s`;
  const animationD = `${animationKeyframes} 8s`;

  const handleSignUp = () => {

  }

  return(
    <Flex
    width={'100%'}
    height={'100%'}
    direction={'column'}
    justifyContent={'flex-start'}
    alignItems={'center'}
    padding={'15px'}>
      <Flex
      width={'100%'}
      justifyContent={'flex-start'}>
        <Button
        variant={'ghost'}
        backgroundColor={'bg.100'}
        onClick={() => setType('signin')}
        _focus={{
          backgroundColor: '#FFFFE9'
        }}
        _hover={{
          backgroundColor: '#FFFFE9',
          borderWidth: '4px',

        }}
        width={'55px'}
        height={'50px'}
        alignItems={'center'}
        justifyContent={'center'}
        py={'15px'}>
          <Box
          width={'65%'}
          height={'75%'}
          backgroundColor={'bg.200'}
          position={'absolute'} />
          <Flex
          position={'absolute'}
          elevation={3}
          _hover={{
            opacity: 0.8
          }} >
            
            <BackIcon />
          </Flex>
        </Button>
        
      </Flex>

      <FormControl alignSelf={'center'}>
        <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          passwordConfirmation: '',
        }}
        valitadionSchema={ValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values)
            setSubmitting(false);
          }, 400);
        }}
        >
          {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
          }) => (
            <Form>
              <Flex direction={'column'}>
                <Flex
                pt={'20px'}
                as={motion.div}
                animation={animationA}
                width={'100%'}
                alignItems={'center'}
                direction={'column'}
                mb={'10px'}>
                  <Flex width={'70%'} alignItems={'flex-start'}>
                    <Text fontWeight={'600'} color={'bg.200'} fontSize={'1rem'}>
                      {t('username')}
                    </Text>
                  </Flex>
                  <Input
                  id='username'
                  name='username'
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  textColor={'bg.200'}
                  px={'5px'}
                  variant={'unstyled'}
                  borderRadius={0}
                  borderWidth={'4px'}
                  borderColor={'bg.200'}
                  width={'70%'}
                  height={{base: '40px', 'md': '50px'}} />
                  {
                    errors.username && touched.username ?
                    <Flex width={'100%'} height={'50px'} name='username' >
                      {errors.username}
                    </Flex>
                    : null
                  }
                </Flex>

                <Flex
                pt={'10px'}
                as={motion.div}
                animation={animationB}
                width={'100%'}
                alignItems={'center'}
                direction={'column'}
                mb={'10px'}>
                  <Flex width={'70%'} alignItems={'flex-start'}>
                    <Text fontWeight={'600'} color={'bg.200'} fontSize={'1rem'}>
                      {t('email')}
                    </Text>
                  </Flex>
                  <Input
                  id='email'
                  name='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type={'email'}
                  value={values.email}
                  textColor={'bg.200'}
                  px={'5px'}
                  variant={'unstyled'}
                  borderRadius={0}
                  borderWidth={'4px'}
                  borderColor={'bg.200'}
                  width={'70%'}
                  height={{base: '40px', 'md': '50px'}} />
                  <Text fontSize={'1rem'}>
                    {
                      errors.email && touched.email ?
                      <Text>
                        erou
                      </Text>
                      : null
                    }
                  </Text>
                  
                </Flex>

                <Flex
                pt={'10px'}
                as={motion.div}
                animation={animationC}
                width={'100%'}
                alignItems={'center'}
                direction={'column'}
                mb={'10px'}>
                  <Flex width={'70%'} alignItems={'flex-start'}>
                    <Text fontWeight={'600'} color={'bg.200'} fontSize={'1rem'}>
                      {t('password')}
                    </Text>
                  </Flex>
                  <InputGroup
                  variant={'unstyled'}
                  borderRadius={0}
                  borderWidth={'4px'}
                  borderColor={'bg.200'}
                  width={'70%'}
                  height={{base: '40px', 'md': '50px'}} >
                    <Input
                    id='password'
                    name='password'
                    textColor={'bg.200'}
                    value={values.password}
                    onChange={handleChange}
                    px={'5px'}
                    type={securePass ? 'password' : 'text'} />
                      <InputRightElement width={{base: '3.5rem', 'md': '4.5'}}>
                        <Button
                        left={'5px'}
                        top={'-3px'}
                        size='sm'
                        width={'3rem'}
                        height={{base: '2.5rem', 'md': '3rem'}}
                        variant={'ghost'} 
                        onClick={() => setSecurePass(!securePass)}>
                          {
                            securePass ?
                            <OpenEye /> :
                            <ClosedEye />
                          }
                        </Button>
                      </InputRightElement>
                  </InputGroup>
                </Flex>

                <Flex
                pt={'10px'}
                as={motion.div}
                animation={animationD}
                width={'100%'}
                alignItems={'center'}
                direction={'column'}
                mb={'10px'}>
                  <Flex width={'70%'} alignItems={'flex-start'}>
                    <Text fontWeight={'600'} color={'bg.200'} fontSize={'1rem'}>
                      {t('confirmPassword')}
                    </Text>
                  </Flex>
                  <InputGroup
                  variant={'unstyled'}
                  borderRadius={0}
                  borderWidth={'4px'}
                  borderColor={'bg.200'}
                  width={'70%'}
                  height={{base: '40px', 'md': '50px'}} >
                    <Input
                    id='passwordConfirmation'
                    name='passwordConfirmation'
                    textColor={'bg.200'}
                    value={values.passwordConfirmation}
                    onChange={handleChange}
                    px={'5px'}
                    type={secureConfirm ? 'password' : 'text'} />
                      <InputRightElement width={{base: '3.5rem', 'md': '4.5'}}>
                        <Button
                        left={'5px'}
                        top={'-3px'}
                        size='sm'
                        width={'3rem'}
                        height={{base: '2.5rem', 'md': '3rem'}}
                        variant={'ghost'} 
                        onClick={() => setSecureConfirm(!secureConfirm)}>
                          {
                            secureConfirm ?
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
                  type='submit'
                  onClick={handleSubmit}
                  backgroundColor={'bg.100'}
                  colorScheme={'blackAlpha'}
                  isLoading={isSubmitting}
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
                      {t('signup')}
                    </Text>
                  </Button>
                </Flex>
              </Flex>
            </Form>
          )}
        </Formik>
      </FormControl>
      
    </Flex>
  )
}

export default SignUp