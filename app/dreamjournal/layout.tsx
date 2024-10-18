import { Metadata } from "next";
import Dreamjournal from "./page";

export const metadata: Metadata = {
    title: "Dream Keeper | Dream journal",
    description: "Access your dream journal.",
};


async function DreamjournalLayout() {
  return (
    <Dreamjournal></Dreamjournal>
  ) 
}

export default DreamjournalLayout