import { Link } from 'umi';
import { Layout, Menu } from 'antd';
import styles from './index.css';

const { Header, Footer, Content } = Layout;

export default function Page(props) {
  const { pathname } = props.location;
  const menus = [
    { path: '/', name: '商品' },
    { path: '/users', name: '用户' },
    { path: '/about', name: '关于' },
  ];

  const selectedKeys = menus
    .filter((menu) => {
      if (menu.path === '/') {
        return pathname === '/';
      }
      return pathname.startsWith(menu.path);
    })
    .map((men) => men.path);

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
      </Header>
      <Content className={styles.content}>
        <div className={styles.box}>{props.children}</div>
      </Content>
      <Footer className={styles.footer}>开科吧</Footer>
    </Layout>
  );
}
