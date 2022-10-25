import React from "react";
import { Flex, IconButton, Link, Text, Image } from "@chakra-ui/react";
import SocialButtons from "../socialButtons/SocialButtons";
import { AiFillGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import InvertedSocialButtons from "../socialButtons/InvertedSocialButtons";

const Footer = () => {
  return (
    <Flex
      as="footer"
      minH="30vh"
      bgColor="#1d1d1d"
      py="4"
      align="center"
      direction="column"
      gap="12"
      maxW="100vw"
    >
      <Text
        as="h2"
        w="100%"
        px="3rem"
        align="center"
        fontSize={{ base: "8", md: "10", lg: "10" }}
        lineHeight="30px"
        fontWeight="normal"
        letterSpacing={1.5}
        color="white"
      >
        venha me conhecer miga, sua louca, vamos dar mtos beijos na boca e
        fazermos muitas sapecagens!!!!! ao ar livre e muitas traquinagens!
      </Text>
      <Text
        as="h3"
        w="max-content"
        fontSize={{ base: "8", md: "10", lg: "10" }}
        lineHeight="30px"
        fontWeight="normal"
        letterSpacing={1.5}
        color="white"
      >
        Desenvolvido com React, TypeScript e NextJs
      </Text>
      <InvertedSocialButtons />
      <Image
        boxSize="2.4rem"
        position="absolute"
        opacity={0.5}
        alt="html"
        bottom="60px"
        left="45px"
        src="/assets/body-2.svg"
      />
      <Image
        boxSize="2.4rem"
        position="absolute"
        opacity={0.5}
        alt="html"
        bottom="40px"
        left="30px"
        src="/assets/html-2.svg"
      />
    </Flex>
  );
};

export default Footer;
