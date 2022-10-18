import { Container, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import SocialButtons from "./socialButtons/SocialButtons";

const Skills = () => {
  return (
    <Flex
      px={{ base: "1rem", md: "5rem", lg: "10rem" }}
      h="100vh"
      bgColor="#192211"
      align="center"
    >
      <Flex
        bgColor="#B0C799"
        maxW={{ base: "18rem", md: "23rem", lg: "30rem", xl: "40rem" }}
        minH="29rem"
        borderRadius="30"
        opacity={0.9}
        direction="column"
        gap={{ base: "4", md: "12" }}
        p={{ base: "1.5rem", md: "3rem" }}
        boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      >
        <Text
          color="black"
          fontWeight="bold"
          fontSize={{ base: "30", md: "35", lg: "40" }}
          letterSpacing={3}
          lineHeight={{ base: "0,5", md: "1" }}
        >
          Habilidades
        </Text>
        <Text
          fontSize={{ base: "12", md: "20", lg: "25" }}
          lineHeight="30px"
          fontWeight="semibold"
          letterSpacing={1}
          color="black"
        >
          Conhecido como mago do css e do chakra UI, desenvolvo com a biblioteca
          JavaScript React js, unido ao TypeScript, NextJS e Firebase, sou
          profissional em fazer pagina bonitinha, e meter o louco na rapazeada.
          Conhecimentos bem mais ou menos em javaScript puro, e sei usar API e
          trabalhar com contextos.
        </Text>
      </Flex>
      <Image
        boxSize="30rem"
        position="absolute"
        opacity="0.1"
        right={{ base: "0rem", md: "10rem", lg: "18rem", xl: "23.5rem" }}
        src="https://www.svgrepo.com/show/130116/web-development.svg"
        alt="asd"
      ></Image>
      <Flex w="100%" justify="flex-end">
        <SocialButtons />
      </Flex>
    </Flex>
  );
};

export default Skills;
