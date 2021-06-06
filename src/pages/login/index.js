import React from 'react';
import styles from './index.css';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
export default function Page() {
  return (
    <div>
      <h1 className={styles.title}>Page ./login/index</h1>
      <Button type="primary" icon={<SearchOutlined />}>
        登录
      </Button>
    </div>
  );
}
