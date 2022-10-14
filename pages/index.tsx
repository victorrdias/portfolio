import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import Hero from "../components/hero/Hero";
import Subhero from "../components/Subhero";

const index = () => {
  return (
    <>
      <Header />
      <Hero />
      <Subhero />
    </>
  );
};

export default index;
