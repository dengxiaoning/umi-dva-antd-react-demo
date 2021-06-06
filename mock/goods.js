const data = [{
  title: 'web全栈'
}, {
  title: 'java架构师'
}]

export default {
  // "method url"：OBJECT OR ARRAY
  // "get /api/goods":{result:data}

  // "method url ":(req,res)=>{}
  "get /api/goods": function (req, res) {
    setTimeout(() => {
      res.json({
        result: data
      });
    }, 1250);
  }
}
