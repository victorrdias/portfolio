import { Container, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import SocialButtons from "./socialButtons/SocialButtons";

const Subhero = () => {
  return (
    <Flex
      px={{ base: "1rem", md: "5rem", lg: "8rem" }}
      py="6rem"
      h="100vh"
      bgColor="#1d1d1d"
      align="flex-start"
      direction="column"
      gap="2rem"
    >
      <Flex direction="column" gap="4">
        <Image
          maxW="2rem"
          alt="section"
          src="/assets/h2-1.svg"
          opacity={0.25}
        />
        <Text
          px="4"
          color="#65CCA9"
          fontWeight="bold"
          fontSize={{ base: "30", md: "35", lg: "40" }}
          letterSpacing={3}
          lineHeight={{ base: "0,5", md: "1" }}
        >
          Sobre mim
        </Text>
        <Flex justify="flex-end">
          <Image
            maxW="2rem"
            opacity={0.25}
            alt="section"
            src="/assets/h2-2.svg"
          />
        </Flex>
      </Flex>
      <Flex
        maxW={{ base: "18rem", md: "30rem", lg: "35rem", xl: "45rem" }}
        minH="29rem"
        borderRadius="20"
        direction="column"
        // /gap={{ base: "4", md: "6" }}
      >
        <Image
          opacity={0.25}
          maxW={{ base: "1.4rem", md: "2rem" }}
          alt="section"
          src="/assets/p-1.svg"
        />
        <Text
          fontSize={{ base: "12", md: "20", lg: "25" }}
          lineHeight="34px"
          fontWeight="semibold"
          letterSpacing={1}
          color="gray.100"
          p={{ base: "1.5rem", md: "2rem" }}
        >
          um tanto quanto gay, mas apaixonado pela viadagem, buscando sempre
          nossos meios de exercer essa profissao tao maravilhosa. Sou graduado
          em boiolice, mas transicionei de carreira assim que terminei a
          faculdade, sou otimo em me comunicar com bichas, e tenho ansia pra
          aprender mais sobre as lgtbs
        </Text>
        <Flex justify="flex-end">
          <Image
            maxW={{ base: "1.4rem", md: "2rem" }}
            alt="section"
            opacity={0.25}
            src="/assets/p-2.svg"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Subhero;
