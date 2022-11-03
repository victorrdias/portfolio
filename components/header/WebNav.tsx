import React from "react";
import { Flex, Button } from "@chakra-ui/react";

const WebNav: React.FC = () => {
  const scroll2El = (subhero) => {
    window.scrollTo({
      top: document.getElementById(subhero).offsetTop - 60,
      behavior: "smooth",
    });
  };

  const onBtnClick = (e) => {
    e.preventDefault();
    const goto = e.target.getAttribute("goto");
    setTimeout(() => {
      scroll2El(goto);
    }, 100);
  };

  return (
    <Flex gap={{ base: "0", md: "6" }} display={{ base: "none", md: "flex" }}>
      <Button
        onClick={onBtnClick}
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
