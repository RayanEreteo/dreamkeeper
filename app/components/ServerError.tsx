import { Box, Center, Flex, Heading, VStack, Text } from "@chakra-ui/react"
import Image from "next/image"

function ServerError() {
  return (
    <VStack justifyContent={"center"} spacing={6} h={"100vh"}>
        <Image src={"/server.png"} alt="server error" width={200} height={200}></Image>
        <Heading textAlign={"center"} fontSize={"40px"} fontWeight={"bolder"}>Oops... an error occurred on my server</Heading>
        <Text>Please refresh the page or try again later.</Text>
    </VStack>
  )
}

export default ServerError