import { Link } from 'umi';
import { Layout, Menu, Badge, Dropdown } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { connect } from 'dva';
import styles from './index.css';

const { Header, Footer, Content } = Layout;

export default connect((state) => ({
  count: state.cart.length,
  cart: state.cart,
}))(function (props) {
  const selectedKeys = props.location.pathname;
  const dorpdownMenu = (
    <Menu>
      {props.cart.map((item, index) => (
        <Menu.Item key={index}>
          {item.name}x{item.count}
          <span>￥{item.count * item.price}</span>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Layout>
      <Header className={styles.header}>
        <img
          className={styles.logo}
          src="https://img.kaikeba.com/logo-new.png"
          alt=""
        />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={selectedKeys}
          style={{ lineHeight: '64px', float: 'left' }}
        >
          <Menu.Item key="/">
            <Link to="/">商品</Link>
          </Menu.Item>
          <Menu.Item key="/users">
            <Link to="/users">用户</Link>
          </Menu.Item>
          <Menu.Item key="/about">
            <Link to="/about">关于</Link>
          </Menu.Item>
        </Menu>
        <Dropdown overlay={dorpdownMenu} placement="bottomRight">
          <div style={{ float: 'right' }}>
            <ShoppingCartOutlined style={{ fontSize: 18 }} />
            <span>我的购物车</span>
            <Badge count={props.count} offset={[-4, -18]} />
          </div>
        </Dropdown>
      </Header>
      <Content className={styles.content}>
        <div className={styles.box}>{props.children}</div>
      </Content>
      <Footer className={styles.footer}>开科吧</Footer>
    </Layout>
  );
});
