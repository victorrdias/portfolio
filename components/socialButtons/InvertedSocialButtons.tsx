import { Fade, Flex, IconButton, Link } from "@chakra-ui/react";

import React, { useRef } from "react";
import { AiFillGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { useInViewport } from "react-in-viewport";

const InvertedSocialButtons: React.FC = () => {
  const ref = useRef(null);
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "0px" },
    { disconnectOnLeave: false }
  );
  return (
    <Flex gap="6" alignItems="center" as="aside">
      <Link href="https://github.com/victorrdias" isExternal>
        <Fade in={inViewport} delay={1} whileHover={{ scale: 1.05 }}>
          <IconButton
            ref={ref}
            color="primaryColor"
            bgColor="#1d1d1d"
            fontSize="60px"
            aria-label="github"
            icon={<AiFillGithub />}
            boxSize={{
              base: "2.5rem",
              md: "2.5rem",
              lg: "2.5rem",
              xl: "2.5rem",
            }}
            borderColor="primaryColor"
            border="2px"
            _hover={{
              color: "primaryColor",
            }}
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
          />
        </Fade>
      </Link>
      <Link
        isExternal
        href="
https://wa.me/+5517991585836?text=Ol%C3%A1!%20Eu%20sou%20o%20Vitor,%20muito%20prazer!
"
      >
        <Fade in={inViewport} delay={1.2} whileHover={{ scale: 1.05 }}>
          <IconButton
            aria-label="whatsapp"
            icon={<AiOutlineWhatsApp />}
            boxSize={{
              base: "2.5rem",
              md: "2.5rem",
              lg: "2.5rem",
              xl: "2.5rem",
            }}
            color="primaryColor"
            bgColor="#1d1d1d"
            fontSize="45px"
            borderColor="primaryColor"
            border="2px"
            _hover={{
              color: "primaryColor",
            }}
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
          />
        </Fade>
      </Link>
      <Link isExternal href="https://www.linkedin.com/in/vitor-dias-a89336253/">
        <Fade in={inViewport} delay={1.4} whileHover={{ scale: 1.05 }}>
          <IconButton
            aria-label="linkedin"
            icon={<TiSocialLinkedinCircular />}
            boxSize={{
              base: "2.5rem",
              md: "2.5rem",
              lg: "2.5rem",
              xl: "2.5rem",
            }}
            color="primaryColor"
            bgColor="#1d1d1d"
            fontSize="60px"
            borderColor="primaryColor"
            border="2px"
            _hover={{
              color: "primaryColor",
            }}
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
          />
        </Fade>
      </Link>
    </Flex>
  );
};

export default InvertedSocialButtons;
