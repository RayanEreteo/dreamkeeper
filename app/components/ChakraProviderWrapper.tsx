import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

function ChakraProviderWrapper({children}: any) {
  return (
    <ChakraProvider>{children}</ChakraProvider>
  )
}

export default ChakraProviderWrapper