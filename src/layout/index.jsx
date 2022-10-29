import { Layout as AntLayout } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
// wrappw the whole app with the layout component
const Layout = ({ children }) => {
  return (
    <AntLayout className="w-100 bg-transparent">
      <Navbar />
      <Content className="w-100">{children}</Content>
      <Footer>

      </Footer>
    </AntLayout>
  );
};

export default Layout;
