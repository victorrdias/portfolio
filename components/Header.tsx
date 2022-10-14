import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Flex bgColor="#192211" minH="5vh">
      <Text color="white" fontSize="30" fontWeight="bold" letterSpacing={3}>
        aqui vai header
      </Text>
    </Flex>
  );
};
export default Header;
