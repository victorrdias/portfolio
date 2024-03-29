import { Flex, Text, Image, Box, SlideFade } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import DivImages from "../DivImages";
import ProgressBars from "./ProgressBars";

const Skills: React.FC = () => {
  const ref = useRef(null);
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "0px" },

    {}
  );
  return (
    <Flex
      id="skills"
      maxW="100vw"
      as="section"
      px={{ base: "2.3rem", md: "4rem", lg: "7rem" }}
      py={{ base: "5rem", md: "6rem", lg: "12rem" }}
      h="max-content"
      bgColor="#1d1d1d"
      direction={{ base: "column", md: "column", lg: "row" }}
      gap={{ base: "", lg: "5.5rem" }}
    >
      <Flex as="article" direction="column" gap="1rem">
        <SlideFade
          offsetX="20px"
          in={inViewport}
          delay={0.1}
          whileHover={{ scale: 1.025 }}
        >
          <Flex as="h2" direction="column">
            <DivImages src="/assets/h2-1.svg" size="1.5rem" />
            <Text
              color="primaryColor"
              fontWeight="bold"
              fontSize={{ base: "40", md: "45", lg: "50" }}
              letterSpacing={3}
              lineHeight={{ base: "0,5", md: "1" }}
            >
              Habilidades
            </Text>

            <DivImages src="/assets/h2-2.svg" size="1.8rem" />
          </Flex>
        </SlideFade>
        <Flex
          as="aside"
          maxW={{ base: "", md: "", lg: "33rem", xl: "37.5rem" }}
          minW={{ base: "", md: "", lg: "33rem", xl: "37.5rem" }}
          borderRadius="20"
          direction="column"
        >
          <SlideFade delay={0.4} offsetY="10px" in={inViewport}>
            <DivImages src="/assets/p-1.svg" size="1.5rem" />

            <Flex
              direction="column"
              gap={{ base: "1rem", md: "2.5rem" }}
              as="section"
              fontSize={{ base: "14", md: "20", lg: "20" }}
              lineHeight={{ base: "24px", md: "26px" }}
              fontWeight="normal"
              letterSpacing={2}
              color="white"
              textAlign="justify"
            >
              <Text>
                Possuo conhecimento solido em HTML, JavaScript e CSS, atuo
                desenvolvendo aplicações completas, totalmente responsivas,
                utilizando o princípio do Mobile First, com a biblioteca
                ReactJS. Também faço uso do Framework NextJS e a plataforma
                NodeJS, unidos ao Typescript.
              </Text>

              <Text ref={ref}>
                Atualmente desenvolvo com a biblioteca CSS ChakraUI, possuindo
                também experiencia em TailWindCSS, conhecimentos consistentes em
                consumo de API pelo frontend, além de ter conforto para utilizar
                ferramentas como Firebase, Firestore e Strapi.
              </Text>
              <Text>
                Desde o início da minha jornada na programação mantenho o foco
                em aplicar boas práticas, seguindo padrões já consagrados como o
                CleanCode, assim como experiência no uso de Git e GitHub tanto
                quanto ferramentas de versionamento de código como Jira e
                similares.
              </Text>
            </Flex>
            <DivImages src="/assets/p-2.svg" size="1.8rem" />
          </SlideFade>
        </Flex>
      </Flex>

      <Box as="article" py={{ base: "3rem", md: "6.5rem" }} w="100%" h="100%">
        <ProgressBars />
      </Box>
    </Flex>
  );
};

export default Skills;
