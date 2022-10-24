import { Container, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import SocialButtons from "./socialButtons/SocialButtons";

const Subhero = () => {
  return (
    <Flex
      px={{ base: "1rem", md: "5rem", lg: "8rem" }}
      py="6rem"
      h={{ base: "90vh", md: "100vh", lg: "85vh" }}
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
        <Flex direction="column" gap={{ base: "0", md: "1rem" }}>
          <Text
            fontSize={{ base: "12", md: "20", lg: "20" }}
            lineHeight={{ base: "28px", md: "34px" }}
            fontWeight="normal"
            letterSpacing={2}
            color="gray.100"
            px={{ base: "1.5rem", md: "1.5rem" }}
            py="0.5rem"
          >
            Sou desenvolvedor front-end, morando no interior de Sao Paulo,
            historiador de formação pela Universidade Estadual de São Paulo,
            multi-instrumentista e fui musico profissional por muitos anos,
            portanto, criatividade e meu forte!
          </Text>
          <Text
            fontSize={{ base: "12", md: "20", lg: "20" }}
            lineHeight={{ base: "28px", md: "34px" }}
            fontWeight="normal"
            letterSpacing={2}
            color="gray.100"
            px={{ base: "1.5rem", md: "1.5rem" }}
            py="0.5rem"
          >
            Tenho desejo por aprender e sempre gostei dos estudos no que se
            refere à história, e como a união com a tecnologia beneficia seus
            estudos.
          </Text>
          <Text
            fontSize={{ base: "12", md: "20", lg: "20" }}
            lineHeight={{ base: "28px", md: "34px" }}
            fontWeight="normal"
            letterSpacing={2}
            color="gray.100"
            px={{ base: "1.5rem", md: "1.5rem" }}
            py="0.5rem"
          >
            Apos formado decidi transicionar de carreira para à programação, com
            a ajuda dos meus amigos programadores, comecei a me aprofundar nessa
            área e me apaixonei pelo design de interfaces e desenvolver projetos
            desafiantes que possam contribuir para as pessoas!
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
  );
};

export default Subhero;
