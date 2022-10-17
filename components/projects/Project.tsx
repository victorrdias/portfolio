import { Flex, Button, Text, Image } from "@chakra-ui/react";
import React from "react";
import { ProjectProps } from "../../utils/interface/ProjectProps";

const Project: React.FC<ProjectProps> = ({ image, description }) => {
  const handleOnClick = () => {
    if (image === "gastura.svg") {
    }
  };
  return (
    <Flex gap={{ base: "5", md: "10" }} pt={{ base: "4", md: "6", lg: "8" }}>
      <Button
        boxSize={{ base: "5rem", sm: "7rem", md: "8rem", lg: "10rem" }}
        minW={{ base: "5rem", sm: "7rem", md: "8rem", lg: "10rem" }}
        bgColor="#B0C799"
        borderRadius="20"
        onClick={() => {
          handleOnClick();
        }}
        p="1"
      >
        <Image
          src={image}
          alt="project-image"
          borderRadius="20"
          h="100%"
          border="2px"
        />
      </Button>
      <Text
        overflowY="auto"
        bgColor="#B0C799"
        maxH={{ base: "5rem", sm: "7rem", md: "8rem", lg: "10rem" }}
        borderRadius="20"
        w="100%"
        textAlign="center"
        p="0.5rem"
        fontSize={{ base: "12", md: "16", lg: "18" }}
        lineHeight="30px"
        fontWeight="semibold"
        letterSpacing={1}
        color="black"
      >
        {description}
      </Text>
    </Flex>
  );
};

export default Project;
