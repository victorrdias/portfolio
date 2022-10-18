import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import InvertedSocialButtons from "../socialButtons/invertedSocialButtons";

const Hero = () => {
  return (
    <Flex minH="100vh" minW="100vw" w="100vw" bgColor="#192211">
      <Grid
        templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
        w="100%"
      >
        <GridItem
          as={Flex}
          direction="column"
          pl={{ base: "2rem", md: "6rem", lg: "8rem", xl: "10rem" }}
          pr={{ base: "0.5rem", md: "3rem", lg: "4rem", xl: "5rem" }}
          gap="7rem"
          justify="center"
          w={{ base: "100vw", md: "100%" }}
        >
          <Flex direction="column" align="center">
            <Text
              fontSize={{ base: "15", md: "25", lg: "30", xl: "35" }}
              color="white"
              fontWeight="bold"
              letterSpacing={2}
            >
              Vitor Dias
            </Text>
            <Text
              fontSize={{ base: "15", md: "25", lg: "30", xl: "35" }}
              color="white"
              fontWeight="bold"
              letterSpacing={2}
            >
              Dev frontend
            </Text>
          </Flex>
          <Flex
            direction="column"
            align={{ base: "center", md: "center", lg: "center" }}
            gap="5rem"
          >
            <Image
              display={{ base: "flex", md: "none" }}
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
          />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Hero;
