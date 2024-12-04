import { Metadata } from "next";
import Login from "./page"

export const metadata: Metadata = {
    title: "Dream Keeper | Login",
    description: "Login to your Dream Keeper account.",
  };

function LoginLayout() {
  return (
    <Login></Login>
  )
}

export default LoginLayout