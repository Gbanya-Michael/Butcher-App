import React from "react";
import "./Home.scss";
import Container from "../../components/container/Container";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Brands from "../../components/favorite-brands/Brands";
import Process from "../../components/process/Process";
export default function Home() {
  return (
    <>
      <Container>
        <Navbar />
        <Header />
        <Brands />
        <Process />
        <Footer />
      </Container>
    </>
  );
}
