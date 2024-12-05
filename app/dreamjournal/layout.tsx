import { Metadata } from "next";
import Dreamjournal from "./page";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dream Keeper | Dream journal",
  description: "Access your dream journal.",
};

async function DreamjournalLayout() {
  const token = cookies().get("authToken");

  try {
    const res = await axios.post("http://localhost:8000/verifyToken", {
      token,
    });

    if (res.status === 200) {
      return <Dreamjournal></Dreamjournal>; 
    }
  } catch (error) {
    redirect("/login")
  }
}

export default DreamjournalLayout;