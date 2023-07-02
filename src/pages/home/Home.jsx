import React from "react";
import "./Home.scss";
import Container from "../../components/container/Container";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Brands from "../../components/favorite-brands/Brands";
import Process from "../../components/process/Process";
import About_us from "../../components/about-us/About_us";
import Testimonial from "../../components/testimonial/Testimonial";
import Recent from "../../components/recent-products/Recent";
import Categories from "../../components/categories/Categories";
import Faq from "../../components/faq/Faq";

export default function Home() {
  return (
    <>
      <Container>
        <Navbar />
        <Header />
        <Brands />
        <Process />
        <About_us />
        <Testimonial />
        <Recent />
        <Categories />
        <Faq />
        <Footer />
      </Container>
    </>
  );
}
