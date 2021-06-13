import axios from 'axios';

function getGoods() {
  return axios.get('/api/goods').then(({ data }) => {
    return {
      courses: data.courseData.data,
      tags: data.courseData.tags,
    };
  });
}

export default {
  namspace: 'goods',
  state: {
    courses: {},
    tags: [],
  },
  effects: {
    // 异步操作
    *getList(action, { call, put }) {
      const payload = yield call(getGoods);

      yield put({
        type: 'initGoods',
        payload,
      });
    },
  },
  reducers: {
    initGoods(state, { payload }) {
      return payload;
    },
  },
};
