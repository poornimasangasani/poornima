import React, { Component } from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import AppRoutes from "./AppRoutes";
import { BrowserRouter as Router, Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;

class Page extends Component {
  render() {
    return (
      <Router>
        <Layout style={{ height: "100vh" }}>
          <Header>
            <span className="nameHeader">Poornima</span>
            <Link to="/">Home</Link> &nbsp; &nbsp;
            <Link to="/resume">Resume</Link> &nbsp; &nbsp;
            <Link to="/about">About</Link>
          </Header>
          <Content>
            <AppRoutes />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Router>
    );
  }
}

export default Page;
