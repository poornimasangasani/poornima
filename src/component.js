import React from "react";
import { Layout, Drawer } from "antd";
import "antd/dist/antd.css";
import { FullscreenOutlined } from "@ant-design/icons";
import AppRoutes from "./AppRoutes";
import { BrowserRouter as Router, Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;

class Page extends React.PureComponent {
  state = {
    visible: false,
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <Router>
        <Layout style={{ height: "100vh" }}>
          <Header style={{ color: "white", backgroundColor: "#19191A" }}>
            <div>
              <span>Poornima</span>
            </div>
            <div className="allLinksMob">
              <FullscreenOutlined onClick={() => this.showDrawer()} />
            </div>
            <div className="allLinks">
              <Link to="/poornima">Home</Link> &nbsp; &nbsp;
              <Link to="/poornima/resume">Resume</Link> &nbsp; &nbsp;
              <Link to="/poornima/about">About</Link>
            </div>
          </Header>
          <Content>
            <AppRoutes />
          </Content>
          <Footer
            className="footer"
            style={{
              backgroundColor: "#19191a",
              color: "white",
              position: "fixed",
              bottom: 0,
              width: "100%",
            }}
          >
            @ 2020 Poornima
          </Footer>
        </Layout>

        <Drawer
          width={200}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", width: "40px" }}>
            <Link to="/poornima" onClick={this.onClose}>
              Home
            </Link>{" "}
            &nbsp;
            <Link to="/poornima/resume" onClick={this.onClose}>
              Resume
            </Link>{" "}
            &nbsp;
            <Link to="/poornima/about" onClick={this.onClose}>
              About
            </Link>
          </div>
        </Drawer>
      </Router>
    );
  }
}

export default Page;
