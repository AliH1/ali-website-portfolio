import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import avatar from "../images/avatar.jpg";

const greeting = "Hello, I am Ali!";
const bio1 = "This is a small website I worked on";
const bio2 = "to showcase some computer science side projects";
const bio3 = "that I have worked on in my spare time"

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
