import { Button, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Grid
      templateColumns="repeat(2,1fr)"
      width="100vw"
      h="100vh"
      bgImage="/assets/bg-image.png"
    >
      <GridItem
        as={Flex}
        direction="column"
        py="16rem"
        px="8rem"
        gap="12rem"
        w="50rem"
      >
        <Text fontSize="35" fontWeight="bold" letterSpacing={2}>
          ola, eu sou o vituxo dev.bla bla, pau na maquina. front end
        </Text>

        <Button w="max-content" bgColor="black">
          Linkedin
        </Button>
      </GridItem>

      <GridItem pl="12" pt="10rem" direction="column" gap="12" as={Flex}>
        <Image
          boxSize="24rem"
          borderRadius="200"
          alt="photo"
          src="/assets/hero-img.jpg"
        />
        <Flex direction="column" gap="6" pl="10rem" alignItems="center">
          <Button boxSize="3.5rem" borderRadius="50">
            a
          </Button>
          <Button boxSize="3.5rem" borderRadius="50">
            a
          </Button>
          <Button boxSize="3.5rem" borderRadius="50">
            a
          </Button>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Hero;
