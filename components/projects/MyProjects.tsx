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
import DivImages from "../DivImages";
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
      px={{ base: "2.3rem", md: "4rem", lg: "7rem" }}
      gap="1rem"
      py={{ base: "10rem", md: "6rem", lg: "" }}
    >
      <SlideFade
        offsetY="10px"
        delay={0.5}
        in={inViewport}
        whileHover={{ scale: 1.025 }}
      >
        <Flex as="h2" direction="column" align="flex-start">
          <DivImages src="/assets/h2-1.svg" />
          <Text
            color="#54edba"
            py={{ base: "0.5rem", md: "1rem" }}
            fontWeight="bold"
            fontSize={{ base: "40", md: "45", lg: "50" }}
            letterSpacing={2}
            lineHeight={{ base: "0,5", md: "0.5" }}
            ref={ref}
          >
            Meus Projetos
          </Text>
          <DivImages src="/assets/h2-2.svg" />
        </Flex>
      </SlideFade>
      <Flex as="section" direction="column" gap="1rem">
        <DivImages src="/assets/section1.svg" />

        <Flex direction="column" gap="2rem">
          {projectContent.map((project) => (
            <Project
              key={project.description}
              link={project.link}
              image={project.image}
              description={project.description}
            />
          ))}
        </Flex>

        <DivImages src="/assets/section2.svg" />
      </Flex>
    </Flex>
  );
};

export default MyProjects;
