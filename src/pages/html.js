import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const Html = () => {
  return (
    <>
      <Helmet>
        <title>Html Page</title>
        <meta name="description" content="My Html Page" />
      </Helmet>
      <Header />
      <MainContent pageData="Html Page" />
      <Footer />
    </>
  );
};

export default Html;
