import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const Css = () => {
  return (
    <>
        <Helmet>
          <title>Css Page</title>
          <meta
            name="description"
            content="My Css Page"
          />
        </Helmet>
        <Header />
        <MainContent pageData="Css Page" />
        <Footer />
    </>
  );
};

export default Css;