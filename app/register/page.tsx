"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Link,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import loginPageBG from "../../public/loginPageBG.webp";
import axios from "axios";
import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";

function Register() {
  const [loading, setLoading] = useState(false);
  const [requestData, setrequestData] = useState<any>();

  const router = useRouter()

  const emailValue = useRef<HTMLInputElement>(null)
  const passwordValue = useRef<HTMLInputElement>(null)
  const [dreamMemory, setdreamMemory] = useState("none")

  async function registerUser(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:8000/newUser",
        { email: emailValue.current!.value, password: passwordValue.current!.value, dreamMemory:  dreamMemory},
        { headers: { "Content-Type": "application/json" } }
      );
      const data = res.data;
      setrequestData(data);

      router.push("/login?validation=Account+created+you+can+now+login.")
    } catch (error: any) {
        const message: string = error.code === "ERR_NETWORK" ? "Unable to reach server, please try again later." : error.response?.data?.message
        setrequestData({
          success: false,
            message: message,
        });
        setLoading(false);
    }
  }

  return (
    <main className="login">
      <Flex
        color={"white"}
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
            <FormControl isRequired>
              <FormLabel>Email address</FormLabel>
              <Input maxLength={40} minLength={2} type="email" ref={emailValue}/>
              <FormHelperText color={"white"}>
                Only for login purpose.
              </FormHelperText>
            </FormControl>
            <br />
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" minLength={8} maxLength={40} ref={passwordValue} />
            </FormControl>
            <br />
            <FormControl>
              <FormLabel>How many dreams can you remember a night ?</FormLabel>
              <RadioGroup defaultValue="none" onChange={setdreamMemory}>
                <Stack direction={"row"} spacing={6} justifyContent={"center"}>
                  <Radio value="none">None</Radio>
                  <Radio value="1">1</Radio>
                  <Radio value="2">2</Radio>
                  <Radio value="3">3</Radio>
                  <Radio value="4+">4 or more</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
            <br />
            <Button
              type="submit"
              colorScheme="facebook"
              w={"100%"}
              isLoading={loading}
            >
              Register
            </Button>
          </form>
          <Text textAlign={"center"} mt={6}>
            Already have an account ?{" "}
            <Link textDecoration={"underline"} href="/login">
              Login
            </Link>
          </Text>
          <Text
            textAlign={"center"}
            mt={3}
            color={requestData?.success ? "green" : "red"}
          >
            {requestData?.message}
          </Text>
        </Box>
      </Flex>
    </main>
  );
}

export default Register;
