import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: ahassan0213@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/AliH1",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/ali-hassan-388494164/",
  },
];

const Header = () => {

  const headerRef = useRef(null); 

  useEffect(() => { 
    let prevPosition = window.scrollY; 
  
    const handleScroll = () => { 
      const currentPosition = window.scrollY; 
      const header = headerRef.current; 
      if (!header) { 
        return; 
      } 
      if (currentPosition > prevPosition ) { 
        header.style.transform = "translateY(-200px)"; 
      } else { 
        header.style.transform = "translateY(0px)"; 
      } 
      prevPosition = currentPosition; 
    } 

    window.addEventListener('scroll', handleScroll) 
  
    return () => { 
      window.removeEventListener('scroll', handleScroll) 
    } 
  }, []); 

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {socials.map(social => {
              return (<a href={social.url} key={social.url} style={{margin: 20}}>
                <FontAwesomeIcon icon={social.icon} size="2x"/>
              </a>)
            })}
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#projects" onClick={handleClick("projects")}>Projects</a>
              <a href="#contact-me" onClick={handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
