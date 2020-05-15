import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  ProfileOutlined,
  AuditOutlined,
} from "@ant-design/icons";

const MainMenu = (props) => {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="2" icon={<ProfileOutlined />}>
        Blog
      </Menu.Item>
      <Menu.Item key="3" icon={<AuditOutlined />}>
        About Me
      </Menu.Item>
    </Menu>
  );
};

export default MainMenu;
