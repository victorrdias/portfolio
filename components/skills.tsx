import { Container, Flex, Text, Image, Box, Button } from "@chakra-ui/react";
import React from "react";
import SocialButtons from "./socialButtons/SocialButtons";

const Skills = () => {
  return (
    <Flex
      px={{ base: "1rem", md: "5rem", lg: "8rem" }}
      h={{ base: "120vh", md: "80vh" }}
      bgColor="#1d1d1d"
      align="flex-start"
      direction="column"
      gap="1rem"
    >
      <Flex direction="column" gap="1">
        <Image
          maxW="1.6rem"
          alt="section"
          src="/assets/h2-1.svg"
          opacity={0.5}
        />
        <Text
          px="5"
          color="#65CCA9"
          fontWeight="bold"
          fontSize={{ base: "30", md: "35", lg: "40" }}
          letterSpacing={3}
          lineHeight={{ base: "0,5", md: "1" }}
        >
          Habilidades
        </Text>

        <Image maxW="2rem" opacity={0.5} alt="section" src="/assets/h2-2.svg" />
      </Flex>
      <Flex
        maxW={{ base: "18rem", md: "30rem", lg: "35rem", xl: "45rem" }}
        minH="29rem"
        borderRadius="20"
        direction="column"
        gap="2"
      >
        <Image
          opacity={0.5}
          maxW={{ base: "1rem", md: "1.4rem" }}
          alt="section"
          src="/assets/p-1.svg"
        />
        <Text
          fontSize={{ base: "12", md: "20", lg: "25" }}
          lineHeight="34px"
          fontWeight="normal"
          letterSpacing={2}
          color="gray.100"
          px={{ base: "1.4rem", md: "1.5rem" }}
        >
          Conhecido como mago do css e do chakra UI, desenvolvo com a biblioteca
          JavaScript React js, unido ao TypeScript, NextJS e Firebase, sou
          profissional em fazer pagina bonitinha, e meter o louco na rapazeada.
          Conhecimentos bem mais ou menos em javaScript puro, e sei usar API e
          trabalhar com contextos.nal em fazer pagina bonitinha, e meter o louco
          na rapazeada. Conhecimentos bem mais ou menos em javaScript puro, e
          sei usar API e trabalhar com contextos.nal em fazer pagina bonitinha,
          e meter o louco na rapazeada. Conhecimentos bem mais ou menos em
          javaScript puro, e sei usar API e trabalhar com contextos.
        </Text>

        <Image
          maxW={{ base: "1.4rem", md: "2rem" }}
          alt="section"
          opacity={0.5}
          src="/assets/p-2.svg"
        />
      </Flex>
    </Flex>
  );
};

export default Skills;
