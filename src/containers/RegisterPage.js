import React from 'react';
import "./loginpage.css";
import picture1 from "../static/images/cpr02.webp";
import {
  Row,
  Button,
  Typography,
  Form,
  Input,
  message
} from "antd";


export default function RegisterPage() {
  const {Title}=Typography;
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async(values)=>{
    const { fullname, email, phoneno,address, password} = values;
    try{
      const response = await fetch('http://localhost:3001/api/signup', {
        method: 'POST',
        crossDomain:true,
        headers: {
          'Content-Type': 'application/json',
          Accept:"application/json",
          "Access-Control-Allow-Origin":"*"
        },
        body: JSON.stringify({ 
          fullname, 
          email,
          address,
          phoneno ,
          password 
        }),
      })
  
      if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem("token", data.token);
        window.location.replace("/login")
  
      } else {
        const data = await response.json();
        console.log('Register failed',data);
        messageApi.open({
          type: 'error',
          content: data.message,
        });
      }
    }catch(error) {
      console.log('here')
      messageApi.open({
        type: 'error',
        content: error.message,
      });
      }
  }
  
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <>
    {contextHolder}
    <>
    <div
     style={{
       height: "80%",
       display: "flex",
       justifyContent: "center",
       position: "relative",
     }}
   >
     <img
       style={{
         height: "100vh",
         width: "100%",
         backgroundPosition: "center",
         backgroundRepeat: "no-repeat",
         backgroundSize: "cover",
         position: "relative",
       }}
       src={picture1}
       alt=""
     ></img>
     <Row
       style={{
         height: 200,
         width: 500,
         marginTop:'2%',
         position: "absolute",
       }}
     >
   <div className="container">
   <Title level={2}>Sign Up</Title>
   <Form
   name="basic"
   labelCol={{
     span: 24,
   }}
   wrapperCol={{
     span: 24,
   }}
   initialValues={{
     remember: true,
   }}
   style={{padding:"8px",marginBottom:"8px"}}
   layout="vertical"
   onFinish={onFinish}
   onFinishFailed={onFinishFailed}
   autoComplete="off"
 >

   <Form.Item
     label="Full Name"
     name="fullname"
     rules={[
       {
         required: true,
         message: 'Please input your Full Name!',
       },
     ]}
   >
     <Input />
   </Form.Item>
   <Form.Item
     label="Email"
     name="email"
     rules={[
       {
         required: true,
         message: 'Please input your email!',
       },
     ]}
   >
   <Input />
   </Form.Item>
   <Form.Item
     label="Address"
     name="address"
     rules={[
       {
         required: true,
         message: 'Please input your Address!',
       },
     ]}
   >
     <Input />
   </Form.Item>
       
   

   <Form.Item
     label="Phone No."
     name="phoneno"
     rules={[
       {
         required: true,
         message: 'Please input your Phone Number!',
       },
     ]}
   >
     <Input />
   </Form.Item>
   <Form.Item
     label="password"
     name="password"
     rules={[
       {
         required: true,
         message: 'Please input your Password!',
       },
     ]}
   >
     <Input.Password />
   </Form.Item>
   
   <Form.Item wrapperCol={{ span: 14, offset: 4 } }>
   <Button type="primary" shape="round" htmlType="submit">Register</Button>
   </Form.Item>
</Form>
 </div>
     </Row>
   </div>
   </>
   </>
  )
}

