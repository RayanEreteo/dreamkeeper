"use client"

import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, Heading, Input, Link, Text } from "@chakra-ui/react";
import loginPageBG from "../../public/loginPageBG.jpg";
import axios from "axios";
import { FormEvent, useState } from "react";

function Register() {

  const [loading, setLoading] = useState(false)
  const [requestData, setrequestData] = useState<any>()

  async function registerUser(e: FormEvent){
    e.preventDefault()
    setLoading(true)

    try {
      const res = await axios.post("http://localhost:8000/newUser", {email: "rayabf5@gmail.com", password: "Nekosama123"}, {headers: {"Content-Type": "application/json"}})
      const data = res.data
      setrequestData(data)
    } catch (error) {
      setrequestData({success: false, message: "A problem occured, please try again."})
    }finally{
      setLoading(false)
    }
  }

  return (
    <main className="login">
      <Flex
        rel="preload"
        flexDirection={"column"}
        backgroundImage={`url(${loginPageBG.src})`}
        backgroundSize={"cover"}
        minH={"100vh"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Heading>REGISTER</Heading>
        <Box className="login-container" p={6} borderRadius={10}>
          <form onSubmit={registerUser}>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input type="email" isRequired/>
            </FormControl>
            <br />
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password" minLength={8} isRequired/>
            </FormControl>
            <br />
            <Button type="submit" colorScheme="facebook" w={"100%"} isLoading={loading}>Register</Button>
          </form>
          <Text textAlign={"center"} mt={6}>Already have an account ? <Link textDecoration={"underline"} href="/login">Login</Link></Text>
          <Text textAlign={"center"} mt={3} color={requestData?.success ? "green" : "red"}>{requestData?.message}</Text>
        </Box>
      </Flex>
    </main>
  );
}

export default Register;