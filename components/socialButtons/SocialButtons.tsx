import { Flex, IconButton, Link } from "@chakra-ui/react";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiOutlineWhatsApp } from "react-icons/ai";

const SocialButtons = () => {
  return (
    <Flex gap="6" direction="column" alignItems="center">
      <Link href="https://github.com/victorrdias" isExternal>
        <IconButton
          color="#090909"
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
          color="#090909"
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
          color="#090909"
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

export default SocialButtons;
