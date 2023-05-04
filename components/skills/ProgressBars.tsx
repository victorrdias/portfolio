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
      <Stack gap="4" as="aside">
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
          >
            ReactJS
          </Text>
          <Progress
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
            size="xs"
            colorScheme="cyan"
            value={100}
          />
        </SlideFade>
        <SlideFade
          offsetX="10px"
          delay={0.9}
          in={inViewport}
          whileHover={{ scale: 1.025 }}
        >
          <Text
            ref={ref}
            color="white"
            fontWeight="normal"
            fontSize={{ base: "15", md: "25", lg: "25" }}
            letterSpacing={1.5}
            lineHeight={{ base: "0,5", md: "1" }}
          >
            Front-end
          </Text>
          <Progress
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
            size="xs"
            colorScheme="purple"
            value={90}
          />
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
            Git & Github
          </Text>
          <Progress
            size="xs"
            colorScheme="pink"
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
            value={90}
          />
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
          <Progress
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
            size="xs"
            colorScheme="messenger"
            value={92}
          />
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
            Backend
          </Text>
          <Progress
            size="xs"
            colorScheme="red"
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
            value={65}
          />
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
            Comunicação e proatividade
          </Text>
          <Progress
            size="xs"
            colorScheme="yellow"
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
            value={90}
          />
        </SlideFade>
      </Stack>
    </>
  );
};

export default ProgressBars;
