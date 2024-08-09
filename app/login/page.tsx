"use client"

import { Box, Flex, FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import loginPageBG from "../../public/loginPageBG.jpg";

function Login() {

  return (
    <main className="login">
      <Flex
        rel="preload"
        backgroundImage={`url(${loginPageBG.src})`}
        backgroundSize={"cover"}
        minH={"100vh"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Flex className="login-container" p={6} borderRadius={10}>
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
          </form>
        </Flex>
      </Flex>
    </main>
  );
}

export default Login;
