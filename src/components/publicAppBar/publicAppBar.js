import React, {useEffect} from 'react'
import { Box, Text, Button, Flex, useColorMode, Alert } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { colors } from '../../helpers/colors'
import Sun from '../../assets/icons/sun.svg'
import Moon from '../../assets/icons/half-moon.svg'


export default function PublicAppBar() {
  const {t, i18n} = useTranslation()
  const {colorMode, toggleColorMode} = useColorMode()
  
  return (
    <Flex
    top={2}
    alignSelf={'flex-start'}
    position={'absolute'}
    alignItems={'center'}
    direction={'row'}
    w={'100%'}
    height={'50px'}
    padding={'15px'}
    pt={'25px'}
    justifyContent={'space-between'} >
      <Button
      onClick={() => i18next.changeLanguage(i18next.language === 'en' ? 'pt' : 'en', (err) => {
        if (err) return console.log('something went wrong loading', err)
      }
      )}
      borderRadius={0}
      variant={'ghost'}>
        <Text
        color={colors.textA()}
        >
          {i18n.language === 'en' ? 'pt-BR' : 'en-US'}
        </Text>
      </Button>

      <Button
      width={'50px'}
      height={'45px'}
      borderRadius={0}
      onClick={toggleColorMode}
      variant={'ghost'}>
        <Flex
        justifyContent={'center'}
        alignItems={'center'}
        width={'35px'}
        height={'35px'}>
          {
            colorMode === 'dark' ?
            <Flex> 
              <Sun width='23' height='23' viewBox="0 0 35 35" />
            </Flex>
             :
            <Flex>
              <Moon width='23' height='23' viewBox="0 0 35 35" />
            </Flex>
            
          }
        </Flex>
      </Button>
      
    </Flex>
  )
}