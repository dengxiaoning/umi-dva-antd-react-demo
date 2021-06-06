import React from 'react';
import styles from './index.css';
import { Link, history } from 'umi';

export default function Page(props) {
  const users = [
    { id: 1, name: 'tom' },
    { id: 2, name: 'jerry' },
  ];
  return (
    <div>
      <ul>
        {users.map((u) => (
          // 声明式
          <li key={u.id}>
            <Link to={`/users/${u.id}`}>{u.name}</Link>
          </li>
          // 命令式
          // <li key={u.id} onClick={() => history.push(`/users/${u.id}`)}>
          //   {u.name}
          // </li>
        ))}
      </ul>
      {props.children}
    </div>
  );
}
