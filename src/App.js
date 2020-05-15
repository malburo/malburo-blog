import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Layout } from "antd";

import SiderBlog from "./components/SiderBlog/SiderBlog";
import HeaderBlog from "./components/HeaderBlog/HeaderBlog";
import ContentBlog from "./components/ContentBlog/ContentBlog";

class App extends React.Component {
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
      <Layout style={{ minHeight: "100vh" }}>
        <SiderBlog collapsed={this.state.collapsed}></SiderBlog>
        <Layout className="site-layout">
          <HeaderBlog
            collapsed={this.state.collapsed}
            toggle={this.toggle}
          ></HeaderBlog>
          <ContentBlog></ContentBlog>
        </Layout>
      </Layout>
    );
  }
}

export default App;
