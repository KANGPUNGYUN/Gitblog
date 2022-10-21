const http = require("http"); //require는 "http"라는 패키지를 불러와서 사용할 수 있게끔 하는 역할

http
    .createServer((req, res) => { // 서버를 생성하는 메서드가 createServer입니다.
        // res.writeHead(200, {"Content-Type": "text/html"}); // 헤더값을 추가해서 보낸다. 응답을 보낼때 200번이라는 상태코드와 text/html로 반환하겠다는 정보를 담는 것이다.
        // res.end("<p>Hello world~!!</p>"); // 서버측에서 사용자에게 전달할 응답코드를 담습니다.

        if(req.url === "/") {
            res.writeHead(200);
            res.end("main url");
        } else if (req.url === "/upload") {
            res.writeHead(200);
            res.end("upload url");
        } else if (req.url === "/delete") {
            res.writeHead(200);
            res.end("delete url");
        } else {
            res.writeHead(400);
            res.end("Not found!!!");
        }
    })
    .listen(3000, () => { // 다음 포트의 서버를 대기하고 있다가 생성된 서버의 내용을 listen메서드를 통해 듣고 사용할 수 있습니다. 여기서 3000번 포트의 서버를 대기하고 응답 시 어떤 내용을 실행할지에 대한 정보를 의미합니다.
        console.log("3000번 포트 서버 접속 완료~!!"); 
    })