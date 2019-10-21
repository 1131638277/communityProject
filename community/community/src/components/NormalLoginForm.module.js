import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import style from './css/normalLoginForm.module.css';
import './css/test.css'
class NormalLoginForm extends Component {
  constructor(props){
    super(props);
    
  }

  handleSubmit = e => {
    console.log(22);
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
          <div class="drag">
            <div class="bg"></div>
            <div class="text" onselectstart="return false;">请拖动滑块解锁</div>
            <div class="btn">>></div>
          </div>
              <script src='./jquery/yzcode.js'></script>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>记住密码</Checkbox>)}
            <a className={style.loginFormForgot} href="">
              忘记密码
          </a>
            <br />
            <Button type="primary" htmlType="submit" className={style.loginFormButton}>
              登录
          </Button>
          </Form.Item>
        </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm;