import { Flex, Text, Image, Box, SlideFade } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";
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
      maxW="100vw"
      as="section"
      pl={{ base: "1rem", md: "5rem", lg: "8rem" }}
      pr={{ base: "1.5rem", md: "3rem" }}
      py={{ base: "0", md: "4rem" }}
      h="max-content"
      bgColor="#1d1d1d"
      direction={{ base: "column", md: "column", lg: "row" }}
      gap={{ base: "0", lg: "3rem" }}
    >
      <Flex as="article" direction="column" gap="1rem">
        <SlideFade
          offsetX="20px"
          in={inViewport}
          delay={0.1}
          whileHover={{ scale: 1.025 }}
        >
          <Flex as="h2" direction="column" gap="1">
            <Image
              ref={ref}
              maxW="1.6rem"
              alt="section"
              src="/assets/h2-1.svg"
              opacity={0.5}
            />
            <Text
              px="5"
              color="primaryColor"
              fontWeight="bold"
              fontSize={{ base: "40", md: "45", lg: "50" }}
              letterSpacing={3}
              lineHeight={{ base: "0,5", md: "1" }}
            >
              Habilidades
            </Text>

            <Image
              maxW="2rem"
              opacity={0.5}
              alt="section"
              src="/assets/h2-2.svg"
            />
          </Flex>
        </SlideFade>
        <Flex
          as="aside"
          maxW={{ base: "", md: "", lg: "35rem", xl: "40rem" }}
          minW={{ base: "", md: "", lg: "35rem", xl: "40rem" }}
          borderRadius="20"
          direction="column"
        >
          <SlideFade delay={0.4} offsetY="10px" in={inViewport}>
            <Image
              opacity={0.5}
              maxW={{ base: "1rem", md: "1.4rem" }}
              alt="section"
              src="/assets/p-1.svg"
            />
            <Flex
              direction="column"
              gap={{ base: "1rem", md: "1.5rem" }}
              as="section"
            >
              <Text
                fontSize={{ base: "14", md: "20", lg: "20" }}
                lineHeight={{ base: "28px", md: "34px" }}
                fontWeight="normal"
                letterSpacing={2}
                color="white"
                px={{ base: "1.4rem", md: "1.5rem" }}
                textAlign="justify"
              >
                Possuo conhecimento solido em HTML, JavaScript e CSS, atuo
                desenvolvendo interfaces totalmente responsivas, utilizando o
                princípio do Mobile First, com a biblioteca ReactJS. Também faço
                uso do Framework NextJS e a plataforma NodeJS, unidos ao
                Typescript.
              </Text>

              <Text
                fontSize={{ base: "14", md: "20", lg: "20" }}
                lineHeight={{ base: "28px", md: "34px" }}
                fontWeight="normal"
                letterSpacing={2}
                color="white"
                px={{ base: "1.4rem", md: "1.5rem" }}
                ref={ref}
                textAlign="justify"
              >
                Atualmente desenvolvo com a biblioteca CSS ChakraUI, possuindo
                também experiencia em TailWindCSS, além de possuir conhecimentos
                consistentes em consumo de API e Firebase.
              </Text>
              <Text
                fontSize={{ base: "14", md: "20", lg: "20" }}
                lineHeight={{ base: "28px", md: "34px" }}
                fontWeight="normal"
                letterSpacing={2}
                color="white"
                px={{ base: "1.4rem", md: "1.5rem" }}
                textAlign="justify"
              >
                Desde o início da minha jornada na programação mantenho o foco
                em aplicar boas práticas, seguindo padrões já consagrados como o
                CleanCode, assim como o uso e o dominio do Git.
              </Text>
            </Flex>
            <Image
              maxW={{ base: "1.4rem", md: "2rem" }}
              alt="section"
              opacity={0.3}
              src="/assets/p-2.svg"
            />
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
