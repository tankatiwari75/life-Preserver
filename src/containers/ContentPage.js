import React from "react";
import { Row, Col, Card, Typography, Button } from "antd";
import {
  JournalBookmarkFill,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import data from "../static/data/courseData.json";

const { Title, Paragraph } = Typography;
export default function Contentpage() {
  return (
    <Row gutter={[24, 24]}>
      <Col
        span={24}
        style={{ height: 400, background: "#e0ebeb", textAlign: "center" }}
      >
        <Title level={3} style={{ marginTop: 100 }}>
          Course For Toronto FC
        </Title>
        <Title style={{ marginTop: "4px" }}>
          First Aid and CPR Training for Toronto FC
        </Title>
        <Link to="/module/3">
          <Button type="primary" ghost>
            Go To Course
          </Button>
        </Link>
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
              Get Started
            </Link>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
