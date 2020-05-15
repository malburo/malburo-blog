import React from "react";

import BlogList from "./BlogList/BlogList";
import { Layout } from "antd";

const { Content } = Layout;

const ContentBlog = (props) => {
  return (
    <Content
      className="site-layout-background"
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
      }}
    >
      <BlogList />
    </Content>
  );
};

export default ContentBlog;
