import React, { useState } from "react";
import {
  HomeOutlined,
  BookOutlined,
  MessageOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import data from "../static/data/courseData.json";

import { Layout, Menu, Button, theme } from "antd";
import { Outlet, Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

const LayoutComponent = () => {
  const decodedToken = jwt_decode(window.sessionStorage.getItem("token"));

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.replace("/login");
  };

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem(<Link to="/">Home</Link>, "1", <HomeOutlined />),
    data.courses.map((item) =>
      getItem(item.course_title, "9", <MessageOutlined />)
    ),
    getItem("Course", "sub1", <BookOutlined />, [
      getItem(<Link to={`module/1`}>Module 1</Link>, "3"),
      getItem(<Link to={`module/2`}>Module 2</Link>, "4"),
    ]),

    getItem("Get involved Forum", "6", <MessageOutlined />),
    getItem("FAQS", "7", <VideoCameraOutlined />),
  ];
  const items1 = [
    getItem(<Link to="/">Courses</Link>, "1"),
    getItem(<Link to="/mylearning">My Learning</Link>, "2"),
    getItem(<Link to="/contactus">Contact Us</Link>, "3"),
    getItem(<span onClick={() => handleLogout()}>LogOut</span>),
  ];

  return (
    <Layout>
      <Header>
        <span style={{ fontSize: "20px", color: "white" }}>
          {decodedToken.fullname}
        </span>
        <Menu
          style={{ float: "right" }}
          theme="dark"
          mode="horizontal"
          items={items1}
        />
      </Header>
      <Layout>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 500,
            // background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default LayoutComponent;
