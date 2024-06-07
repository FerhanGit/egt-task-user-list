/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { User as UserType} from '../types/User';
import { Button, Form, Input, Space } from 'antd';
import { useUpdateUserMutation } from '../features/userSlice.tsx';

interface Props {
    userData: UserType
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


const UserEdit = (props: Props) => {

  const [updateUser, { isLoading }] = useUpdateUserMutation()

 
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
    if (values) {
      const updatedUserData = {id: props.userData.id, ...values}
      updateUser(updatedUserData)
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  const initialValues = {
    name: props.userData.name,
    email: props.userData.email,
    username: props.userData.username,
    phone: props.userData.phone,
    website: props.userData.website,
    company: {
      name: props.userData.company.name,
      catchPhrase: props.userData.company.catchPhrase,
      bs: props.userData.company.bs,

    },
    address: {
      city: props.userData.address.city,
      zipcode: props.userData.address.zipcode,
      suite: props.userData.address.suite,
      street: props.userData.address.street,
      geo: {
        lat: props.userData.address.geo.lat,
        lng: props.userData.address.geo.lng
      }
    },
  };

  return (
    <Form
        {...layout}
        form={form}
        name={`control-hooks-${props.userData.id}`}
        initialValues={initialValues}
        onFinish={onFinish}
        style={{ maxWidth: 800 }}
      >
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="username" label="User Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="Phone" rules={[{ required: false }]}>
          <Input />
        </Form.Item>
        <Form.Item name="website" label="Website" rules={[{ required: false }]}>
          <Input />
        </Form.Item>
      <Form.Item label="Company">
      <Space.Compact>
        <Form.Item
          name={['company', 'name']}
          noStyle
          rules={[{ required: true, message: 'Company Name is required' }]}
        >
          <Input style={{ width: '50%' }} placeholder="Input company name" />
        </Form.Item>
        <Form.Item
          name={['company', 'catchPhrase']}
          noStyle
          rules={[{ required: false }]}
        >
          <Input style={{ width: '50%' }} placeholder="Input company catch Phrase" />
        </Form.Item>
        <Form.Item
          name={['company', 'bs']}
          noStyle
          rules={[{ required: false }]}
        >
          <Input style={{ width: '50%' }} placeholder="Input company BS" />
        </Form.Item>
      </Space.Compact>
    </Form.Item>


      <Form.Item label="Address">
      <Space.Compact>
        <Form.Item
          name={['address', 'city']}
          noStyle
          rules={[{ required: true, message: 'Address City is required' }]}
        >
          <Input style={{ width: '50%' }} placeholder="Input Address city" />
        </Form.Item>
        <Form.Item
          name={['address', 'zipcode']}
          noStyle
          rules={[{ required: false }]}
        >
          <Input style={{ width: '50%' }} placeholder="Input zipcode country" />
        </Form.Item>
        <Form.Item
          name={['address', 'street']}
          noStyle
          rules={[{ required: true, message: 'Address street is required' }]}
        >
          <Input style={{ width: '50%' }} placeholder="Input address street" />
        </Form.Item>
        <Form.Item
          name={['address', 'suite']}
          noStyle
          rules={[{ required: true, message: 'Address suite is required' }]}
        >
          <Input style={{ width: '50%' }} placeholder="Input suite" />
        </Form.Item>
        <Form.Item
          name={['address', 'geo', 'lat']}
          noStyle
          rules={[{ required: false }]}
        >
          <Input style={{ width: '50%' }} placeholder="Input geo LAT" />
        </Form.Item>
        <Form.Item
          name={['address', 'geo', 'lng']}
          noStyle
          rules={[{ required: false }]}
        >
          <Input style={{ width: '50%' }} placeholder="Input geo LNG" />
        </Form.Item>
        
      </Space.Compact>
    </Form.Item>
        <Form.Item {...tailLayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Revert
            </Button>
          </Space>
        </Form.Item>
    </Form>
  )
}

export default UserEdit