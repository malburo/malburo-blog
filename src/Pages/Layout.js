import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";

import SiderBlog from "../components/SiderBlog/SiderBlog";
import HeaderBlog from "../components/HeaderBlog/HeaderBlog";
import ContentBlog from "../components/ContentBlog/ContentBlog";

import { BrowserRouter as Router } from "react-router-dom";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }
  toggle = () => {
    console.log(this.state.collapsed);
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <SiderBlog collapsed={this.state.collapsed} />
          <Layout className="site-layout">
            <HeaderBlog collapsed={this.state.collapsed} toggle={this.toggle} />
            <ContentBlog />
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default Index;
