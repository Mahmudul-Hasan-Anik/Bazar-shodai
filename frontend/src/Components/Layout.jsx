import React, { useEffect } from "react";
import Footer from "./Footer/Footer";
import Navbar from './Navbar/Navbar'


const Layout = ({ title = "title", className, children }) => {
  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <>
      <Navbar/>
      <div className={className}>{children}</div>
      <Footer/>
    </>
  );
};

export default Layout;