import axios from 'axios';

function getGoods() {
  return axios.get("/api/goods")
}

export default {
  namspace: 'goods',
  state: [],
  effects: {
    // 异步操作
    * getList(action, {
      call,
      put
    }) {
      const res = yield call(getGoods);
      yield put({
        type: "initGoods",
        payload: res.data.result
      })
    }
  },
  reducers: {
    // 更新状态
    addGood(state, action) {
      return [...state, {
        title: action.title
      }]
    },
    initGoods(state, action) {
      return action.payload
    }
  }
}
