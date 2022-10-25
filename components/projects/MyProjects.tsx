import { Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { projectContent } from "../../utils/contentData/ProjectContent";
import { ProjectProps } from "../../utils/interface/ProjectProps";
import Project from "./Project";

const MyProjects: React.FC<{ projectContent: ProjectProps[] }> = () => {
  return (
    <Flex
      as="section"
      maxW="100vw"
      minH="max-content"
      bgColor="#1d1d1d"
      direction="column"
      px={{ base: "1rem", md: "", lg: "8rem" }}
      gap="4rem"
      pb={{ md: "6rem", lg: "8rem" }}
      py="4rem"
    >
      <Flex as="h2" direction="column" align="flex-start">
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
      <Flex as="section" direction="column" gap="1rem">
        <Image
          position="relative"
          right={{ base: "2", md: "1", lg: "6" }}
          w={{ base: "3rem", md: "5rem" }}
          opacity={0.5}
          alt="section"
          src="/assets/section1.svg"
        />
        {projectContent.map((project) => (
          <Project
            key={project.description}
            link={project.link}
            image={project.image}
            description={project.description}
          />
        ))}
        <Image
          position="relative"
          right={{ base: "2", md: "1", lg: "6" }}
          w={{ base: "3rem", md: "5rem" }}
          opacity={0.5}
          alt="section"
          src="/assets/section2.svg"
        />
      </Flex>

      <Flex w="100%" justify="center" as="article">
        <Link href="https://github.com/victorrdias" isExternal>
          <Button
            borderRadius="block"
            border="1px"
            fontSize={{ lg: "26px" }}
            w="max-content"
            variant="invisible"
            h="4rem"
            color="#65CCA9"
            _hover={{
              bgColor: "#333333",
            }}
            fontWeight="normal"
            letterSpacing={1.5}
          >
            Va para o GitHub
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default MyProjects;
