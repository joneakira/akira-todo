import { Flex, Text, keyframes } from "@chakra-ui/react"
import { motion } from "framer-motion"

const AkiraPlate = () => {
  const animationKeyFrames = keyframes`
    0% {opacity: 0;}
    100% {opacity: 1;} 
  `

  const animation = `${animationKeyFrames} 2s`;
  return(
    <Flex
    my={'40px'}
    as={motion.div}
    width={'75%'}
    height={'90px'}
    fontSize={'5rem'}
    justifyContent={'center'}
    alignItems={'center'}
    backgroundColor={'bg.200'}
    animation={animation} >
      <Text color={'bg.100'} >
        AKIRA
      </Text>
    </Flex>
  )
}

export default AkiraPlate