import { Metadata } from "next";
import Dreamjournal from "./page";
import NeedAuth from "../components/NeedAuth";

export const metadata: Metadata = {
  title: "Dream Keeper | Dream journal",
  description: "Access your dream journal.",
};

async function DreamjournalLayout() {
  return (
    <NeedAuth>
      <Dreamjournal></Dreamjournal>
    </NeedAuth>
  )
}

export default DreamjournalLayout;