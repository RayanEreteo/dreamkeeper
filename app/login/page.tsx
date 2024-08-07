import { Box, Flex } from "@chakra-ui/react"
import loginPageBG from "../../public/loginPageBG.jpg"


function Login() {
  return (
    <main className="login">
      <Box rel="preload" backgroundImage={`url(${loginPageBG.src})`} backgroundSize={"cover"} minH={"100vh"}></Box>
    </main>
  )
}

export default Login