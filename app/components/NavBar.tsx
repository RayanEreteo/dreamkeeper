import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Heading,
    Link,
  } from '@chakra-ui/react'  
import TextLink from './TextLink'

function NavBar() {
  return (
    <nav className='navbar'>
        <Flex bg={"#52bfff"} w={"100vw"} h={"100px"} alignItems={"center"} justifyContent={"space-around"}>
            <Box className='title-container'>
                <Heading color={"white"}>Dream Keeper</Heading>
            </Box>
            <Stack direction={"row"} spacing={6}>
                <TextLink href='/' >Home</TextLink>
                <TextLink href='/' >Methods</TextLink>
                <TextLink href='/' >Articles</TextLink>
                <TextLink href='/' >F.A.Q & Contact</TextLink>
            </Stack>
        </Flex>
    </nav>
  )
}

export default NavBar