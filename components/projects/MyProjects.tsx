import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  ScaleFade,
  SlideFade,
  Text,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import { projectContent } from "../../utils/contentData/ProjectContent";
import { ProjectProps } from "../../utils/interface/ProjectProps";
import Project from "./Project";

const MyProjects: React.FC<{ projectContent: ProjectProps[] }> = () => {
  const ref = useRef(null);
  const { inViewport } = useInViewport(ref, { rootMargin: "-10px" });
  return (
    <Flex
      id="projects"
      as="section"
      minH="max-content"
      bgColor="#1d1d1d"
      direction="column"
      pl={{ base: "1rem", md: "5rem", lg: "8rem" }}
      pr={{ base: "1rem", md: "3rem", lg: "3rem" }}
      gap="1rem"
      py="4rem"
    >
      <SlideFade
        offsetY="10px"
        delay={0.5}
        in={inViewport}
        whileHover={{ scale: 1.025 }}
      >
        <Flex as="h2" direction="column" align="flex-start">
          <Image
            maxW="1.6rem"
            alt="section"
            src="/assets/h2-1.svg"
            opacity={0.5}
          />
          <Text
            color="#54edba"
            textAlign="center"
            justifyContent="center"
            p={{ base: "0.5rem", md: "1rem" }}
            fontWeight="bold"
            fontSize={{ base: "40", md: "45", lg: "50" }}
            letterSpacing={2}
            lineHeight={{ base: "0,5", md: "0.5" }}
            ref={ref}
          >
            Meus Projetos
          </Text>
          <Image
            maxW="2rem"
            alt="section"
            src="/assets/h2-2.svg"
            opacity={0.5}
          />
        </Flex>
      </SlideFade>
      <Flex as="section" direction="column" gap="1rem">
        <Image
          position="relative"
          right={{ base: "2", md: "1", lg: "6" }}
          w={{ base: "3rem", md: "5rem" }}
          opacity={0.5}
          alt="section"
          src="/assets/section1.svg"
        />

        <Flex direction="column" gap="4rem">
          {projectContent.map((project) => (
            <Project
              key={project.description}
              link={project.link}
              image={project.image}
              description={project.description}
            />
          ))}
        </Flex>

        <Image
          position="relative"
          right={{ base: "2", md: "1", lg: "6" }}
          w={{ base: "3rem", md: "5rem" }}
          opacity={0.5}
          alt="section"
          src="/assets/section2.svg"
        />
      </Flex>
    </Flex>
  );
};

export default MyProjects;
