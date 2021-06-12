import axios from 'axios';
import { notification } from 'antd';

const codeMessage: any = {
  202: '一个请求已经进入后台排队（异步任务）',
  401: '无权限执行该操作（令牌，用户名，密码错误）',
  404: '请求资源不存在',
  500: '服务器发生错误，请检查服务器',
};

// 仅拦截异常状态响应
axios.interceptors.response.use(
  (response) => {
    console.log(response);
    if (codeMessage[response.status]) {
      notification.error({
        message: `请求错误${response.status}:${response.config.url}`,
        description: codeMessage[response.status],
      });
    }
    return Promise.reject('err');
  },
  (err) => {
    return Promise.reject(err);
  },
);
