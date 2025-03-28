import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    githubLink: "https://github.com/AliH1/employee-management-system",
    title: "Employee Mangement System",
    description:
      "A employee mangement web application built using MERN stack, allowing users to manage their employees and their data",
    getImageSrc: () => require("../images/p1.png"),
  },
  {
    githubLink: "https://github.com/AliH1/react-schedule-planner",
    title: "Schedule Planner",
    description:
      "A react Scheduler Planner application with interactable big calendar that allows users to manage their schedules",
    getImageSrc: () => require("../images/p2.png"),
  },
  {
    githubLink: "https://github.com/AliH1/little-lemon-restaurant-website",
    title: "Restaurant Website",
    description:
      "A Restaurant website built using React, allowing users to view the menu and make reservations",
    getImageSrc: () => require("../images/p3.png"),
  },
  {
    githubLink: "https://github.com/AliH1/stock-info-website",
    title: "Stock Information Website",
    description:
      "A simple stock information website built using React, allowing users to search and view stock information",
    getImageSrc: () => require("../images/p4.png"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            githubLink={project.githubLink}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
