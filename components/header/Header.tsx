import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import WebNav from "./WebNav";

const Header = () => {
  return (
    <Flex
      align="center"
      px="6"
      bgColor="black"
      minH="5vh"
      w="100%"
      justify="space-between"
      position="fixed"
      zIndex={1}
      opacity={0.65}
    >
      <Text color="white" display={{ base: "none", md: "flex" }}>
        vituxodev caraio
      </Text>
      <WebNav />
    </Flex>
  );
};
export default Header;
