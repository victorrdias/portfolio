import { Flex, Button } from "@chakra-ui/react";
import React, { useRef } from "react";

const WebNav = () => {
  const Sobre = useRef();
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <Flex gap={{ base: "0", md: "6" }} display={{ base: "none", md: "flex" }}>
      <Button
        onClick={() => scrollToSection(Sobre)}
        variant="invisible"
        color="white"
        borderRadius="10"
        h="3vh"
        boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
        _hover={{
          color: "#65CCA9",
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
          color: "#65CCA9",
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
          color: "#65CCA9",
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
