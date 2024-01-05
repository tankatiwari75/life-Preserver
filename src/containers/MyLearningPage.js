import React from "react";
import { Row, Col, Typography, Card } from "antd";
import { JournalBookmarkFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import data from "../static/data/courseData.json";

const { Title ,Paragraph} = Typography;
export default function MyLearningPage() {
  return (
    <Row  gutter={[24,24]}>
      <Col span={8} style={{ textAlign: "center" }}>
        <Title level={5}>Enrolled Courses</Title>
        <Title level={2}>6</Title>
      </Col>
      <Col span={8} style={{ textAlign: "center" }}>
        <Title level={5}>In Progress Courses</Title>
        <Title level={2}>1</Title>
      </Col>
      <Col span={8} style={{ textAlign: "center" }}>
        <Title level={5}> Completed Courses</Title>
        <Title level={2}>2</Title>
      </Col>
      <Col span={24}>
      <Title level={3}>In Progress</Title>
      </Col>
      {data.courses.map((item) => (
        <Col span={8}>
          <Card
            title={item.course_title}
            bordered={false}
            style={{ textAlign: "center" }}
            hoverable
          >
            <JournalBookmarkFill color="royalblue" size={96} />
            <Paragraph
              style={{ marginTop: "2rem ", fontSize: "1rem" }}
              ellipsis={{
                rows: 2,
                expandable: true,
                symbol: "more",
              }}
            >
              {item.description}
            </Paragraph>
            <Link to={"/module/" + item.id} style={{ marginTop: "2rem" }}>
              Continue
            </Link>
          </Card>
        </Col>
      ))}
      <Col span={24}>
      <Title level={3}>Completed</Title>
      </Col>
      {data.courses.map((item) => (
        <Col span={8}>
          <Card
            title={item.course_title}
            bordered={false}
            style={{ textAlign: "center" }}
            hoverable
          >
            <JournalBookmarkFill color="royalblue" size={96} />
            <Paragraph
              style={{ marginTop: "2rem ", fontSize: "1rem" }}
              ellipsis={{
                rows: 2,
                expandable: true,
                symbol: "more",
              }}
            >
              {item.description}
            </Paragraph>
            <Link to={"/module/" + item.id} style={{ marginTop: "2rem" }}>
              Restart
            </Link>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
