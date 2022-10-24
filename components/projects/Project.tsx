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
      gap={{ base: "2", md: "5" }}
      direction={{ base: "column", md: "row" }}
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
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
          />
        </Button>
      </Link>
      <Flex px={{ base: "1rem", md: "" }}>
        <Text
          bgColor="#333333"
          minW="40vw"
          w="100%"
          textAlign="center"
          p="1rem"
          fontSize={{ base: "12", md: "16", lg: "18" }}
          lineHeight="30px"
          fontWeight="normal"
          letterSpacing={2}
          color="white"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
        >
          {description}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Project;
