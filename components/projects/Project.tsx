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
      gap={{ base: "2", md: "5" }}
      direction={{ base: "column", md: "column", lg: "row" }}
    >
      <Link href={link} isExternal>
        <Button
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
              ref={ref}
              objectFit="contain"
              src={image}
              minH="100%"
              minW="100%"
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
            minW={{ base: "100%", md: "100%", lg: "40vw" }}
            maxW={{ base: "100vw", md: "100%", lg: "40vw" }}
            w="90%"
            fontSize={{ base: "14", md: "20", lg: "20" }}
            lineHeight="30px"
            fontWeight="normal"
            letterSpacing={2}
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
