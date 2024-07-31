import {
    Box,
    Flex,
    Text,
    Stack,
    Heading,
    Button,
  } from '@chakra-ui/react'
import TextLink from './TextLink'
import ButtonMain from './ButtonMain'

function NavBar() {
  return (
    <nav className='navbar'>
        <Flex bg={"#2274a3"} w={"100vw"} h={"100px"} alignItems={"center"} justifyContent={"space-around"}>
            <Box className='title-container'>
                <Heading color={"white"}>Dream Keeper</Heading>
            </Box>
            <Stack className='navbar-links-container' mr={{base: "0rem", lg: "10rem"}} direction={"row"} spacing={6}>
                <TextLink href='/' >Home</TextLink>
                <TextLink href='/' >Methods</TextLink>
                <TextLink href='/' >Articles</TextLink>
                <TextLink href='/' >F.A.Q & Contact</TextLink>
            </Stack>
            <ButtonMain color="linkedin" isLink={true} toWhere='/login'>Login</ButtonMain>
        </Flex>
    </nav>
  )
}

export default NavBar