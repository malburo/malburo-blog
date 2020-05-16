import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  ProfileOutlined,
  AuditOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";

const MainMenu = (props) => {
  return (
    <Menu theme="dark" mode="inline">
      <Menu.Item key="1" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<ProfileOutlined />}>
        <Link to="/blog">Blog</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<AuditOutlined />}>
        <Link to="/about">about</Link>
      </Menu.Item>
    </Menu>
  );
};

export default MainMenu;
