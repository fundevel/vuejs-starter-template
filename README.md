[![Build Web Appication](https://github.com/magicsih/vuejs-starter-template/actions/workflows/build.yml/badge.svg)](https://github.com/magicsih/vuejs-starter-template/actions/workflows/build.yml)

# Structure
- Serving views
  - vue.js Frontend
    - 대부분의 frontend serving은 vue.js 단에서 이루어진다.
    - vue.js는 frontend 폴더 아래에서 vue 사용법으로 다루면 됌
  - node.js View Template (pug)
    - backend/routes/view 폴더 아래에 routing 코드 추가
    - backend/views 폴더 아래 routing 코드와 대응 되는 pug format의 view 페이지 추가

# Notes
- View 개발만 할 시에는 frontend 폴더 아래에서만 구동해도 좋다.

# Export compiled frontend to backend
- frontend에서 ```npm run build``` npm run build를 수행하면 ```backend/public``` 폴더 아래로 정적 파일들이 생성된다.

# Compile Frontend 
```
npm run frontend-build
```

# Serve Frontend
```
npm run frontend-start
```

# Start Backend
```
npm run backend-start
```

# Start Backend as Debug
```
npm run backend-debug
```

# Compile Frontend and Start Backend
```
npm run webapp-start
```
