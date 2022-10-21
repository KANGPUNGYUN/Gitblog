var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// let arr = [];

// // GET method

// router.get('/read', (req,res) => {
//   res.status(200).json({
//     message: "read success"
//   });
// });

// // POST method

// router.post("/create", (req, res) => {
//   // const data = req.body.data;
//   // 비구조화 할당
//   const { data } = req.body;
//   arr.push(data);
//   res.status(200).json({
//     message: "create success",
//     result: arr,
//   });
// });

// // PUT method

// router.put("/update/:id", (req, res) => {
//   const { id } = req.params;
//   //console.log(id);
//   const { data } = req.body;
//   arr[id] = data;
//   res.status(200).json({
//     message: "update success",
//     result: arr,
//   });
// });

// // DELETE method

// router.delete("/delete/:id", (req, res) => {
//   const { id } = req.params;
//   arr.splice(id, 1);
//   res.status(200).json({
//     message: "delete success",
//     result: arr,
//   });
// });

// module.exports = router;

const loginCheck = require("../module/loginCheck"); // 외부에서 사용할 수 있게 설정한 파일을 다음과 같이 가져옵니다.
const upload = require("../module/imageUpload");

router.get("/", loginCheck, (req, res) => {
  res.status(200).json({
    message: "login success!!",
  });
});

router.post('/upload', upload.single("image"), (req, res) => {
  const file = req.file;
  console.log(file);
  res.status(200).json({
    message: "upload success!!",
  });
});

module.exports = router;