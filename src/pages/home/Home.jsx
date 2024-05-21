import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import { Header } from "../../components/header/Header.jsx";
import Featured from "../../components/featured/Featured.jsx";
import Propertylist from "../../components/propertyList/propertylist.jsx";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties.jsx";
import MailList from "../../components/maillist/MailList.jsx";
import Footer from "../../components/foooter/Footer.jsx";
<Featured/>
const Home = () => {
  return (
  <>
  <Navbar />
  <Header/>
  <div className="homeContainer">
    <Featured/>
    <h1 className="homeTitle">Browse by property type </h1>
    <Propertylist/>
    <h1 className="homeTitle">Home guest love </h1>
    <FeaturedProperties/>
    <MailList/>

    

  <Footer/>
  </div>

  </>
  );
};

export default Home;
