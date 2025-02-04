function route(pathname) {
    console.log(`📌 라우터가 처리 중: ${pathname}`);

    if (pathname === '/') {
        return "<h1>상우의 홈 페이지</h1>";
    } else if (pathname === '/about') {
        return "<h1>소개 페이지</h1><p>이 서버는 Node.js로 만들어졌습니다.</p>";
    } else if (pathname === '/contact') {
        return "<h1>연락처</h1><p>이메일: contact@example.com</p>";
    } else {
        return "<h1>404 페이지를 찾을 수 없습니다.</h1>";
    }
}

// `route` 함수를 외부에서 사용 가능하도록 export
exports.route = route;
