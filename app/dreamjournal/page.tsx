"use client"

import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { useRouter } from 'next/navigation'
import { userInfoContext } from '../components/ContextProvider'
import axios from 'axios'
import DreamEntry from '../components/DreamEntry'
import { CiLogout } from 'react-icons/ci'

function Dreamjournal() {
  const router = useRouter()
  const user = useContext(userInfoContext)

  const [loading, setLoading] = useState(false);
  
  async function logout() {
    setLoading(true)
    localStorage.removeItem("username");
    user.setUsername("")

    try {
      const res = await axios.post("http://localhost:8000/logout", {}, {withCredentials: true})
      if(res.status === 200){
        router.push("/login")
      }
    } finally{
      setLoading(false)
    }
  }

  return (
    <main className='dream-journal'>
      <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"} minH={"100vh"}>
        <Text color={"black"}>{"Authenticated as : " + localStorage.getItem("username")}</Text>
        <Button onClick={logout} isLoading={loading} mb={6} bg={"black"}><CiLogout size={25}/></Button>
        <Text color={"#2274A3"} fontSize={"40px"}>Dream journal</Text>
        <Box id='dream-container'>
          <DreamEntry dreamName="Lucid dream" dreamDesc="This was a lucid dream !" isLucid={true}></DreamEntry>
          <DreamEntry dreamName="A non lucid dream" dreamDesc="This was unfortunately a non lucid dream" isLucid={false}></DreamEntry>
        </Box>
      </Flex>
    </main>
  )
}

export default Dreamjournal