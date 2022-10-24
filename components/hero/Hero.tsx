import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import InvertedSocialButtons from "../socialButtons/InvertedSocialButtons";
import { BsArrowDownCircle } from "react-icons/bs";
const Hero = () => {
  return (
    <Flex minH="100vh" h="100vh" maxW="100vw" bgColor="#1d1d1d">
      <Image
        src="/assets/html-1.svg"
        boxSize="2.4rem"
        position="absolute"
        opacity={0.4}
        alt="html"
        top={{ base: "40px", md: "50px", lg: "50px" }}
        left="30px"
      />
      <Image
        src="/assets/body-1.svg"
        boxSize="2.4rem"
        position="absolute"
        alt="html"
        top={{ base: "60px", md: "75px", lg: "75px" }}
        opacity={0.4}
        left="55px"
      />
      <Flex align="flex-end" maxH="100vh" py="12">
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
      >
        <GridItem
          as={Flex}
          mt={{ base: "5.5rem", md: "0" }}
          direction="column"
          pl={{ base: "2rem", md: "6rem", lg: "8rem", xl: "10rem" }}
          pr={{ base: "0.5rem", md: "3rem", lg: "4rem", xl: "5rem" }}
          gap="7rem"
          align="center"
          justify="center"
          w={{ base: "100vw", md: "100%" }}
        >
          <Flex direction="column">
            <Image alt="asd" w="1.5rem" opacity="0.5" src="/assets/h2-1.svg" />

            <Text
              px="4"
              fontSize={{ base: "15", md: "25", lg: "30", xl: "35" }}
              color="#65CCA9"
              fontWeight="bold"
              letterSpacing={2}
            >
              Olá! Sou o Vitor Dias
            </Text>
            <Text
              fontSize={{ base: "15", md: "25", lg: "30", xl: "35" }}
              color="white"
              fontWeight="bold"
              letterSpacing={2}
              px="4"
            >
              Desenvolvedor frontend
            </Text>
            <Image alt="asd" w="1.5rem" opacity="0.5" src="/assets/h2-1.svg" />
          </Flex>
          <Flex
            direction="column"
            align={{ base: "center", md: "center", lg: "center" }}
            gap="7rem"
          >
            <Image
              display={{ base: "flex", md: "none" }}
              boxSize={{
                base: "12rem",
                md: "15rem",
                lg: "20rem",
                xl: "20rem",
              }}
              borderRadius="200"
              border="4px"
              alt="photo"
              color="#65CCA9"
              src="/assets/hero-img.png"
              boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
            />
            <InvertedSocialButtons />
          </Flex>
        </GridItem>

        <GridItem
          as={Flex}
          align="center"
          justify="center "
          direction="column"
          gap="12"
          mb={{ base: "", md: "2.5rem", lg: "" }}
        >
          <Image
            display={{ base: "none", md: "flex" }}
            boxSize={{
              base: "9rem",
              md: "15rem",
              lg: "20rem",
              xl: "20rem",
            }}
            borderRadius="200"
            alt="photo"
            src="/assets/hero-img.png"
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
            border="4px"
            color="#65CCA9"
          />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Hero;
