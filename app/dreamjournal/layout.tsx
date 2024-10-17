import { Metadata } from "next";
import Dreamjournal from "./page";
import axios from "axios";

export const metadata: Metadata = {
    title: "Dream Keeper | Dream journal",
    description: "Access your dream journal.",
  };


function DreamjournalLayout() {

  async function checkJwt(){
    const res = await axios.post("http://localhost:8000/checkToken")
    
  }

  return (
    <Dreamjournal></Dreamjournal>
  )
}

export default DreamjournalLayout