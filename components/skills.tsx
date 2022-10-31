import { Flex, Text, Image, Box, Stack, Progress } from "@chakra-ui/react";
import React from "react";

const Skills = () => {
  return (
    <Flex
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
        <Flex as="h2" direction="column" gap="1">
          <Image
            maxW="1.6rem"
            alt="section"
            src="/assets/h2-1.svg"
            opacity={0.5}
          />
          <Text
            px="5"
            color="primaryColor"
            fontWeight="bold"
            fontSize={{ base: "30", md: "35", lg: "40" }}
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
        <Flex
          as="aside"
          maxW={{ base: "", md: "", lg: "35rem", xl: "40rem" }}
          minW={{ base: "", md: "", lg: "35rem", xl: "40rem" }}
          borderRadius="20"
          direction="column"
        >
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
              fontSize={{ base: "12", md: "20", lg: "20" }}
              lineHeight={{ base: "28px", md: "34px" }}
              fontWeight="normal"
              letterSpacing={2}
              color="gray.100"
              px={{ base: "1.4rem", md: "1.5rem" }}
            >
              Possuo conhecimento solido em HTML, JavaScript e CSS, atuo
              desenvolvendo interfaces totalmente responsivas, utilizando o
              princípio do Mobile First, com a biblioteca ReactJS. Também faço
              uso do Framework NextJS e a plataforma NodeJS, unidos ao
              Typescript.
            </Text>
            <Text
              fontSize={{ base: "12", md: "20", lg: "20" }}
              lineHeight={{ base: "28px", md: "34px" }}
              fontWeight="normal"
              letterSpacing={2}
              color="gray.100"
              px={{ base: "1.4rem", md: "1.5rem" }}
            >
              Atualmente desenvolvo com a biblioteca CSS ChakraUI, possuindo
              também experiencia em TailWindCSS, além de possuir conhecimentos
              consistentes em consumo de API e Firebase.
            </Text>
            <Text
              fontSize={{ base: "12", md: "20", lg: "20" }}
              lineHeight={{ base: "28px", md: "34px" }}
              fontWeight="normal"
              letterSpacing={2}
              color="gray.100"
              px={{ base: "1.4rem", md: "1.5rem" }}
            >
              Desde o início da minha jornada na programação mantenho o foco em
              aplicar boas práticas, seguindo padrões já consagrados como o
              CleanCode.
            </Text>
          </Flex>
          <Image
            maxW={{ base: "1.4rem", md: "2rem" }}
            alt="section"
            opacity={0.5}
            src="/assets/p-2.svg"
          />
        </Flex>
      </Flex>

      <Box as="article" py={{ base: "3rem", md: "6.5rem" }} w="100%" h="100%">
        <Stack gap="4" px="5" as="aside">
          <Text
            color="white"
            fontWeight="normal"
            fontSize={{ base: "15", md: "25", lg: "25" }}
            letterSpacing={1.5}
            lineHeight={{ base: "0,5", md: "1" }}
          >
            ReactJS
          </Text>
          <Progress size="xs" colorScheme="cyan" value={65}></Progress>
          <Text
            color="white"
            fontWeight="normal"
            fontSize={{ base: "15", md: "25", lg: "25" }}
            letterSpacing={1.5}
            lineHeight={{ base: "0,5", md: "1" }}
          >
            Front-end
          </Text>
          <Progress size="xs" colorScheme="purple" value={80}></Progress>
          <Text
            color="white"
            fontWeight="normal"
            fontSize={{ base: "15", md: "25", lg: "25" }}
            letterSpacing={1.5}
            lineHeight={{ base: "0,5", md: "1" }}
          >
            Back-end
          </Text>
          <Progress size="xs" colorScheme="pink" value={40}></Progress>
          <Text
            color="white"
            fontWeight="normal"
            fontSize={{ base: "15", md: "25", lg: "25" }}
            letterSpacing={1.5}
            lineHeight={{ base: "0,5", md: "1" }}
          >
            Chakra-UI
          </Text>
          <Progress size="xs" colorScheme="messenger" value={92}></Progress>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Skills;
