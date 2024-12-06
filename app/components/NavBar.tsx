"use client"

import {
  Box,
  Flex,
  Text,
  Stack,
  Heading,
  Button,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import TextLink from "./TextLink";
import ButtonMain from "./ButtonMain";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { userInfoContext } from "./ContextProvider";
import { useContext, useEffect, useState } from "react";

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toggleMenu = () => (isOpen ? onClose() : onOpen());
  
  // Initialize with localStorage value directly
  const { username } = useContext(userInfoContext);

  if (username != undefined) {
    return (
      <nav className="navbar">
        <Flex
          zIndex={10}
          bg={"#2274a3"}
          w={"100vw"}
          h={"100px"}
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          <Box className="title-container">
            <Heading color={"white"}>Dream Keeper</Heading>
          </Box>
          <IconButton
            colorScheme="linkedin"
            display={{ base: "block", md: "none" }}
            aria-label="Toggle Navigation"
            onClick={toggleMenu}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          ></IconButton>
          <Stack
            className="navbar-links-container"
            direction={{ base: "column", md: "row" }}
            spacing={6}
            mr={"5rem"}
            display={{ base: isOpen ? "flex" : "none", md: "flex" }}
            alignItems={{ base: "center", md: "center" }}
            position={{ base: "absolute", md: "static" }}
            top={{ base: "100px", md: "auto" }}
            bg={{ base: "#2274a3", md: "transparent" }}
            width={{ base: "100%", md: "auto" }}
          >
            <TextLink href="/">Home</TextLink>
            <TextLink href="/">Methods</TextLink>
            <TextLink href="/">Articles</TextLink>
            <TextLink href="/">F.A.Q & Contact</TextLink>
            <TextLink href="/login" display={{base: "block", lg: "none"}}>Login</TextLink>
          </Stack>
          <ButtonMain
            color="linkedin"
            isLink={true}
            toWhere={username ? "/dreamjournal" : "/login"}
            display={{ base: "none", md: "block" }}
          >
            {username ? "Dream Journal" : "Login"}
          </ButtonMain>
        </Flex>
      </nav>
    ); 
  }
}

export default NavBar;
