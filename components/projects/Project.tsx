import {
  Flex,
  Button,
  Text,
  Image,
  Link,
  SlideFade,
  Fade,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import { ProjectProps } from "../../utils/interface/ProjectProps";

const Project: React.FC<ProjectProps> = ({ image, description, link }) => {
  const ref = useRef(null);
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "0px" },
    { disconnectOnLeave: false }
  );
  return (
    <Flex
      maxW="100%"
      minW="100%"
      as="article"
      gap={{ base: "2", md: "3rem" }}
      direction={{ base: "column", md: "column", lg: "row" }}
    >
      <Link href={link} isExternal>
        <Button
          maxW="100%"
          minW="100%"
          borderRadius="none"
          w="100%"
          h="100%"
          bgColor="#1d1d1d"
          _hover={{
            bgColor: "#1d1d1d",
          }}
        >
          <SlideFade
            offsetY="80px"
            in={inViewport}
            whileHover={{ scale: 1.025 }}
          >
            <Image
              width="100%"
              ref={ref}
              objectFit="contain"
              src={image}
              maxW={{ base: "", md: "", lg: "35rem", xl: "38rem" }}
              minW={{ base: "", md: "", lg: "35rem", xl: "38rem" }}
              alt="project-image"
              h="100%"
            />
          </SlideFade>
        </Button>
      </Link>

      <Flex px={{ base: "1rem", md: "" }}>
        <SlideFade offsetY="100px" delay={0.2} in={inViewport}>
          <Text
            h="100%"
            w="100%"
            fontSize={{ base: "12", md: "16", lg: "16" }}
            lineHeight={{ base: "20px", md: "24px" }}
            fontWeight="normal"
            letterSpacing={1.75}
            color="white"
            textAlign="justify"
          >
            {description}
          </Text>
        </SlideFade>
      </Flex>
    </Flex>
  );
};

export default Project;
