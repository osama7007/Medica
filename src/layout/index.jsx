import { Layout as AntLayout } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
// wrappw the whole app with the layout component
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import classes from "./layout.module.css";
import SideBar from "../components/sidebar";
import TopBar from "../components/topBar";
const Layout = ({ children }) => {
  return (
    <>
      <AntLayout className="bg-transparent position-relative">
        <SideBar />
        <Navbar />
        <TopBar/>
        <Content className={`${classes.content}`}>{children}</Content>
        <Footer />
      </AntLayout>
    </>
  );
};

export default Layout;
