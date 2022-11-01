import React from "react";
import { Flex, Button } from "@chakra-ui/react";

const WebNav: React.FC = () => {
  return (
    <Flex gap={{ base: "0", md: "6" }} display={{ base: "none", md: "flex" }}>
      <Button
        variant="invisible"
        color="white"
        borderRadius="10"
        h="3vh"
        boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
        _hover={{
          color: "primaryColor",
        }}
        fontWeight="normal"
        letterSpacing={1.5}
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
          color: "primaryColor",
        }}
        fontWeight="normal"
        letterSpacing={1.5}
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
          color: "primaryColor",
        }}
        fontWeight="normal"
        letterSpacing={1.5}
      >
        Projetos
      </Button>
    </Flex>
  );
};

export default WebNav;
