import React, { Component } from 'react';
import styles from './index.css';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { UnlockOutlined, UserOutlined } from '@ant-design/icons';
import { connect } from 'dva';

@connect()
class index extends Component {
  onSubmit = (values) => {
    if (values) {
      this.props.dispatch({ type: 'user/login', payload: values });
    }
  };
  render() {
    return (
      <div className={styles.loginForm}>
        <ProForm
          onFinish={(values) => this.onSubmit(values)}
          submitter={{
            searchConfig: {
              submitText: '登录',
            },
            submitButtonProps: {
              size: 'large',
              style: {
                width: '100%',
              },
            },
            // 完全自定义整个区域
            render: (_, dom) => dom.pop(),
          }}
        >
          <h1
            style={{
              textAlign: 'center',
            }}
          >
            <img
              className={styles.logo}
              alt="logo"
              src="https://img.kaikeba.com/logo-new.png"
            />
          </h1>
          <div
            style={{
              marginTop: 12,
              textAlign: 'center',
              marginBottom: 40,
            }}
          >
            WE USE ANT DESIGN TO MAKE FORM FOR LOGIN.
          </div>
          <ProFormText
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined />,
            }}
            name="username"
            placeholder="kaikeba"
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          />
          <ProFormText.Password
            fieldProps={{
              size: 'large',
              prefix: <UnlockOutlined />,
            }}
            name="password"
            placeholder="123"
            rules={[
              {
                required: true,
                message: '请输入密码!',
              },
            ]}
          />
        </ProForm>
      </div>
    );
  }
}

export default index;
