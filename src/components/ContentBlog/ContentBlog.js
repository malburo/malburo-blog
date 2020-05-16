import React from "react";

import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";

import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";

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
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Content>
  );
};

export default ContentBlog;
