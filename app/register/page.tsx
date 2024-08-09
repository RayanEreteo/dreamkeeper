"use client"

import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, Heading, Input, Link, Text } from "@chakra-ui/react";
import loginPageBG from "../../public/loginPageBG.jpg";

function Register() {

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
          <form>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <br />
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password" minLength={8}/>
            </FormControl>
            <br />
            <Button type="submit" colorScheme="facebook" w={"100%"}>Login</Button>
          </form>
          <Text textAlign={"center"} mt={6}>Already have an account ? <Link textDecoration={"underline"} href="/login">Login</Link></Text>
        </Box>
      </Flex>
    </main>
  );
}

export default Register;