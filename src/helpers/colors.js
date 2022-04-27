import { useColorModeValue } from "@chakra-ui/react";

const bg100 = () => useColorModeValue('bg.100', 'bg.200')
const textA = () => useColorModeValue('bg.200', 'bg.100')
const shadowA = () => useColorModeValue('shadow.100', 'shadow.200')
  
export const colors = {
  bg100,
  shadowA,
  textA
}
