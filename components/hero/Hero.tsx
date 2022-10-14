import {
  Button,
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
import SocialButtons from "./SocialButtons";

const Hero = () => {
  return (
    <Flex>
      <Image
        alt="bg"
        src="/assets/bg-image.png.png"
        position="absolute"
        w="100%"
        h="95vh"
        zIndex={-1}
      />

      <Grid templateColumns="repeat(2,1fr)">
        <GridItem
          as={Flex}
          direction="column"
          py={{ base: "14rem", md: "20rem", lg: "14rem" }}
          px={{ base: "2rem", md: "6rem", lg: "8rem", xl: "8rem" }}
          gap="11rem"
          w={{ base: "15rem", md: "30rem", lg: "40rem", xl: "50rem" }}
        >
          <Text
            fontSize={{ base: "15", md: "25", lg: "30", xl: "35" }}
            color="white"
            fontWeight="bold"
            letterSpacing={2}
          >
            ola, eu sou o vituxo dev.bla bla, pau na maquina. front end
          </Text>

          {/* <Button w="12rem">Linkedin</Button> */}
        </GridItem>

        <GridItem
          px={{ base: "5", md: "20", xl: "20" }}
          pt={{ base: "14rem", md: "20rem", lg: "10rem" }}
          direction="column"
          gap="12"
          as={Flex}
        >
          <Image
            boxSize={{
              base: "6rem",
              md: "10rem",
              lg: "15rem",
              xl: "20rem",
            }}
            borderRadius="200"
            alt="photo"
            src="/assets/hero-img.png"
          />
          <Flex direction="column" alignItems="center">
            <SocialButtons />
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Hero;
