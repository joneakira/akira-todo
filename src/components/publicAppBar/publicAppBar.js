import React, {useEffect} from 'react'
import { Box, Text, Button, Flex, useColorMode, Alert } from '@chakra-ui/react'
import Sun from '../../assets/icons/sun.svg'
import Moon from '../../assets/icons/half-moon.svg'

export default function PublicAppBar() {
  const {colorMode, toggleColorMode} = useColorMode()

  
  return (
    <Flex
    alignItems={'center'}
    direction={'row'}
    w={'100%'}
    height={'50px'}
    padding={'15px'}
    pt={'25px'}
    justifyContent={'space-between'}>
      <Button>
        <Text>En-US</Text>
      </Button>

      <Button
      width={'50px'}
      height={'45px'}
      borderRadius={'45'}
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