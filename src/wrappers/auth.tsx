import { Redirect } from 'umi';
import { connect } from 'dva';

export default connect((state) => ({ isLogin: state }))((props: any) => {
  // 模拟鉴权
  if (props.isLogin.user.token) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login" />;
  }
});
