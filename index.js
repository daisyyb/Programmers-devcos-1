const server = require('./server'); // 서버 모듈 불러오기
const router = require('./router'); // 라우터 모듈 불러오기

const mariadb = require('./database/connect/mariadb');
mariadb.connect();
// 서버 시작 (라우터를 전달)
server.start(router.route);
