const { request } = require("http");

let body = [];
// 요청
request
  // on 메서드를 요청 data 이벤트와 chunk 리스너
  .on('data', chunk => {
  // 바디에 청크를 밀어넣는다.
  body.push(chunk);
})
  .on('end', () => {
    // concat 배열 병합 메서드
    // 버퍼에 body를 병합 문자열로 이를 body 선언에 대입
    body = Buffer.concat(body).toString();
  });