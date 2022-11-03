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
      gap={{ base: "2", md: "1rem", lg: "6rem" }}
      direction={{ base: "column", md: "column", lg: "row" }}
    >
      <Link href={link} isExternal>
        <Button
          p="0"
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
              maxW={{ base: "", md: "", lg: "33rem", xl: "37.5rem" }}
              minW={{ base: "", md: "", lg: "33rem", xl: "37.5rem" }}
              alt="project-image"
              h="100%"
            />
          </SlideFade>
        </Button>
      </Link>

      <Flex border="1px" borderColor="primaryColor">
        <SlideFade offsetY="100px" delay={0.2} in={inViewport}>
          <Text
            h="18rem"
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
