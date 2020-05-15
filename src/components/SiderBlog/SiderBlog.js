import React from "react";

import Logo from "./Logo/Logo";
import MainMenu from "./MainMenu/MainMenu";

import { Layout } from "antd";

const { Sider } = Layout;

const SiderBlog = (props) => {
  const { collapsed } = props;
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Logo></Logo>
      <MainMenu></MainMenu>
    </Sider>
  );
};

export default SiderBlog;
