import React from 'react';
import { connect } from 'dva';
import { Button, Card } from 'antd';
import { useEffect } from 'react';

export default connect(
  (state) => ({
    loading: state.loading,
    goodsList: state.goods,
  }),
  {
    addGood: (title) => ({
      type: 'goods/addGood', // action type需要以命名空间为前缀+reducer名称
      title,
    }),
    getList: () => ({
      type: 'goods/getList',
    }),
  },
)(function ({ goodsList, addGood, getList, loading }) {
  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <div>
        {loading.models.goods && <p>loading...</p>}
        {goodsList.map((good) => {
          return (
            <Card key={good.title}>
              <div>{good.title}</div>
            </Card>
          );
        })}
        <div>
          <Button onClick={() => addGood('商品 ' + new Date().getTime())}>
            添加商品
          </Button>
        </div>
      </div>
    </div>
  );
});
