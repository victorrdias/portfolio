import { Flex, IconButton, Link } from "@chakra-ui/react";
//import Link from "next/link";
import React from "react";
import { AiFillGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const InvertedSocialButtons = () => {
  return (
    <Flex gap="6" alignItems="center" as="button">
      <Link href="https://github.com/victorrdias" isExternal>
        <IconButton
          color="#65CCA9"
          bgColor="#1d1d1d"
          fontSize="60px"
          aria-label="github"
          icon={<AiFillGithub />}
          boxSize={{
            base: "2.5rem",
            md: "3rem",
            lg: "3rem",
            xl: "3rem",
          }}
          //borderRadius="50"
          borderColor="#65CCA9"
          border="2px"
          _hover={{
            color: "white",
            bgColor: "black",
          }}
          boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
        />
      </Link>
      <Link
        isExternal
        href="
https://wa.me/+5517991585836?text=Ol%C3%A1!%20Eu%20sou%20o%20Vitor,%20muito%20prazer!
"
      >
        <IconButton
          aria-label="whatsapp"
          icon={<AiOutlineWhatsApp />}
          boxSize={{
            base: "2.5rem",
            md: "3rem",
            lg: "3rem",
            xl: "3rem",
          }}
          color="#65CCA9"
          bgColor="#1d1d1d"
          fontSize="45px"
          borderColor="#090909"
          border="2px"
          _hover={{
            color: "white",
            bgColor: "black",
          }}
          boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
        />
      </Link>
      <Link
        isExternal
        href="https://www.linkedin.com/feed/?trk=sem-ga_campid%3D12619604099_asid%3D122510712920_crid%3D509739556235_kw%3Dlinked_d%3Dc_tid%3Dkwd-103941963_n%3Dg_mt%3De_geo%3D20106_slid%3D"
      >
        <IconButton
          aria-label="linkedin"
          icon={<TiSocialLinkedinCircular />}
          boxSize={{
            base: "2.5rem",
            md: "3rem",
            lg: "3rem",
            xl: "3rem",
          }}
          color="#65CCA9"
          bgColor="#1d1d1d"
          fontSize="60px"
          borderColor="#090909"
          border="2px"
          _hover={{
            color: "white",
            bgColor: "black",
          }}
          boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
        />
      </Link>
    </Flex>
  );
};

export default InvertedSocialButtons;
