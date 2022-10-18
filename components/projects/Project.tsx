import { Flex, Button, Text, Image, Link } from "@chakra-ui/react";
//import Link from "next/link";
import React from "react";
import { TiSocialSkype } from "react-icons/ti";
import { ProjectProps } from "../../utils/interface/ProjectProps";

const Project: React.FC<ProjectProps> = ({ image, description, link }) => {
  const handleOnClick = () => {
    if (image === "gastura.svg") {
    }
  };
  return (
    <Flex gap={{ base: "5", md: "10" }} pt={{ base: "4", md: "6", lg: "8" }}>
      <Link href={link} isExternal>
        <Button
          boxSize={{ base: "5rem", sm: "7rem", md: "8rem", lg: "10rem" }}
          minW={{ base: "5rem", sm: "7rem", md: "8rem", lg: "10rem" }}
          bgColor="#333333"
          // bgColor="gray.100"
          borderRadius="20"
          p="1"
          _hover={{
            opacity: "0.7",
          }}
          boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
          border="2px"
          borderColor="black"
        >
          <Image
            src={image}
            alt="project-image"
            borderRadius="20"
            h="100%"
            border="2px"
            borderColor="#65CCA9"
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
          />
        </Button>
      </Link>
      <Text
        overflowY="auto"
        bgColor="#333333"
        //bgColor="gray.100"
        border="2px"
        borderColor="#65CCA9"
        maxH={{ base: "5rem", sm: "7rem", md: "8rem", lg: "10rem" }}
        borderRadius="20"
        w="100%"
        textAlign="center"
        p="0.5rem"
        fontSize={{ base: "12", md: "16", lg: "18" }}
        lineHeight="30px"
        fontWeight="semibold"
        letterSpacing={1}
        color="white"
        boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      >
        {description}
      </Text>
    </Flex>
  );
};

export default Project;
