// middleware
const loginCheck = (req, res, next) => {
    const userLogin = false;
    if(userLogin) {
      next();
    } else {
      res.status(400).json({
        message: "login fail!!",
      });
    }
  };

  module.exports = loginCheck; // 외부파일 index.js에서 사용가능하게 만들 수 있습니다.