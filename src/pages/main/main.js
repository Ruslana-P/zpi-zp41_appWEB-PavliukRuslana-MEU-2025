import React from "react";
import Header from "../../components/header/header";
import HeroSection from "../../components/heroSection/heroSection";
import PlantTable from "../../components/plantTable/plantTable";
import ContactForm from "../../components/contactForm/ContactForm";
import AdditionalInfo from "../../components/additionalInfo/AdditionalInfo";
import ProjectInfoBtn from "../../components/projectInfo/ProjectInfoBtn";
import { PageCnt } from "./styled";

const MainPage = () => {
  return (
    <PageCnt>
      <Header />
      <HeroSection />
      <PlantTable />
      <ContactForm />
      <AdditionalInfo />
      <ProjectInfoBtn />
    </PageCnt>
  );
};

export default MainPage;
