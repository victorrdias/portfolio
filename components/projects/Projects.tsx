import { Button, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { projectContent } from "../../utils/contentData/ProjectContent";
import { ProjectProps } from "../../utils/interface/ProjectProps";
import Project from "./Project";

const Projects: React.FC<{ projectContent: ProjectProps[] }> = () => {
  return (
    <Flex
      minH="100vh"
      px={{ base: "1rem", md: "4rem", lg: "6rem" }}
      py={{ base: "3rem", md: "4rem", lg: "6rem" }}
      align="flex-start"
      direction="column"
      gap={{ base: "10", md: "20", lg: "20" }}
      bgColor="#B0C799"
    >
      <Text
        textAlign="center"
        justifyContent="center"
        variant="transparent"
        border="2px"
        borderRadius="18"
        p={{ base: "0.5rem", md: "1rem" }}
        borderColor="#192211"
        color="black"
        fontWeight="bold"
        fontSize={{ base: "20", md: "30", lg: "35" }}
        letterSpacing={2}
        lineHeight={{ base: "0,5", md: "1" }}
        boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      >
        Meus Projetos
      </Text>
      <Container
        border="1px"
        borderInlineEndStyle="dashed"
        borderColor="#192211"
        borderRadius="30"
        overflowY="auto"
        minW="100%"
        h="35rem"
        px={{ base: "1rem", md: "2.3rem" }}
        pb="6"
        bgColor="#192211"
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
