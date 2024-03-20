import Header from "../Header/Header";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import CustomCursor from "../CustomCursor/CustomCursor";

const Layout = ({ phoneno }) => {
  return (
    <div>
      <CustomCursor />
      <Header phoneNumber={phoneno} />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;
