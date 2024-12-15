"use client"

import { Box, Button, Checkbox, Flex, FormControl, HStack, Input, Text, Textarea, VStack } from '@chakra-ui/react'
import React, { FormEvent, useContext, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { userInfoContext } from '../components/ContextProvider'
import axios from 'axios'
import DreamEntry from '../components/DreamEntry'
import { CiLogout } from 'react-icons/ci'

function Dreamjournal() {
  const router = useRouter()
  const user = useContext(userInfoContext)

  const dreamNameValue = useRef<HTMLInputElement>(null)
  const dreamContentValue = useRef<HTMLTextAreaElement>(null)
  const [isLucid, setIsLucid] = useState<boolean>(false)

  const [loading, setLoading] = useState(false);
  const [addDreamRequestData, setaddDreamRequestData] = useState<any>();
  const [dreamRequestData, setdreamRequestData] = useState<any>();



  async function getUserDream() {
    try {
      const res = await axios.get("http://localhost:8000/getDream", { headers: { "Content-Type": "application/json" }, withCredentials: true })

      const data = res.data
      setdreamRequestData(data)
    } catch (error: any) {
      const message: string = error.code === "ERR_NETWORK" ? "Unable to reach server, please try again later." : error.response?.data?.message
      setdreamRequestData({ success: false, message: message })
    }
  }

  useEffect(() => {
    getUserDream()
  }, [])

  async function addDreamEntry(e: FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await axios.post("http://localhost:8000/addDream",
        { dreamName: dreamNameValue.current!.value, dreamContent: dreamContentValue.current!.value, isLucid: isLucid },
        { headers: { "Content-Type": "application/json" }, withCredentials: true })

      const data = res.data

      dreamNameValue.current!.value = ""
      dreamContentValue.current!.value = ""

      setaddDreamRequestData(data)
    } catch (error: any) {
      const message: string = error.code === "ERR_NETWORK" ? "Unable to reach server, please try again later." : error.response?.data?.message
      setaddDreamRequestData({ success: false, message: message })
    } finally {
      setLoading(false)
    }
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
                  <Input placeholder='Dream name...' minLength={5} maxLength={30} ref={dreamNameValue} />
                </FormControl>
                <FormControl isRequired>
                  <Textarea placeholder='Dream content...' resize={"none"} h={"200px"} minLength={5} maxLength={500} ref={dreamContentValue} />
                </FormControl>
                <Checkbox textColor={"black"} onChange={(e) => setIsLucid(e.target.checked)}>Lucidity ?</Checkbox>
                <Text
                  textAlign={"center"}
                  mt={3}
                  color={addDreamRequestData?.success ? "green" : "red"}
                >
                  {addDreamRequestData?.message}
                </Text>
                <Button colorScheme='linkedin' w={"200px"} type='submit' isLoading={loading}>Add</Button>
              </VStack>
            </form>
          </Box>
          <Box id='dream-section'>
            {dreamRequestData?.data?.map((dream: any, index: number) => (
              <DreamEntry key={index} dreamName={dream.dreamName} dreamDesc={dream.dreamContent} isLucid={dream.isLucid} />
            ))}
          </Box>
        </HStack>
      </Flex>
    </main>
  )
}

export default Dreamjournal