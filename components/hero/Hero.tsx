import {
  Flex,
  Grid,
  GridItem,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import SocialButtons from "../SocialButtons";

const Hero = () => {
  return (
    <Flex minH="95vh" minW="100vw" w="100vw">
      <Image
        alt="bg"
        src="/assets/bg-image.png.png"
        position="absolute"
        w="100%"
        minH="100%"
        zIndex={-1}
      />

      <Grid templateColumns="repeat(2,1fr)">
        <GridItem
          as={Flex}
          direction="column"
          py={{ base: "14rem", md: "20rem", lg: "14rem" }}
          pl={{ base: "2rem", md: "6rem", lg: "8rem", xl: "10rem" }}
          pr={{ base: "0.5rem", md: "3rem", lg: "4rem", xl: "5rem" }}
          gap="11rem"
        >
          <Text
            fontSize={{ base: "15", md: "25", lg: "30", xl: "35" }}
            color="white"
            fontWeight="bold"
            letterSpacing={2}
          >
            ola, eu sou o vituxo dev.bla bla, pau na maquina. front end
          </Text>
        </GridItem>

        <GridItem
          as={Flex}
          align="flex-end"
          px={{ base: "8", md: "36", xl: "40" }}
          pt={{ base: "8rem", md: "20rem", lg: "10rem" }}
          direction="column"
          gap="12"
        >
          <Image
            boxSize={{
              base: "6rem",
              md: "8rem",
              lg: "15rem",
              xl: "20rem",
            }}
            borderRadius="200"
            alt="photo"
            src="/assets/hero-img.png"
          />

          <Flex
            pl={{ md: "2", lg: "23rem" }}
            alignItems="center"
            direction="column"
          >
            <SocialButtons />
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Hero;
