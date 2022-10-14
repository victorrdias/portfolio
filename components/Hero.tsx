import { Button, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Flex>
      <Image
        alt="bg"
        src="/assets/bg-image.png.png"
        position="absolute"
        w="100vw"
        h="100vh"
        zIndex={-1}
      />
      <Grid templateColumns="repeat(2,1fr)">
        <GridItem
          as={Flex}
          direction="column"
          py="16rem"
          px="8rem"
          gap="12rem"
          w="50rem"
        >
          <Text fontSize="35" color="white" fontWeight="bold" letterSpacing={2}>
            ola, eu sou o vituxo dev.bla bla, pau na maquina. front end
          </Text>

          <Button w="12rem">Linkedin</Button>
        </GridItem>

        <GridItem pl="16" pt="10rem" direction="column" gap="12" as={Flex}>
          <Image
            boxSize="20rem"
            borderRadius="200"
            alt="photo"
            src="/assets/hero-img.png"
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
    </Flex>
  );
};

export default Hero;
