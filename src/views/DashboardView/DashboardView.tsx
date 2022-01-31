import React from "react";

import { Container } from "./dashboard-view.styles";

import Navbar from "./../../components/Navbar/Navbar";
import UserMetrics from "./../../components/UserMetrics/UserMetrics";
import ClassificationBox from "../../components/ClassificationBox/ClassificationBox";
import Footer from "../../components/Footer/Footer";

export default function DashboardView() {
  return (
    <>
      <Navbar />
      <Container>
        {/* <UserMetrics /> */}
        <ClassificationBox />
      </Container>
      <Footer />
    </>
  );
}
