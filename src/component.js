import React, { Component } from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";

// import "./App.css";
// import Image from "../src/assets/bground.png";
// import {
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
//   ProfileOutlined,
//   UploadOutlined,
//   HomeOutlined,
// } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

class Page extends Component {
  render() {
    return (
      <Layout style={{ height: "100vh" }}>
        <Header style={{ backgroundColor: "grey" }}>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default Page;
