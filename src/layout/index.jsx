import { Layout as AntLayout } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { useEffect } from "react";
// wrappw the whole app with the layout component
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import classes from "./layout.module.css";
import SideBar from "../components/sidebar";
import TopBar from "../components/topBar";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [pageInView, setPageInView] = useState("");
  const location = useLocation();

  const isAuth = useSelector((state) => state.auth.isAuth);
  useEffect(() => {
    setPageInView(location.pathname.split("/")[1]);
  }, [location.pathname]);
  return (
    <>
      <AntLayout className="bg-transparent position-relative">
        <SideBar
          collapsed={isSidebarCollapsed}
          setCollapsed={setIsSidebarCollapsed}
        />
        <Navbar />
        <TopBar />
        <Content
          className={`${classes.content} ${
            isSidebarCollapsed ? "" : classes.open
          }
          ${isAuth ? classes.m_sidebar : ""}
      }`}
        >
          {children}
        </Content>
        <Footer />
      </AntLayout>
    </>
  );
};

export default Layout;
