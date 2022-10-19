import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import MyProjects from "../components/projects/MyProjects";
import Projects from "../components/projects/Projects";
import ScrollToTop from "../components/scrollToTop";
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
      <MyProjects projectContent={projectContent} />
      {/* <Projects projectContent={projectContent} /> */}
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default index;
