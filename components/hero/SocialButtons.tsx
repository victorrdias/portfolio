import { Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiOutlineWhatsApp } from "react-icons/ai";

const SocialButtons = () => {
  return (
    <Flex direction="column" gap="6" alignItems="center">
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
      />
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
      />
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
      />
    </Flex>
  );
};

export default SocialButtons;
