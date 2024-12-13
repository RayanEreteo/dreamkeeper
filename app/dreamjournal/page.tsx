"use client"

import { Box, Button, Checkbox, Flex, FormControl, HStack, Input, Text, Textarea, VStack } from '@chakra-ui/react'
import React, { FormEvent, useContext, useState } from 'react'
import { useRouter } from 'next/navigation'
import { userInfoContext } from '../components/ContextProvider'
import axios from 'axios'
import DreamEntry from '../components/DreamEntry'
import { CiLogout } from 'react-icons/ci'

function Dreamjournal() {
  const router = useRouter()
  const user = useContext(userInfoContext)

  const [loading, setLoading] = useState(false);

  function addDreamEntry(e: FormEvent){
    e.preventDefault()
  }

  async function logout() {
    setLoading(true)
    localStorage.removeItem("username");
    user.setUsername("")

    try {
      const res = await axios.post("http://localhost:8000/logout", {}, { withCredentials: true })
      if (res.status === 200) {
        router.push("/login")
      }
    } catch {
      setLoading(false)
    }
  }

  return (
    <main id='dream-journal'>
      <Flex color={"white"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} minH={"100vh"}>
        <Text color={"black"} mb={6} fontWeight={"bolder"}>{"Authenticated as : " + localStorage.getItem("username")}</Text>
        <Button onClick={logout} isLoading={loading} mb={6} bg={"red"}><CiLogout color='white' size={25} /></Button>
        <Text color={"#2274A3"} fontSize={"40px"} textDecoration={"underline"}>Dream journal</Text>
        <HStack id='content' spacing={"10rem"} alignItems={"flex-start"} ml={"10vw"} mt={"5rem"}>
          <Box id='form-section'>
            <form action="" onSubmit={addDreamEntry}>
              <VStack id='dream-form-container' color={"black"} mb={"6"} spacing={"10"}>
                <FormControl isRequired>
                  <Input placeholder='Dream name...' minLength={5} maxLength={30} />
                </FormControl>
                <FormControl isRequired>
                  <Textarea placeholder='Dream content...' resize={"none"} h={"200px"} minLength={5} maxLength={200} />
                </FormControl>
                <Checkbox textColor={"black"}>Lucidity ?</Checkbox>
                <Button colorScheme='linkedin' w={"200px"} type='submit'>Add</Button>
              </VStack>
            </form>
          </Box>
          <Box id='dream-section'>
            <DreamEntry dreamName="Lucid dream" dreamDesc="This was a lucid dream !" isLucid={true}></DreamEntry>
            <DreamEntry dreamName="A non lucid dream" dreamDesc="This was unfortunately a non lucid dream" isLucid={false}></DreamEntry>
          </Box>
        </HStack>
      </Flex>
    </main>
  )
}

export default Dreamjournal