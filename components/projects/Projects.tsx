import { Button, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { projectContent } from "../../utils/contentData/ProjectContent";
import { ProjectProps } from "../../utils/interface/ProjectProps";
import Project from "./Project";

const Projects: React.FC<{ projectContent: ProjectProps[] }> = () => {
  return (
    <Flex
      minH="100vh"
      p={{ base: "2rem", md: "6rem" }}
      align="flex-start"
      direction="column"
      gap={{ base: "10", md: "20", lg: "20" }}
      bgColor="#B0C799"
    >
      <Text
        textAlign="center"
        justifyContent="center"
        bgColor="#192211"
        borderRadius="50"
        p={{ base: "0.5rem", md: "1rem" }}
        color="white"
        fontWeight="bold"
        fontSize={{ base: "20", md: "30", lg: "35" }}
        letterSpacing={3}
        lineHeight={{ base: "0,5", md: "1" }}
      >
        Meus Projetos
      </Text>
      <Container
        border="1px"
        borderInlineEndStyle="dashed"
        borderColor="#192211"
        borderRadius="50"
        overflowY="auto"
        minW="100%"
        h="35rem"
        px={{ base: "1rem", md: "3rem" }}
        pb="6"
        bgColor="#192211"
      >
        {projectContent.map((project) => (
          <Project
            key={project.description}
            image={project.image}
            description={project.description}
          />
        ))}
      </Container>
    </Flex>
  );
};

export default Projects;
