import './index.scss'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Input, Button, Checkbox, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import BaseConfig from '@/utils/config.jsx'
import { userRegister, userLogin } from '@/api/user.jsx'

export default function Login() {
  const history = useHistory()

  async function loginFn(values) {
    const user = {
      username: values.username,
      password: values.password
    }

    try {
      const { data } = await userLogin(user)
      if (data.code === 200) {
        const User = {
          name: data.name,
          type: data.type,
          token: data.token
        }
        localStorage.setItem('user', JSON.stringify(User))
        history.push(`${BaseConfig.BASENAME}/main`)
      } else {
        message.error(data.msg)
      }
    } catch (error) {
      console.log('登录异常', error)
    }
  }

  return (
    <div className='login_container'>
      <Form
        name='normal_login'
        className='login-form'
        initialValues={{
          remember: true
        }}
        onFinish={loginFn}
      >
        <Form.Item
          name='username'
          rules={[
            {
              required: true,
              message: '请输入用户名!'
            }
          ]}
        >
          <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Username' />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: '请输入密码!'
            }
          ]}
        >
          <Input prefix={<LockOutlined className='site-form-item-icon' />} type='password' placeholder='Password' />
        </Form.Item>
        <Form.Item>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox>记住密码</Checkbox>
          </Form.Item>
          <a className='login-form-forgot' href=''>
            忘记密码
          </a>
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' className='login-form-button'>
            登录
          </Button>
          Or <a href=''>马上注册!</a>
        </Form.Item>
      </Form>
    </div>
  )
}
