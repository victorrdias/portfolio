import React from "react";
import { Flex, IconButton, Link, Text, Image } from "@chakra-ui/react";
import SocialButtons from "../socialButtons/SocialButtons";
import { AiFillGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import InvertedSocialButtons from "../socialButtons/InvertedSocialButtons";

const Footer = () => {
  const currentDate = Date.now();
  const currentYear = new Date(currentDate).getFullYear();
  return (
    <Flex
      as="footer"
      minH="30vh"
      bgColor="#1d1d1d"
      py="4"
      align="center"
      direction="column"
      gap="8"
      maxW="100vw"
    >
      <Flex direction="column">
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
          Entre em contato comigo!
        </Text>
        <Text
          as="h3"
          w="100%"
          px="3rem"
          align="center"
          fontSize={{ base: "8", md: "10", lg: "10" }}
          lineHeight="30px"
          fontWeight="normal"
          letterSpacing={1.5}
          color="white"
        >
          Email: vitor.sousa.dias.15@gmail.com
        </Text>
      </Flex>

      <InvertedSocialButtons />

      <Text
        as="h4"
        w="max-content"
        fontSize={{ base: "8", md: "10", lg: "10" }}
        lineHeight="35px"
        fontWeight="normal"
        letterSpacing={1.5}
        color="white"
      >
        Desenvolvido com React, TypeScript e NextJs
      </Text>

      <Text
        as="h4"
        w="max-content"
        fontSize={{ base: "8", md: "10", lg: "10" }}
        lineHeight="35px"
        fontWeight="normal"
        letterSpacing={1.5}
        color="white"
      >
        © {currentYear} Vitor Sousa Dias
      </Text>
      <Image
        boxSize="2.4rem"
        position="absolute"
        opacity={0.5}
        alt="html"
        bottom="20px"
        left="45px"
        src="/assets/body-2.svg"
      />
      <Image
        boxSize="2.4rem"
        position="absolute"
        opacity={0.5}
        alt="html"
        bottom="5px"
        left="30px"
        src="/assets/html-2.svg"
      />
    </Flex>
  );
};

export default Footer;
