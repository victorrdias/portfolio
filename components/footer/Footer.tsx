import React from "react";
import { Flex, IconButton, Link, Text } from "@chakra-ui/react";
import SocialButtons from "../SocialButtons";
import { AiFillGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <Flex
      minH="30vh"
      bgColor="#B0C799"
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
        color="black"
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
        color="black"
      >
        Desenvolvido com React, TypeScript e NextJs
      </Text>
      <Flex gap="6" alignItems="flex-end" h="100%">
        <Link href="https://github.com/victorrdias" isExternal>
          <IconButton
            color="#192211"
            fontSize="60px"
            aria-label="github"
            icon={<AiFillGithub />}
            boxSize={{
              base: "2.5rem",
              md: "3rem",
              lg: "3rem",
              xl: "3.5rem",
            }}
            borderRadius="50"
            borderColor="#192211"
            border="2px"
            _hover={{
              color: "#B0C799",
              bgColor: "#192211",
            }}
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
          />
        </Link>
        <Link
          href="
https://wa.me/+5517991585836?text=Ol%C3%A1!%20Eu%20sou%20o%20Vitor,%20muito%20prazer!
"
          isExternal
        >
          <IconButton
            aria-label="whatsapp"
            icon={<AiOutlineWhatsApp />}
            boxSize={{
              base: "2.5rem",
              md: "3rem",
              lg: "3rem",
              xl: "3.5rem",
            }}
            borderRadius="50"
            color="#192211"
            fontSize="45px"
            borderColor="#192211"
            border="2px"
            _hover={{
              color: "#B0C799",
              bgColor: "#192211",
            }}
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/feed/?trk=sem-ga_campid%3D12619604099_asid%3D122510712920_crid%3D509739556235_kw%3Dlinked_d%3Dc_tid%3Dkwd-103941963_n%3Dg_mt%3De_geo%3D20106_slid%3D"
          isExternal
        >
          <IconButton
            aria-label="linkedin"
            icon={<TiSocialLinkedinCircular />}
            boxSize={{
              base: "2.5rem",
              md: "3rem",
              lg: "3rem",
              xl: "3.5rem",
            }}
            borderRadius="50"
            color="#192211"
            fontSize="60px"
            borderColor="#192211"
            border="2px"
            _hover={{
              color: "#B0C799",
              bgColor: "#192211",
            }}
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
          />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Footer;
