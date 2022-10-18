import React from "react";
import { Flex, IconButton, Link, Text } from "@chakra-ui/react";
import SocialButtons from "../socialButtons/SocialButtons";
import { AiFillGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import InvertedSocialButtons from "../socialButtons/InvertedSocialButtons";

const Footer = () => {
  return (
    <Flex
      minH="30vh"
      bgColor="#1d1d1d"
      py="4"
      align="center"
      direction="column"
      gap="12"
      w="100vw"
    >
      <Text
        w="100%"
        px="3rem"
        align="center"
        fontSize={{ base: "8", md: "10", lg: "10" }}
        lineHeight="30px"
        fontWeight="semibold"
        letterSpacing={1}
        color="white"
      >
        venha me conhecer miga, sua louca, vamos dar mtos beijos na boca e
        fazermos muitas sapecagens!!!!! ao ar livre e muitas traquinagens!
      </Text>
      <Text
        w="max-content"
        fontSize={{ base: "8", md: "10", lg: "10" }}
        lineHeight="30px"
        fontWeight="semibold"
        letterSpacing={1}
        color="white"
      >
        Desenvolvido com React, TypeScript e NextJs
      </Text>
      <InvertedSocialButtons />
    </Flex>
  );
};

export default Footer;
