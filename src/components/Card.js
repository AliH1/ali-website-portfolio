import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, githubLink }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return(
    <VStack color="black" backgroundColor="white" borderRadius="xl" cursor="pointer">
      <Image src={imageSrc} borderRadius="xl" />
      <VStack spacing={5} padding={5} alignItems="flex-start">
        <Heading size="md">{title}</Heading>
        <Text fontSize="large" color="gray">{description}</Text>
        <HStack>
        <a href={githubLink}>click to see code  <FontAwesomeIcon icon={faArrowRight} size="1x" /> </a>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
