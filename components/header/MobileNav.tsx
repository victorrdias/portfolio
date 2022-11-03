import { Button, Flex, SlideFade } from "@chakra-ui/react";
import Hamburger from "hamburger-react";
import React, { useRef, useState } from "react";
import { useInViewport } from "react-in-viewport";

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState();
  const ref = useRef(null);
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "0px" },
    { disconnectOnLeave: false }
  );
  return (
    <Flex
      as="aside"
      display={{ base: "flex", md: "none" }}
      w="100%"
      h="100%"
      align="flex-end"
      direction="column"
    >
      <Hamburger toggled={isOpen} toggle={setIsOpen} color="white" size={20} />
      {isOpen ? (
        <Flex
          direction="column"
          align="center"
          w="100%"
          gap="2"
          pb="2"
          ref={ref}
        >
          <SlideFade offsetX="80px" in={inViewport} delay={0.1}>
            <Button
              variant="invisible"
              color="white"
              borderRadius="10"
              h="3vh"
              boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
              _hover={{
                color: "#65CCA9",
              }}
              fontWeight="normal"
              letterSpacing={1.5}
            >
              Sobre
            </Button>
          </SlideFade>
          <SlideFade offsetX="80px" in={inViewport} delay={0.225}>
            <Button
              variant="invisible"
              color="white"
              borderRadius="10"
              h="3vh"
              boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
              _hover={{
                color: "#65CCA9",
              }}
              fontWeight="normal"
              letterSpacing={1.5}
            >
              Habilidades
            </Button>
          </SlideFade>
          <SlideFade offsetX="80px" in={inViewport} delay={0.35}>
            <Button
              variant="invisible"
              color="white"
              borderRadius="10"
              h="3vh"
              boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
              _hover={{
                color: "#65CCA9",
              }}
              fontWeight="normal"
              letterSpacing={1.5}
            >
              Projetos
            </Button>
          </SlideFade>
        </Flex>
      ) : (
        <></>
      )}
    </Flex>
  );
};

export default MobileNav;
