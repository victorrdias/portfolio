import {
  Flex,
  Button,
  Text,
  Image,
  Link,
  Fade,
  SlideFade,
  ScaleFade,
  Slide,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { ProjectProps } from "../../utils/interface/ProjectProps";

const Project: React.FC<ProjectProps> = ({ image, description, link }) => {
  const { isOpen, onOpen, onToggle } = useDisclosure();

  return (
    <Flex
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
          <Image
            objectFit="contain"
            src={image}
            minH="100%"
            minW="100%"
            alt="project-image"
            h="100%"
          />
        </Button>
      </Link>
      <Flex px={{ base: "1rem", md: "" }}>
        <Text
          h="100%"
          minW={{ base: "100%", md: "100%", lg: "40vw" }}
          maxW={{ base: "", md: "40vw" }}
          w="100%"
          fontSize={{ base: "12", md: "16", lg: "16" }}
          lineHeight="30px"
          fontWeight="normal"
          letterSpacing={2}
          color="white"
        >
          {description}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Project;
