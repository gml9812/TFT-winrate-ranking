// node_modules 에 있는 express 관련 파일을 가져온다.
import express from "express";

// express 는 함수이므로, 반환값을 변수에 저장한다.
const app = express();
const PORT = 3000;

app.use("/api", routes);

export { app, PORT };
