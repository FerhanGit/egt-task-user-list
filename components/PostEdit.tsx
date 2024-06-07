/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Post  as PostType} from '../types/Post.tsx';
import { Button, Form, Input, Space } from 'antd';
import { useUpdatePostMutation, useDeletePostMutation } from '../features/userSlice.tsx';

interface Props {
    postData: PostType
}

const { TextArea } = Input;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


const PostEdit = (props: Props) => {

  const [updatePost] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();

 
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
    if (values) {
      const updatedPostData = {id: props.postData.id, ...values}
      updatePost(updatedPostData)
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  const onDelete = (id: number) => {
    console.log(id);
    if (id) {
      deletePost(id)
    }
  };

  const initialValues = {
    title: props.postData.title,
    body: props.postData.body,
  };

  return (
    <Form
        {...layout}
        form={form}
        name={`control-hooks-${props.postData.id}`}
        initialValues={initialValues}
        onFinish={onFinish}
        style={{ maxWidth: 800 }}
      >
        <Form.Item name="title" label="Title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="body" label="Body" rules={[{ required: true }]}>
          <TextArea rows={4} />
        </Form.Item>
      
        <Form.Item {...tailLayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Revert
            </Button> 
            <Button type="primary" htmlType="button" danger onClick={() => {if (window.confirm('Are you sure you wish to delete this post?')) onDelete(props.postData.id)}}>
              Delete Post
            </Button>
          </Space>
        </Form.Item>
    </Form>
  )
}

export default PostEdit