import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import avatar from "../images/avatar.jpg";

const greeting = "Hello, I am Ali!";
const bio1 = "A software Developer specialised in";
const bio2 = " building web applications in React, Angular,";
const bio3 = " Javascript, Typescript, Nodejs, Java, and python"

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar size="xl" src={avatar}/>
      <Heading size="sm">{greeting}</Heading>
    </VStack>

    <VStack padding={10} spacing={5}>
      <Heading size="2xl">{bio1} </Heading>
      <Heading size="2xl">{bio2}</Heading>
      <Heading size="2xl">{bio3}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
