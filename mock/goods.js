const course = {
  data: {
    Javascript: [
      {
        id: 1,
        name: 'es6语法实战',
        img: 'js.jpg',
        price: '100',
        solded: '562',
      },
      {
        id: 2,
        name: 'typescript实战',
        img: 'js1.jpeg',
        price: '100',
        solded: '562',
      },
      {
        id: 3,
        name: 'typescript实战',
        img: 'js2.jpeg',
        price: '100',
        solded: '562',
      },
    ],
    react: [
      {
        id: 4,
        name: 'es6语法实战',
        img: 'reactjs.jpeg',
        price: '100',
        solded: '562',
      },
      {
        id: 5,
        name: 'typescript实战',
        img: 'reactjs1.jpeg',
        price: '100',
        solded: '562',
      },
      {
        id: 6,
        name: 'typescript实战',
        img: 'reactjs2.jpeg',
        price: '100',
        solded: '562',
      },
    ],
    git: [
      {
        id: 7,
        name: 'es6语法实战',
        img: 'git.jpeg',
        price: '100',
        solded: '562',
      },
      {
        id: 8,
        name: 'typescript实战',
        img: 'git1.jpeg',
        price: '100',
        solded: '562',
      },
      {
        id: 9,
        name: 'typescript实战',
        img: 'git2.jpeg',
        price: '100',
        solded: '562',
      },
    ],
    python: [
      {
        id: 10,
        name: 'es6语法实战',
        img: 'python.jpeg',
        price: '100',
        solded: '562',
      },
      {
        id: 11,
        name: 'python33天实战课',
        img: 'python1.jpeg',
        price: '180',
        solded: '162',
      },
      {
        id: 12,
        name: 'typescript实战',
        img: 'python2.jpeg',
        price: '100',
        solded: '562',
      },
    ],
    nodejs: [
      {
        id: 13,
        name: 'es6语法实战',
        img: 'nodejs.jpeg',
        price: '100',
        solded: '562',
      },
      {
        id: 14,
        name: 'typescript实战',
        img: 'nodejs1.jpeg',
        price: '100',
        solded: '562',
      },
      {
        id: 15,
        name: 'typescript实战',
        img: 'nodejs2.jpeg',
        price: '100',
        solded: '562',
      },
    ],
    vuejs: [
      {
        id: 16,
        name: 'es6语法实战',
        img: 'vuejs.jpeg',
        price: '100',
        solded: '562',
      },
      {
        id: 17,
        name: 'typescript实战',
        img: 'vuejs1.jpeg',
        price: '100',
        solded: '562',
      },
      {
        id: 18,
        name: 'typescript实战',
        img: 'vuejs2.jpeg',
        price: '100',
        solded: '562',
      },
    ],
    php: [
      {
        id: 19,
        name: 'es6语法实战',
        img: 'php.jpeg',
        price: '100',
        solded: '562',
      },
      {
        id: 20,
        name: 'typescript实战',
        img: 'php1.jpeg',
        price: '100',
        solded: '562',
      },
      {
        id: 21,
        name: 'typescript实战',
        img: 'php2.jpeg',
        price: '100',
        solded: '562',
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
