import { Container, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import SocialButtons from "./SocialButtons";

const Subhero = () => {
  return (
    <Flex
      px={{ base: "1rem", md: "5rem", lg: "10rem" }}
      h="100vh"
      bgColor="#B0C799"
      align="center"
    >
      <Flex
        bgColor="#192211"
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
          color="white"
          fontWeight="bold"
          fontSize={{ base: "30", md: "35", lg: "40" }}
          letterSpacing={3}
          lineHeight={{ base: "0,5", md: "1" }}
        >
          Sobre mim
        </Text>
        <Text
          fontSize={{ base: "12", md: "20", lg: "25" }}
          lineHeight="34px"
          fontWeight="semibold"
          letterSpacing={1}
          color="white"
        >
          um tanto quanto gay, mas apaixonado pela viadagem, buscando sempre
          nossos meios de exercer essa profissao tao maravilhosa. Sou graduado
          em boiolice, mas transicionei de carreira assim que terminei a
          faculdade, sou otimo em me comunicar com bichas, e tenho ansia pra
          aprender mais sobre as lgtbs
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

export default Subhero;
