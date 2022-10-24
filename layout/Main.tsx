import { Flex } from "@chakra-ui/react";
import React from "react";
import Head from "next/head";

const Main: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
  ...mainProps
}) => {
  return (
    <Flex
      as="main"
      m="0 auto"
      direction="column"
      maxW="100vw"
      minH="100vh"
      {...mainProps}
    >
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </Flex>
  );
};

export default Main;
