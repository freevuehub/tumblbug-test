## 텀블벅 코딩테스트

#### 주요 테스트 내용

> 1. 리엑트를 이용한 SPA
> 2. 리덱트 라우터를 이용한 페이지 이동
> 3. 반응형 웹
> 4. 상태관리
> 5. 애니메이션

#### 사용한 기술

> - Typescript
> - React.js (CRA)
> - React-Router-Dom
> - React-Redux
> - Axios
> - Scss

#### 명령어

```
  yarn start
```

```
  yarn build
```

#### 저장소

> - [Github](https://github.com/freevuehub/tumblbug-test)

#### 폴더 및 파일 구조

```sh
├─src
│  ├─axios
│  │  // API 통신 파일
│  │
│  ├─components
│  │  // prop을 받는 작은 단위의 컴포넌트들
│  │
│  ├─containers
│  │  // reducer을 받아 데이터를 내려주는 큰단위의 컴포넌트들
│  │
│  ├─contexts
│  │  // 전역 변수
│  │
│  ├─pages
│  │  // 페이지단위의 컴포넌트들
│  │
│  ├─reducers
│  │  // 상태관리
│  │
│  ├─router
│  │  // 라우트를 설정하는 컴포넌트들
│  │
│  ├─scss
│  │  // css 전처리기
│  │
│  └─types
│     // 자주 사용하는 타입들
│
└─// 그 외 기본 파일들
```

#### 주요 설명

1. 데이터들은 리덕스를 활용하여 뿌려주고 있습니다.
2. 함수컴포넌트를 주로 사용하여 hooks의 활용도를 높였습니다.
3. Toast는 리덕스, Confirm은 Context를 각각 활용하였습니다. 그리고 최상단에서 배치해 필요할때 사용할 수 있습니다.
4. Scss를 이용하여 퍼블리싱했습니다.
