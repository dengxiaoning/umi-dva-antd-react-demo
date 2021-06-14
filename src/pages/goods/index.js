import React, { Component } from 'react';
import { Card, Row, Col, Skeleton, Icon } from 'antd';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { connect } from 'dva';
import ProCard from '@ant-design/pro-card';

@connect(
  (state) => ({
    loading: state.loading,
    tags: state.goods.tags,
    courses: state.goods.courses,
  }),
  {
    getList: () => ({
      type: 'goods/getList',
    }),
    addCart: (payload) => ({
      type: 'cart/addCart',
      payload,
    }),
  },
)
class Goods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabPosition: 'top',
      activeTab: 'ALL',
      displayCourses: new Array(8).fill({}), // 骨架屏数据
    };
  }

  componentDidMount() {
    this.props.getList({ foo: 'bar' });
  }

  // 父组件参数变化事件【该生命周期函数已经弃用】
  // componentWillReceiveProps(props) {
  //   if (props.tags.length) {
  //     this.tagSelectChange(props.tags, props.courses);
  //   }
  // }

  // 使用该生命周期函数，监听父组件传入参数变化事件
  static getDerivedStateFromProps(props, state) {
    // Store prevId in state so we can compare when props change.
    // Clear out previously-loaded data (so we don't render stale stuff).
    if (state.tagsDetect !== props.tags) {
      const displayCourses = props.tags.flatMap((tag) => props.courses[tag]);
      return {
        displayCourses,
        tagsDetect: props.tags, // 加一个标识，如果下次props.tags == state.tagsDetect不做处理
      };
    }
    // No state update necessary
    return null;
  }

  tagSelectChange = (tags, courses = this.props.courses) => {
    let dealTags;
    // 当tags 为一个数组时，应该是第一次will receive invoke
    if (Array.isArray(tags)) {
      dealTags = tags;
    } else if (tags === 'ALL') {
      dealTags = this.props.tags;
    } else {
      dealTags = [tags];
    }
    const displayCourses = dealTags.flatMap((tag) => courses[tag]);
    this.setState({ displayCourses, activeTab: tags });
  };

  addCart = (e, item) => {
    e.stopPropagation();
    this.props.addCart(item);
  };

  render() {
    if (this.props.loading.models.goods) {
      return <div>加载中...</div>;
    }
    return (
      <div>
        <ProCard
          tabs={{
            tabPosition: this.state.tabPosition,
            activeKey: this.state.activeTab,
            onChange: (key) => this.tagSelectChange(key),
          }}
        >
          <ProCard.TabPane key="ALL" tab="ALL" />
          {this.props.tags.map((tag) => {
            return <ProCard.TabPane key={tag} tab={tag} />;
          })}
        </ProCard>
        {/* 商品详情 */}
        <Row type="flex" justify="start">
          {this.state.displayCourses.map((item, index) => {
            return (
              <Col key={index} style={{ padding: 10 }} span={6}>
                {item.name ? (
                  <Card
                    hoverable
                    title={item.name}
                    cover={<img src={'/course/' + item.img}></img>}
                    extra={
                      <ShoppingCartOutlined
                        onClick={(e) => this.addCart(e, item)}
                        style={{ fontSize: 18 }}
                      />
                    }
                  >
                    <Card.Meta
                      description={
                        <div>
                          <span>￥{item.price}</span>
                          <span style={{ float: 'right' }}>
                            <UserOutlined />
                            {item.solded}
                          </span>
                        </div>
                      }
                    ></Card.Meta>
                  </Card>
                ) : (
                  <Skeleton active={true} />
                )}
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default Goods;
