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
      <Button borderRadius="20" h="3vh">
        PT/BR
      </Button>
    </Flex>
  );
};
export default Header;
