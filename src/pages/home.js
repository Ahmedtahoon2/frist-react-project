import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="My Home Page"
          />
      </Helmet>
      <Header />
      <MainContent pageData="Home Page" />
      <Footer />
    </>
  );
};

export default Home;
