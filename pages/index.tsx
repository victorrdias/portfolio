import React from "react";
import Header from "../components/Header";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills";
import Subhero from "../components/Subhero";
import { projectContent } from "../utils/contentData/ProjectContent";

const index = () => {
  return (
    <>
      <Header />
      <Hero />
      <Subhero />
      <Skills />
      <Projects projectContent={projectContent} />
    </>
  );
};

export default index;
