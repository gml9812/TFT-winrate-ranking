import appRoot from "app-root-path";
import bodyParser from "body-parser";
import express from "express";
import { routes } from "./api/routes";

const app = express();
const PORT = 10100;

app.set("trust proxy", 1); // trust first proxy

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes); //=> will change to this

app.use(function (req, res, next) {
  res.status(404).render("404.pug", {});
});

export { app, PORT };

//public은 html에서 사용될 정적 파일(css와 js, 아이콘과 폰트 등) 을 가져온다.
//routers는 get을 받아 html로 구성된 signin, signup 페이지를 사용하도록 한다.

//404 추가
//session 추가, session이 유지되는 사이에는 웹페이지 나갔다 돌아와도 로그인 유지된다. **************

//routers와 api는 get과 post를 수행한다.
//이 때, 주어진 get,post에 따라 적절한 html&pug 페이지를 response로 반환한다. 해당 html&pug는 views 폴더에 존재한다.
//views에서 사용할 js파일,폰트,이미지,css 등은 public 폴더에 존재한다.

//여기서 js 파일은 webpack 사용하여 하나의 파일로 (.built.js) 통합되어 사용된다.
//js 파일을 수정하기 위해서는 client 폴더에서 수정 마친 뒤, webpack 사용해 built.js 수정하면 된다.

//####### routers의 session, TEST는 미구현
//####### client 폴더의 spring.styl의 정체는?
