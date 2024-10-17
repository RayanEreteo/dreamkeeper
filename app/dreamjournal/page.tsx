"use client"

import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import ButtonMain from '../components/ButtonMain'

function Dreamjournal() {

  function logout() {
    console.log("Logout");
    
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