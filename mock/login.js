export default {
  'post /api/login': (req, res) => {
    const { username, password } = req.body;
    if (username == 'kaikeba' && password == '123') {
      var resObj = res.json({
        code: 0,
        data: {
          token: 'kaikebaisgood',
          role: 'admin',
          balance: 1000,
          username: 'kaikeba',
        },
      });
      console.log(resObj);
      return resObj;
    }

    if (username == 'jerry' && password == '123') {
      return res.json({
        code: 0,
        data: {
          token: 'kaikebaisgood',
          role: 'user',
          balance: 100,
          username: 'jerry',
        },
      });
    }
    return res.status(401).json({
      code: -1,
      msg: '密码错误',
    });
  },
};
