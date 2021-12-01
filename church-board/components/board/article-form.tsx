import React from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import styled from "styled-components";
import {Router} from "next/router";

interface IArticleForm {
  title: string;
  name: string;
  email: string;
  age: number;
  context: string;
}
const StyledForm = styled(Form)`
  margin-top: 32px;
`;

const StyledFormItem = styled(Form.Item)`
  max-width: 80%;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const ArticleForm = () => {
  const onFinish = (values: any) => {
    console.log(values);
    fetch('/api/add-article', {
      method: 'post',
      body: JSON.stringify(values)
    }).then(res => {
      window.location.href = '/main/board'
    })
  };

  return (
    <StyledForm {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <StyledFormItem name={['article', 'name']} label="Name" rules={[{ required: true }]}>
        <Input />
      </StyledFormItem>
      <StyledFormItem name={['article', 'email']} label="Email" rules={[{ type: 'email' }]}>
        <Input />
      </StyledFormItem>
      <StyledFormItem name={['article', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
        <InputNumber />
      </StyledFormItem>
      <StyledFormItem name={['article', 'introduction']} label="Introduction">
        <Input.TextArea rows={20} />
      </StyledFormItem>
      <StyledFormItem wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <ButtonWrapper>
          <Button  type="primary" htmlType="submit">
            Submit
          </Button>

          <Button type="default" href="/main/board" >
            Cancel
          </Button>
        </ButtonWrapper>
      </StyledFormItem>
    </StyledForm>
  );
};
export default ArticleForm;
