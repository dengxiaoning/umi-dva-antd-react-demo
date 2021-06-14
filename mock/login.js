export default {
  'post /api/login': (req, res) => {
    const { username, password } = req.body;
    if (username == 'admin' && password == '123') {
      var resObj = res.json({
        code: 0,
        data: {
          token: 'admin123',
          role: 'admin',
          balance: 1000,
          username: 'admin',
        },
      });
      return resObj;
    }

    if (username == 'dex' && password == '123') {
      return res.json({
        code: 0,
        data: {
          token: 'dex123',
          role: 'user',
          balance: 100,
          username: 'dex',
        },
      });
    }
    return res.status(401).json({
      code: -1,
      msg: '密码错误',
    });
  },
};
