import { Metadata } from "next";
import Login from "./page"
import Register from "./page";

export const metadata: Metadata = {
    title: "Dream Keeper | Register",
    description: "Create a Dream Keeper account.",
  };

function LoginLayout() {
  return (
    <Register></Register>
  )
}

export default LoginLayout