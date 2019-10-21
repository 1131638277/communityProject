import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import style from './css/normalLoginForm.module.css';
import './css/test.css'
// import './jquery/yzcode.js';
class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  componentDidMount() {

  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      // <div>
        <Form onSubmit={this.handleSubmit} className={style.loginForm}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入您的用户名！' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="用户名"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入您的密码！' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="密码"
              />,
            )}
          </Form.Item>
            <Button className={style.reButton} type="primary" htmlType="submit" className={style.loginFormButton}>
              注册
          </Button>
        </Form>
      // </div>


    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm;