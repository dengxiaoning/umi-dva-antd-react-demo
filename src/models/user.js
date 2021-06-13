import reqService from 'axios';
import { history } from 'umi';

const userinfo =
  JSON.parse(localStorage.getItem('userinfo')) |
  {
    token: '',
    role: '',
    username: '',
    blance: '',
  };
// 登录请求
function loginReq(payload) {
  return reqService.post('/api/login', payload).then((res) => {
    console.log(res);
    return {
      code: res.data.code,
      userinfo: res.data.data,
    };
  });
}

export default {
  namespace: 'user',
  state: userinfo,
  effects: {
    *login({ payload }, { call, put }) {
      try {
        const { code, userinfo } = yield call(loginReq, payload);

        localStorage.setItem('userinfo', JSON.stringify(userinfo));
        yield put({
          type: 'init',
          payload: userinfo,
        });
        history.push('/');
      } catch (error) {
        console.log(error);
      }
    },
  },
  reducer: {
    init(state, action) {
      return action.payload;
    },
  },
};
