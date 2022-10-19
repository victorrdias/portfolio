import { Flex, Button } from "@chakra-ui/react";
import React from "react";

const WebNav = () => {
  return (
    <Flex gap={{ base: "0", md: "6" }}>
      <Button
        variant="invisible"
        color="white"
        borderRadius="10"
        h="3vh"
        boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
        _hover={{
          color: "#65CCA9",
        }}
      >
        Sobre
      </Button>
      <Button
        variant="invisible"
        color="white"
        borderRadius="10"
        h="3vh"
        boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
        _hover={{
          color: "#65CCA9",
        }}
      >
        Habilidades
      </Button>
      <Button
        variant="invisible"
        color="white"
        borderRadius="10"
        h="3vh"
        boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
        _hover={{
          color: "#65CCA9",
        }}
      >
        Projetos
      </Button>
      <Button
        variant="invisible"
        color="white"
        borderRadius="10"
        h="3vh"
        boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
        _hover={{
          color: "#65CCA9",
        }}
      >
        PT/BR
      </Button>
    </Flex>
  );
};

export default WebNav;
