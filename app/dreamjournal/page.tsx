"use client"

import { Flex, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import ButtonMain from '../components/ButtonMain'
import { useRouter } from 'next/navigation'
import { userInfoContext } from '../components/ContextProvider'

function Dreamjournal() {
  const router = useRouter()
  const user = useContext(userInfoContext)

  function logout() {
    localStorage.removeItem("username");
    user.setUsername("")
    router.push("/login")
  }

  return (
    <main className='dream-journal'>
      <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"} minH={"100vh"}>
        <Text color={"black"}>{localStorage.getItem("username")}</Text>
        <ButtonMain isLink={false} color='linkedin' execute={logout}>Logout</ButtonMain>
      </Flex>
    </main>
  )
}

export default Dreamjournal