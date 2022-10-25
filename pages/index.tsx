import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import MyProjects from "../components/projects/MyProjects";
import ScrollToTop from "../components/scrollToTop";
import Skills from "../components/skills";
import Subhero from "../components/Subhero";
import Main from "../layout/Main";
import { projectContent } from "../utils/contentData/ProjectContent";

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
