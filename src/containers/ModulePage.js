import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Typography,
  Button,
  Menu,
  Layout,
  Breadcrumb,
} from "antd";
import { CameraVideo, JournalText } from "react-bootstrap-icons";
import { Outlet, Link, json } from "react-router-dom";
import data from "../static/data/data.json";
import { useParams } from "react-router-dom";
import courseData from "../static/data/courseData.json";
const { Header, Sider, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;
const { SubMenu } = Menu;

export default function ModulePage() {
  const { id } = useParams();
  const [moduleId, setModuleId] = useState(1);

  const courses = courseData.courses.find((element) => element.id == id);
  const module = courses.modules.find((element) => element.id == moduleId);


  return (
    <Layout>
      <Sider trigger={null} collapsible style={{ background: "white" }}>
        <div className="demo-logo-vertical" />
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
        >
          {courses.modules.map((modules) => (
            <Menu.Item key={modules.id} onClick={() => setModuleId(modules.id)}>
              Module {modules.id}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 500,
            // background: colorBgContainer,
          }}
        >
          <Row gutter={[16, 16]}>
            <Breadcrumb
          
            >
                 <Breadcrumb.Item><Link to="/">home</Link></Breadcrumb.Item>
                 <Breadcrumb.Item>{courses.course_title}</Breadcrumb.Item>
                 <Breadcrumb.Item>{module.module_title}</Breadcrumb.Item>
            </Breadcrumb>
          
                    <Col span={24}>
                      <Title level={3}>{module.module_title}</Title>
                      <Paragraph>{module.description}</Paragraph>
                    </Col>
                    <Col span={24}>
                      <Card
                        bordered={false}
                        style={{ textAlign: "center", padding: "20px" }}
                      >
                        <a
                          href={module.video_link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <CameraVideo color="royalblue" size={150} />
                        </a>
                        <Title level={4}>{module.video_description}</Title>
                      </Card>
                    </Col>
             

            <Col span={12}>
              <Row style={{ padding: "15px" }}>
                <Col span={2}>
                  <JournalText color="royalblue" size={30} />
                </Col>
                <Col span={22}>
                  <Title level={4} style={{ marginTop: 0 }}>
                    Resources
                  </Title>
                  <Paragraph>
                    Browse Our Collection of Learning Materials for additional
                    support.
                  </Paragraph>
                  <Button>View All</Button>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row style={{ padding: "10px" }}>
                <Col span={2}>
                  <JournalText color="royalblue" size={30} />
                </Col>
                <Col span={22}>
                  <Title level={4} style={{ marginTop: 0 }}>
                    Quiz
                  </Title>
                  <Paragraph>
                    Put your skills to the test. Take our quiz and see how much
                    you remember from your first class. It's a multiple choice
                    questions.
                  </Paragraph>
                  <Button>
                    <Link to={"/quiz/" + courses.id}>Take Quiz</Link>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}
