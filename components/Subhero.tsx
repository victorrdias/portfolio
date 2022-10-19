import { Container, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import SocialButtons from "./socialButtons/SocialButtons";

const Subhero = () => {
  return (
    <Flex
      px={{ base: "1rem", md: "5rem", lg: "8rem" }}
      py="6rem"
      h={{ base: "100vh", lg: "80vh" }}
      bgColor="#1d1d1d"
      align="flex-start"
      direction="column"
      gap="1rem"
    >
      <Flex direction="column" gap="2">
        <Image
          maxW="1.6rem"
          alt="section"
          src="/assets/h2-1.svg"
          opacity={0.5}
        />
        <Text
          px="1.4rem"
          color="#65CCA9"
          fontWeight="bold"
          fontSize={{ base: "30", md: "35", lg: "40" }}
          letterSpacing={3}
          lineHeight={{ base: "0,5", md: "1" }}
        >
          Sobre mim
        </Text>

        <Image maxW="2rem" opacity={0.5} alt="section" src="/assets/h2-2.svg" />
      </Flex>
      <Flex
        maxW={{ base: "18rem", md: "30rem", lg: "35rem", xl: "45rem" }}
        minH="29rem"
        borderRadius="20"
        direction="column"
      >
        <Image
          opacity={0.5}
          maxW={{ base: "1rem", md: "1.6rem" }}
          alt="section"
          src="/assets/p-1.svg"
        />
        <Text
          fontSize={{ base: "12", md: "20", lg: "25" }}
          lineHeight="34px"
          fontWeight="semibold"
          letterSpacing={1}
          color="gray.100"
          px={{ base: "1.5rem", md: "1.5rem" }}
          py="0.5rem"
        >
          um tanto quanto gay, mas apaixonado pela viadagem, buscando sempre
          nossos meios de exercer essa profissao tao maravilhosa. Sou graduado
          em boiolice, mas transicionei de carreira assim que terminei a
          faculdade, sou otimo em me comunicar com bichas, e tenho ansia pra
          aprender mais sobre as lgtbs
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

export default Subhero;
