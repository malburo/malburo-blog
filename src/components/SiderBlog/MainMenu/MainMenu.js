import React from "react";
import { Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const MainMenu = (props) => {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="2" icon={<VideoCameraOutlined />}>
        Blog
      </Menu.Item>
      <Menu.Item key="3" icon={<UploadOutlined />}>
        About Me
      </Menu.Item>
    </Menu>
  );
};

export default MainMenu;
