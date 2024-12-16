import React from "react";
import HeroSection from "../../components/heroSection/heroSection";
import PlantTable from "../../components/plantTable/plantTable";
import ContactForm from "../../components/contactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import ProjectInfoBtn from "../../components/projectInfo/ProjectInfoBtn";
import { PageCnt } from "./styled";
import Header from "../../components/header/header";

const MainPage = () => {
  return (
    <>
      <Header />
      <PageCnt>
        <HeroSection />
        <PlantTable />
        <ContactForm />

        <ProjectInfoBtn />
      </PageCnt>
      <Footer />
    </>
  );
};

export default MainPage;
