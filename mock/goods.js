const course = {
  data: {
    Javascript: [
      {
        id: 1,
        name: 'es6语法',
        img: 'js.jpg',
        price: '100',
        solded: '562',
      },
      {
        id: 2,
        name: 'typescript精进',
        img: 'js1.jpeg',
        price: '60',
        solded: '80',
      },
      {
        id: 3,
        name: 'js prototype',
        img: 'js2.jpeg',
        price: '210',
        solded: '162',
      },
    ],
    react: [
      {
        id: 4,
        name: 'react 入门精选',
        img: 'reactjs.jpeg',
        price: '188',
        solded: '70',
      },
      {
        id: 5,
        name: 'redux-saga全局状态管理',
        img: 'reactjs1.jpeg',
        price: '50',
        solded: '1120',
      },
      {
        id: 6,
        name: 'umi+dva快速应用',
        img: 'reactjs2.jpeg',
        price: '389',
        solded: '309',
      },
    ],
    git: [
      {
        id: 7,
        name: 'git进阶训练',
        img: 'git.jpeg',
        price: '68',
        solded: '13',
      },
      {
        id: 8,
        name: 'git协作专家',
        img: 'git1.jpeg',
        price: '30',
        solded: '5',
      },
      {
        id: 9,
        name: 'git版本管理方案',
        img: 'git2.jpeg',
        price: '42',
        solded: '66',
      },
    ],
    python: [
      {
        id: 10,
        name: 'python精进',
        img: 'python.jpeg',
        price: '88',
        solded: '78',
      },
      {
        id: 11,
        name: 'python33天实战课',
        img: 'python1.jpeg',
        price: '98',
        solded: '162',
      },
      {
        id: 12,
        name: 'python AI专题',
        img: 'python2.jpeg',
        price: '399',
        solded: '1201',
      },
    ],
    nodejs: [
      {
        id: 13,
        name: 'nodejs全程实战',
        img: 'nodejs.jpeg',
        price: '68',
        solded: '2',
      },
      {
        id: 14,
        name: 'nodejs+koa实战',
        img: 'nodejs1.jpeg',
        price: '368',
        solded: '801',
      },
      {
        id: 15,
        name: 'nodejs loop机制探寻',
        img: 'nodejs2.jpeg',
        price: '168',
        solded: '901',
      },
    ],
    vuejs: [
      {
        id: 16,
        name: 'vuejs进阶指南',
        img: 'vuejs.jpeg',
        price: '98',
        solded: '3090',
      },
      {
        id: 17,
        name: 'vue2源码解析',
        img: 'vuejs1.jpeg',
        price: '498',
        solded: '403',
      },
      {
        id: 18,
        name: 'vue3快速上手',
        img: 'vuejs2.jpeg',
        price: '488',
        solded: '209',
      },
    ],
    php: [
      {
        id: 19,
        name: 'php快速开发',
        img: 'php.jpeg',
        price: '100',
        solded: '56',
      },
      {
        id: 20,
        name: 'php 进阶实战',
        img: 'php1.jpeg',
        price: '38',
        solded: '121',
      },
      {
        id: 21,
        name: 'php开发神奇',
        img: 'php2.jpeg',
        price: '78',
        solded: '86',
      },
    ],
  },
  tags: ['Javascript', 'react', 'vuejs', 'git', 'python', 'nodejs', 'php'],
};

course.tags.forEach((tag) => {
  course.data[tag].forEach((v) => {
    v.tag = tag;
  });
});

export default {
  // "method url"：OBJECT OR ARRAY
  // "get /api/goods":{result:data}

  // "method url ":(req,res)=>{}
  'get /api/goods': function (req, res) {
    setTimeout(() => {
      res.json({
        code: 0,
        courseData: course,
      });
    }, 1250);
  },
};
