import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const JavaScript = () => {
  return (
    <>
      <Helmet>
        <title>JavaScript Page</title>
        <meta name="description" content="My JavaScript Page" />
      </Helmet>
      <Header />
      <MainContent pageData="JavaScript Page" />
      <Footer />
    </>
  );
};

export default JavaScript;
