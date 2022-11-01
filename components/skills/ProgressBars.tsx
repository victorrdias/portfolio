import { Flex, Progress, SlideFade, Stack, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";

const ProgressBars: React.FC = () => {
  const ref = useRef(null);
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "0px" },
    { disconnectOnLeave: false }
  );
  return (
    <>
      {" "}
      <Stack gap="4" px="5" as="aside">
        <SlideFade
          offsetX="10px"
          delay={0.8}
          in={inViewport}
          whileHover={{ scale: 1.025 }}
        >
          <Text
            color="white"
            fontWeight="normal"
            fontSize={{ base: "15", md: "25", lg: "25" }}
            letterSpacing={1.5}
            lineHeight={{ base: "0,5", md: "1" }}
            ref={ref}
          >
            ReactJS
          </Text>
          <Progress size="xs" colorScheme="cyan" value={65}></Progress>
        </SlideFade>
        <SlideFade
          offsetX="10px"
          delay={0.9}
          in={inViewport}
          whileHover={{ scale: 1.025 }}
        >
          <Text
            color="white"
            fontWeight="normal"
            fontSize={{ base: "15", md: "25", lg: "25" }}
            letterSpacing={1.5}
            lineHeight={{ base: "0,5", md: "1" }}
          >
            Front-end
          </Text>
          <Progress size="xs" colorScheme="purple" value={80}></Progress>
        </SlideFade>
        <SlideFade
          offsetX="10px"
          delay={1}
          in={inViewport}
          whileHover={{ scale: 1.025 }}
        >
          <Text
            color="white"
            fontWeight="normal"
            fontSize={{ base: "15", md: "25", lg: "25" }}
            letterSpacing={1.5}
            lineHeight={{ base: "0,5", md: "1" }}
          >
            Back-end
          </Text>
          <Progress size="xs" colorScheme="pink" value={40}></Progress>
        </SlideFade>
        <SlideFade
          offsetX="10px"
          delay={1.1}
          in={inViewport}
          whileHover={{ scale: 1.025 }}
        >
          <Text
            color="white"
            fontWeight="normal"
            fontSize={{ base: "15", md: "25", lg: "25" }}
            letterSpacing={1.5}
            lineHeight={{ base: "0,5", md: "1" }}
          >
            Chakra-UI
          </Text>
          <Progress size="xs" colorScheme="messenger" value={92}></Progress>
        </SlideFade>
      </Stack>
    </>
  );
};

export default ProgressBars;
