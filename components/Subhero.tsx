import React, { useRef } from "react";
import { Flex, Text, Image, ScaleFade, SlideFade } from "@chakra-ui/react";
import { useInViewport } from "react-in-viewport";
import DivImages from "./DivImages";

const Subhero: React.FC = () => {
  const ref = useRef(null);
  const { inViewport } = useInViewport(ref, { rootMargin: "0px" }, {});

  return (
    <Flex
      id="subhero"
      maxW="100vw"
      as="section"
      px={{ base: "2.3rem", md: "4rem", lg: "7rem" }}
      py={{ base: "5rem", md: "4rem", lg: "6rem" }}
      h="max-content"
      bgColor="#1d1d1d"
      align="flex-start"
      direction="column"
      gap="1rem"
    >
      <Flex direction="column" gap="2" as="h2">
        <SlideFade
          offsetX="50px"
          in={inViewport}
          delay={0.1}
          whileHover={{ scale: 1.025 }}
        >
          <DivImages src="/assets/h2-1.svg" />
          <Text
            color="primaryColor"
            fontWeight="bold"
            fontSize={{ base: "40", md: "45", lg: "50" }}
            letterSpacing={3}
            lineHeight={{ base: "0,5", md: "1" }}
          >
            Sobre mim
          </Text>

          <DivImages src="/assets/h2-2.svg" />
        </SlideFade>
      </Flex>
      <Flex
        gap="2"
        as="aside"
        maxW={{
          base: "max-content",
          md: "max-content",
          lg: "35rem",
          xl: "45rem",
        }}
        minH="29rem"
        borderRadius="20"
        direction="column"
      >
        <SlideFade offsetY="30px" in={inViewport} delay={0.3}>
          <DivImages src="/assets/p-1.svg" />
          <Flex
            direction="column"
            gap={{ base: "1rem", md: "2rem" }}
            as="section"
            maxW={{ base: "", md: "", lg: "33rem", xl: "37.5rem" }}
            minW={{ base: "", md: "", lg: "33rem", xl: "37.5rem" }}
          >
            <Text
              fontSize={{ base: "14", md: "20", lg: "20" }}
              lineHeight={{ base: "24px", md: "26px" }}
              fontWeight="normal"
              letterSpacing={2}
              color="white"
              textAlign="justify"
            >
              Sou desenvolvedor front-end, morando no interior de Sao Paulo,
              historiador de formação pela Universidade Estadual de São Paulo,
              multi-instrumentista e fui musico profissional por muitos anos,
              portanto, criatividade e meu forte!
            </Text>
            <Text
              ref={ref}
              fontSize={{ base: "14", md: "20", lg: "20" }}
              lineHeight={{ base: "24px", md: "26px" }}
              fontWeight="normal"
              letterSpacing={2}
              color="white"
              textAlign="justify"
            >
              Tenho desejo por aprender e sempre gostei dos estudos no que se
              refere à história, e como a união com a tecnologia beneficia seus
              estudos.
            </Text>
            <Text
              fontSize={{ base: "14", md: "20", lg: "20" }}
              lineHeight={{ base: "24px", md: "26px" }}
              fontWeight="normal"
              letterSpacing={2}
              color="white"
              textAlign="justify"
            >
              Apos formado decidi transicionar de carreira para à programação,
              com a ajuda dos meus amigos programadores, comecei a me aprofundar
              nessa área e me apaixonei pelo design de interfaces e desenvolver
              projetos desafiantes que possam contribuir para as pessoas!
            </Text>
          </Flex>

          <DivImages src="/assets/p-2.svg" />
        </SlideFade>
      </Flex>
    </Flex>
  );
};

export default Subhero;
