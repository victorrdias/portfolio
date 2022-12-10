import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const WebNav = dynamic(() => import("./WebNav"));
const MobileNav = dynamic(() => import("./MobileNav"));

const Header: React.FC = () => {
  return (
    <Flex
      as="header"
      align="center"
      px={{ base: "2", md: "6" }}
      bgColor="black"
      minH="5vh"
      w="100%"
      justify="space-between"
      position="fixed"
      zIndex={1}
      opacity={0.65}
    >
      <Text color="white" display={{ base: "none", md: "flex" }}></Text>
      <WebNav />
      <MobileNav />
    </Flex>
  );
};
export default Header;
