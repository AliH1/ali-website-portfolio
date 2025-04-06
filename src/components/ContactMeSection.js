import React from "react";
import {
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";


const LandingSection = () => {
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      h="100px"
    >
      <VStack w="1024px" p={32} spacing={8}alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Text fontSize="xl" color="white">
          Email: ahassan0213@gmail.com
        </Text>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
