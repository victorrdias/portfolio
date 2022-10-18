import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Flex
      align="center"
      px="2"
      bgColor="#192211"
      minH="5vh"
      w="100%"
      justify="space-between"
      position="fixed"
      zIndex={1}
    >
      <Text color="white">vituxodev caraio</Text>
      <Button
        borderRadius="10"
        h="3vh"
        boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      >
        PT/BR
      </Button>
    </Flex>
  );
};
export default Header;
