import { Button, Container, Flex, Text, Image } from "@chakra-ui/react";
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
      <Flex direction="column">
        <Image
          maxW="1.6rem"
          alt="section"
          src="/assets/h2-1.svg"
          opacity={0.5}
        />
        <Text
          color="#65CCA9"
          textAlign="center"
          justifyContent="center"
          p={{ base: "0.5rem", md: "1rem" }}
          fontWeight="bold"
          fontSize={{ base: "30", md: "35", lg: "45" }}
          letterSpacing={2}
          lineHeight={{ base: "0,5", md: "0.5" }}
        >
          Meus Projetos
        </Text>

        <Image maxW="2rem" alt="section" src="/assets/h2-2.svg" opacity={0.5} />
      </Flex>

      <Flex direction="column" w="100%" gap="6">
        <Image
          position="relative"
          right={{ base: "2", md: "6" }}
          w={{ base: "3rem", md: "5rem" }}
          opacity={0.5}
          alt="section"
          src="/assets/section1.svg"
        />

        <Container
          border="2px"
          borderColor="#65CCA9"
          borderRadius="18"
          overflowY="auto"
          minW="100%"
          h="35rem"
          px={{ base: "1rem", md: "2.3rem" }}
          pb="6"
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

        <Image
          w={{ base: "3rem", md: "5rem" }}
          opacity={0.5}
          alt="section"
          src="/assets/section2.svg"
        />
      </Flex>
    </Flex>
  );
};

export default Projects;
