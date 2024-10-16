"use client";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import loginPageBG from "../../public/loginPageBG.webp";
import axios from "axios";
import { FormEvent, useRef, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { userInfoContext } from "../components/ContextProvider";

function Login() {
  const user = useContext(userInfoContext)
  const router = useRouter()

  const [loading, setLoading] = useState(false);
  const [requestData, setrequestData] = useState<any>();

  const emailValue = useRef<HTMLInputElement>(null)
  const passwordValue = useRef<HTMLInputElement>(null)

  async function loginUser(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:8000/loginUser",
        { email: emailValue.current!.value, password: passwordValue.current!.value },
        { headers: { "Content-Type": "application/json" }, withCredentials: true },
      );
      const data = res.data;
      setrequestData(data);

      user.setUsername(data.username)
      localStorage.setItem("username", data.username)

      router.push("/")
    }catch (error: any) {
      const message: string = error.code === "ERR_NETWORK" ? "Unable to reach server, please try again later." : error.response?.data?.message
      setrequestData({
        success: false,
        message: message,
      });
    } finally {
      setLoading(false);
    }
  }

  //! ajout des etoiles

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
        <Heading>LOGIN</Heading>
        <Box className="login-container" p={6} borderRadius={10}>
          <form onSubmit={loginUser}>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input ref={emailValue} minLength={2} maxLength={40} type="email" required />
            </FormControl>
            <br />
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input ref={passwordValue} type="password" minLength={8} maxLength={40} required />
            </FormControl>
            <br />
            <Button
              type="submit"
              colorScheme="facebook"
              w={"100%"}
              isLoading={loading}
            >
              Login
            </Button>
          </form>
          <Text textAlign={"center"} mt={6}>
            No account ?{" "}
            <Link textDecoration={"underline"} href="/register">
              Register
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

export default Login;
