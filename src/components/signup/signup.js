import { Box, Flex } from "@chakra-ui/react"
import AkiraPlate from "../akiraPlate/akiraPlate"

const SignUp = (type, setType) => {
  return(
    <Flex
    width={'100%'}
    height={'100%'}
    justifyContent={'space-between'}
    padding={'15px'}>
      <AkiraPlate />
    </Flex>
  )
}

export default SignUp