import { Flex, Text, keyframes } from "@chakra-ui/react"
import { motion } from "framer-motion"

const AkiraPlate = () => {
  const animationKeyframes = keyframes`
    0% {transform: scale(0.8); opacity: 0;}
    100% {transform: scale(1); opacity: 1;} 
  `

  const animation = `${animationKeyframes} 1.5s`;
  return(
    <Flex
    mt={'40px'}
    mb={'20px'}
    as={motion.div}
    width={'75%'}
    height={'90px'}
    fontSize={'5rem'}
    justifyContent={'center'}
    alignItems={'center'}
    backgroundColor={'bg.200'}
    animation={animation}
    minWidth={'190px'} >
      <Text
      fontSize={{base: '3rem', 'md': '4rem', 'lg': '5.5rem'}}
      color={'bg.100'} >
        AKIRA
      </Text>
    </Flex>
  )
}

export default AkiraPlate