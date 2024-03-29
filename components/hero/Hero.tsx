import React, { useRef } from "react";
import Typical from "react-typical";
import dynamic from "next/dynamic";
import { Flex, Grid, GridItem, Image, SlideFade, Text } from "@chakra-ui/react";
import { useInViewport } from "react-in-viewport";
import DivImages from "../DivImages";
const InvertedSocialButtons = dynamic(
  () => import("../socialButtons/InvertedSocialButtons")
);

const Hero: React.FC = () => {
  const ref = useRef(null);
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "0px" },
    { disconnectOnLeave: false }
  );

  return (
    <Flex minH="100vh" h="100vh" maxW="100vw" bgColor="#1d1d1d" as="section">
      <Image
        src="/assets/html-1.svg"
        boxSize="2.4rem"
        position="absolute"
        opacity={0.4}
        alt="html"
        top={{ base: "40px", md: "50px", lg: "40px" }}
        left="5px"
      />
      <Image
        src="/assets/body-1.svg"
        boxSize="2.4rem"
        position="absolute"
        alt="html"
        top={{ base: "60px", md: "75px", lg: "60px" }}
        opacity={0.4}
        left="20px"
      />

      <Flex align="flex-end" maxH="100vh" ref={ref} py="2rem">
        <Image
          right="12px"
          position="absolute"
          src="/assets/downpng.png"
          alt="scrolldownright"
          w={{ base: "36px", md: "48px", lg: "max-content" }}
        />

        <Image
          position="absolute"
          src="/assets/downpng.png"
          alt="scrolldownleft"
          w={{ base: "36px", md: "48px", lg: "56px" }}
        />
      </Flex>

      <Grid
        templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
        w="100%"
        as="aside"
      >
        <GridItem
          as={Flex}
          mt={{ base: "5.5rem", md: "0" }}
          direction="column"
          gap="7rem"
          align="center"
          justify="center"
          w={{ base: "100vw", md: "100%" }}
        >
          <Flex direction="column" as="h1" py="2">
            <DivImages src="/assets/h2-1.svg" size="1.5rem" />
            <SlideFade
              offsetY="80px"
              in={inViewport}
              whileHover={{ scale: 1.05 }}
            >
              <Text
                textAlign={{ base: "center", md: "start" }}
                as="aside"
                fontSize={{ base: "20", md: "25", lg: "35", xl: "35" }}
                color="primaryColor"
                fontWeight="bold"
                letterSpacing={2}
              >
                Ola! Sou o Vitor Dias.
              </Text>
            </SlideFade>
            <Text
              as="aside"
              fontSize={{ base: "20", md: "20", lg: "30", xl: "30" }}
              color="white"
              fontWeight="bold"
              letterSpacing={2}
            >
              <Typical steps={["Desenvolvedor Full Stack", 10]} />
            </Text>
            <DivImages src="/assets/h2-2.svg" size="1.8rem" />
          </Flex>
          <Flex
            as="section"
            direction="column"
            align={{ base: "center", md: "center", lg: "center" }}
            gap="7rem"
          >
            <SlideFade offsetY="80px" in={inViewport} delay={0.25}>
              <Image
                display={{ base: "flex", md: "none" }}
                boxSize="12rem"
                borderRadius="200"
                border="4px"
                alt="photo"
                color="primaryColor"
                src="/assets/hero-img.png"
                boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
              />
            </SlideFade>
            <InvertedSocialButtons />
          </Flex>
        </GridItem>

        <GridItem
          as={Flex}
          align="center"
          justify="center"
          direction="column"
          gap="12rem"
          mb={{ base: "0", md: "7rem", lg: "5rem" }}
        >
          <SlideFade
            delay={1}
            offsetY="200px"
            in={inViewport}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              display={{ base: "none", md: "flex" }}
              boxSize={{
                md: "18rem",
                lg: "20rem",
                xl: "20rem",
              }}
              borderRadius="200"
              alt="photo"
              src="/assets/hero-img.png"
              boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
              border="4px"
              color="primaryColor"
            />
          </SlideFade>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Hero;
