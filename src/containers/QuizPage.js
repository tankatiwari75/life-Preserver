import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../static/data/data.json";
import { Row, Col, Button, Radio, Form, Space, Modal, Result ,Progress} from "antd";
import { SmileOutlined } from "@ant-design/icons";
import jwt_decode from "jwt-decode";
import "./quizpagecss.css";

export default function QuizPage() {
  const { id } = useParams();

  let score = 0;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [result, setResult] = useState(0);
  const decodedToken = jwt_decode(window.sessionStorage.getItem('token'));
  const item = data.modules.find((element) => element.id == id);

  const onFinish = async (values) => {
    Object.keys(values).forEach(function (key, index) {
      if (values[key].option == values[key].answer) {
        score++;
      }
    });
 
    try {
      const response = await fetch(
        `http://localhost:3001/api/update/${decodedToken.id}`,
        {
          method: "PATCH",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            progress: {
              quiz_attempt: 1,
              score: score,
              module:id
            },
          }),
        }
      );

      if (response.ok) {
      } else {
      }
    } catch (error) {}

    setIsModalOpen(true);
    setResult((score / 3) * 100);
  };
  const cancelModal = () => {
    setResult(0);
    setIsModalOpen(false);
  };

  return (
    <>
      <Row gutter={[24, 24]} className="quiz-container">
        <Form style={{ display: "block" }} onFinish={onFinish}>
          {item.quizzes.map((data) => (
            <Col span={24} key={data.question}>
              <p className="question"> {data.question}</p>
              <Form.Item name={data.question}>
                <Radio.Group size="large" style={{ fontSize: "2rem" }}>
                  {data.options.map((option) => (
                    <>
                      <Radio
                        value={{ option, answer: data.correct_answer }}
                        className="input"
                        style={{ padding: 6 }}
                      >
                        <span style={{ marginLeft: "6px" }}>{option}</span>
                      </Radio>

                      <br />
                    </>
                  ))}
                </Radio.Group>
              </Form.Item>
            </Col>
          ))}
          <Col span={24}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Col>
        </Form>
        <Modal
          open={isModalOpen}
          footer={null}
          onCancel={() => setIsModalOpen(false)}
        >
          <Result
            icon={ <Progress type="circle" percent={result.toFixed(2)} />}
            title={result<50? "You can do better ":'WELL DONE!!' }
            extra={
              [
              <Button type="primary" onClick={() => cancelModal()}>
                Next
              </Button>,
               <Button key="buy"><Link to="/certificate" state={{module_title:item.module_title,score}}>View Certificate</Link></Button>]
            }
          />
        </Modal>
      </Row>
    </>
  );
}
