import React from "react";
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("../components/hero/Hero"));
const Header = dynamic(() => import("../components/header/Header"));
const Footer = dynamic(() => import("../components/footer/Footer"));
const MyProjects = dynamic(() => import("../components/projects/MyProjects"));
const ScrollToTop = dynamic(() => import("../components/scrollToTop"));
const Skills = dynamic(() => import("../components/skills"));
const Subhero = dynamic(() => import("../components/Subhero"));
import Main from "../layout/Main";
import { projectContent } from "../utils/contentData/ProjectContent";
import { Flex } from "@chakra-ui/react";

const index = () => {
  return (
    <Main title="Vitor Dias.">
      <Header />
      <Hero />
      <Subhero />
      <Skills />
      <MyProjects projectContent={projectContent} />
      <Footer />
      <ScrollToTop />
    </Main>
  );
};

export default index;
