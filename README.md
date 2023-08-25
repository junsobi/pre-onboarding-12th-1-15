### 프리온보딩 프론트엔드 인턴십 [12th] 🚀

### 팀 🤝

- 15 팀
  - 팀원 : 김준섭 박예성 신성민 이세환 조정현 최선재

### 프로젝트 실행방법 🔧

```shell
git clone https://github.com/preonboardingTeam15/pre-onboarding-12th-1-15.git
cd pre-onboarding-12th-1-15
npm install
npm start
```

### 데모 영상 🎥

Vercel을 통해 배포.
[배포 링크](https://pre-onboarding-12th-1-15-beta.vercel.app/)

### 사용 라이브러리 📚

- React Router
- Axios
- TailWind CSS
- React Icons

### 파일 구조 📂

```bash
📦src
 ┣ 📂components
 ┃ ┣ 📂Auth
 ┃ ┃ ┣ 📂hook
 ┃ ┃ ┃ ┗ 📜useAuthForm.js
 ┃ ┃ ┣ 📜InputField.jsx
 ┃ ┃ ┣ 📜SignInForm.jsx
 ┃ ┃ ┗ 📜SignUpForm.jsx
 ┃ ┣ 📂Input
 ┃ ┃ ┣ 📜CheckboxInput.jsx
 ┃ ┃ ┗ 📜Input.jsx
 ┃ ┣ 📂Layout
 ┃ ┃ ┣ 📜Layout.jsx
 ┃ ┃ ┗ 📜TodoLayout.jsx
 ┃ ┣ 📂Main
 ┃ ┃ ┣ 📜Authenticated.jsx
 ┃ ┃ ┗ 📜NotAuthenticated.jsx
 ┃ ┣ 📂Todo
 ┃ ┃ ┣ 📜DisplayTodoItem.jsx
 ┃ ┃ ┣ 📜EditingTodoItem.jsx
 ┃ ┃ ┣ 📜TodoForm.jsx
 ┃ ┃ ┣ 📜TodoItem.jsx
 ┃ ┃ ┗ 📜TodoItems.jsx
 ┃ ┣ 📂Buttons
 ┃ ┃ ┣ 📜Button.jsx
 ┃ ┃ ┣ 📜LoguOutButton.jsx
 ┃ ┃ ┣ 📜ReturnButton.jsx
 ┃ ┃ ┗ 📜ToHomeButton.jsx
 ┣ 📂lib
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📜apiClient.js
 ┃ ┃ ┣ 📜auth.js
 ┃ ┃ ┗ 📜todo.js
 ┃ ┣ 📂contexts
 ┃ ┃ ┣ 📂hook
 ┃ ┃ ┃ ┗ 📜useTodo.js
 ┃ ┃ ┗ 📜TodoContext.js
 ┃ ┗ 📂utils
 ┃ ┃ ┗ 📜token.js
 ┣ 📂pages
 ┃ ┣ 📜Main.jsx
 ┃ ┣ 📜NotFound.jsx
 ┃ ┣ 📜SignIn.jsx
 ┃ ┣ 📜SignUp.jsx
 ┃ ┗ 📜Todo.jsx
 ┣ 📂router
 ┃ ┗ 📜ProtectedRouter.jsx
 ┣ 📂validators
 ┃ ┗ 📜authValidator.js
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜index.css
 ┗ 📜index.js
```

---

## 주요 기능 목표 및 구현 설명 ✨

### 유효성검사 🔒

### 목표

- 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현해주세요
  - 이메일 조건: `@` 포함
  - 비밀번호 조건: 8자 이상
- 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 `disabled` 속성을 부여해주세요

### 구현

1. 폴더 및 파일 구조 : validators/authValidator.js
2. 이메일 검증 : includes(’@’) 사용하여 ‘@’포함 여부 확인
3. 비밀번호 검증 : `length` 속성을 사용하여 8자 이상인지 확인
4. 버튼활성화/비활성화 로직: 이메일 비밀번호 유효성 검사하는 함수(validateForm)을 작성하여 해당함수의 결과를 바탕으로 버튼의 disabled속성을 적용
5. validate 시각화 : 조건이 안맞을 경우 에러메시지를 input창 하단부에 표시 할 수 있는 로직 추가

---

### 페이지 이동 및 jwt 관리 🚦

### 목표

- 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 `/signin` 경로로 이동해주세요
- 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 `/todo` 경로로 이동해주세요
  - 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
  - 응답받은 JWT는 로컬 스토리지에 저장해주세요

### 구현

1. 페이지 이동 : UseNavigate를 활용
2. API 호출 : Axios.create 이용 - 좀더논의
3. 토큰 관리 : 토큰 유효성 검사를 할 수있는 로직 추가
4. 입력 유효성 검증 : response error 처리 - alert로 표시

---

### 라우팅 & 리다이렉트 🔄

### 목표

- 로그인 여부에 따른 리다이렉트 처리를 구현해주세요
  - 로컬 스토리지에 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속한다면 `/todo` 경로로 리다이렉트 시켜주세요
  - 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/signin` 경로로 리다이렉트 시켜주세요

### 구현

1. 라우팅 및 리다이렉트 : 토큰 여부에 따라 페이지 이동을 관리하는 ProtectedRouter 컴포넌트 생성 후 필요한 페이지 컴포넌츠를 감싸는 방식 채택
2. 페이지 분기, 중첩 라우터를 용이하게 관리하기 위한 createBrowserRouter, RouterProvider 적용

---

### API 📡

### 목표

- API를 그 용도와 목적에 맞게 분기해, 코드의 재사용성을 높이고 일관성을 보장함으로써 유지보수를 용이하게 함

### 구현

1. 기본 주소와 토큰을 세팅할 수 있는 기준이 되는 apiClient 설정
2. 로그인 / Todo 에 활용되는 API 각각 분기하여 작성
3. 코드 형식을 통일하여 일관성 확보

---

### Todo 리스트 목록과 체크박스 📋

### 목표

- `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
- 목록에서는 TODO의 내용과 완료 여부가 표시되어야 합니다.
- TODO의 완료 여부는 `<input type="checkbox" />`를 통해 표현해주세요

### 구현

1. 데이터를 가져오는 함수는 axios 사용, lib/api 폴더에서 관리
2. ToDo CRUD 함수는 `cotextApi` 사용, lib/contexts 폴더에서 관리
3. `context api`에서 `useEffect` 를 사용해 데이터 최초 get,
   `todos` state 변수에 할당 후 관리
4. ToDo 데이터는 CRUD 할때마다 get해온 리스트로 리스트업 하는방식 - 데이터 안정성 확보
5. `TodoItems` 컴포넌트에서 `map()` 을 사용하여 `TodoItem` 컴포넌트를 뿌리고 props 전달

- 전달하는 props 값 : 키, 투두 내용, 수정 여부

6. `TodoItem` 컴포넌트는 수정 여부에 따라 EditingTodoItem(수정모드), DisplayTodoItem(디스플레이 모드)를 랜더링
7. 수정모드 진입시 `useref`를 활용하여 자동으로 포커스 되는 기능 구현
8. 수정모드는 한번에 한개의 Todo만 활성화 될 수 있는 로직 구현
9. 수정모드인 동안에는 체크박스 체크를 막아 놓는 로직 구현
10. `TodoItem` 컴포넌트는 `isCompleted` 속성을 checkbox `checked` 값에 할당
11. 완료된 리스트의 경우 ~~취소선~~이 그어진 효과 부여

---

### Todo 리스트 추가 📝

### 목표

- 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요
- 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록 해주세요
- TODO를 추가 한 뒤 새로고침을 해도 추가한 TODO가 목록에 보여야 합니다

### 구현

1. 첫랜더링시 인풋창에 포커스되도록 `useRef` 활용
2. POST 요청이 성공하면 `TodoList`를 받아온후 state재할당 - 데이터 안정성 확보
3. `form` 태그를 활용해 제출 버튼 타입을 `submit` 설정(버튼과 엔터 모두에서 작동)
4. 아무런 내용이 없을때 submit 은 작동 방지
5. 제출이 완료되면 input value 초기화

---

### Todo 리스트 삭제 ❌

### 목표

- TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요
- 투두 리스트의 삭제 기능을 구현해주세요
  - 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제되도록 해주세요

### 구현

1. DELETE 요청이 성공하면 `TodoList` 를 받아온 후 state 재할당 - 데이터 안정성 확보

---
