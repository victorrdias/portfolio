import { Button, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { projectContent } from "../../utils/contentData/ProjectContent";
import { ProjectProps } from "../../utils/interface/ProjectProps";
import Project from "./Project";

const Projects: React.FC<{ projectContent: ProjectProps[] }> = () => {
  return (
    <Flex
      minH="75vh"
      px={{ base: "1rem", md: "4rem", lg: "6rem" }}
      py={{ base: "9rem", md: "4rem", lg: "6rem" }}
      align="flex-start"
      direction="column"
      gap={{ base: "10", md: "20", lg: "20" }}
      bgColor="#1d1d1d"
    >
      <Text
        textAlign="center"
        justifyContent="center"
        variant="transparent"
        border="1px"
        borderRadius="18"
        p={{ base: "0.5rem", md: "1rem" }}
        borderColor="white"
        color="black"
        bgColor="white"
        fontWeight="bold"
        fontSize={{ base: "20", md: "25", lg: "30" }}
        letterSpacing={2}
        lineHeight={{ base: "0,5", md: "0.5" }}
        boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      >
        Meus Projetos
      </Text>
      <Container
        border="1px"
        borderColor="black"
        borderRadius="19"
        overflowY="auto"
        minW="100%"
        h="35rem"
        px={{ base: "1rem", md: "2.3rem" }}
        pb="6"
        bgColor="white"
        //bgColor="#1d1d1d"
        boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      >
        {projectContent.map((project) => (
          <Project
            key={project.description}
            link={project.link}
            image={project.image}
            description={project.description}
          />
        ))}
      </Container>
    </Flex>
  );
};

export default Projects;
