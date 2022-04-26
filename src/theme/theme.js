import { extendTheme } from "@chakra-ui/react";
import '@fontsource/chakra-petch'

const theme = extendTheme({
  colors: {
    red: {
      100: '#FF0050'
    },
    green: {
      100: '#00FF99'
    },
    shadow: {
      100: '#23244D',
      200: '#161630'
    },
    bg: {
      100: '#FFFFE9',
      200: '#23244D'
    }
  },
  fonts: {
    heading: 'Chakra Petch',
    body: 'Chakra Petch',
    footer: 'Chakra Petch'
  }
})

export default theme