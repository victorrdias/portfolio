import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
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
      <Projects projectContent={projectContent} />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default index;
