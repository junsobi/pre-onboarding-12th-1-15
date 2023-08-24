### 프리온보딩 프론트엔드 인턴십 [12th]

### 팀

- 15 팀
  - 팀원 : 김준섭 박예성 신성민 이세환 조정현 최선재

### 프로젝트 실행방법

```shell
git clone https://github.com/preonboardingTeam15/pre-onboarding-12th-1-15.git
cd pre-onboarding-12th-1-15
npm install
npm start
```

### 데모 영상

Vercel을 통해 배포.
[배포 링크](https://pre-onboarding-12th-1-15-beta.vercel.app/)

### 사용 라이브러리

- React Router
- Axios
- TailWind CSS
- React Icons

### 파일 구조

```bash
📦src
 ┣ 📂components
 ┃ ┣ 📂Auth
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
 ┃ ┃ ┣ 📜DisplayTodoItem.js
 ┃ ┃ ┣ 📜EditingTodoItem.js
 ┃ ┃ ┣ 📜TodoForm.js
 ┃ ┃ ┣ 📜TodoItem.js
 ┃ ┃ ┗ 📜TodoItems.js
 ┃ ┣ 📜Button.jsx
 ┃ ┗ 📜Header.jsx
 ┣ 📂hook
 ┃ ┗ 📜useAuthForm.js
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

### 협업 툴

## husky

## eslint

## prettier

---

### 주요 기능 목표 및 구현 설명

## 유효성검사

# 목표

- 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현해주세요
  - 이메일 조건: `@` 포함
  - 비밀번호 조건: 8자 이상
- 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 `disabled` 속성을 부여해주세요

# 구현

1. 폴더 및 파일 구조 : validators/authValidator.js
2. 이메일 검증 : includes(’@’) 사용하여 ‘@’포함 여부 확인
3. 비밀번호 검증 : `length` 속성을 사용하여 8자 이상인지 확인
4. 버튼활성화/비활성화 로직: 이메일 비밀번호 유효성 검사하는 함수(validateForm)을 작성하여 해당함수의 결과를 바탕으로 버튼의 disabled속성을 적용
5. validate 시각화 : 조건이 안맞을 경우 에러메시지를 input창 하단부에 표시 할 수 있는 로직 추가

---

## 페이지 이동 및 jwt 관리

# 목표

- 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 `/signin` 경로로 이동해주세요
- 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 `/todo` 경로로 이동해주세요
  - 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
  - 응답받은 JWT는 로컬 스토리지에 저장해주세요

# 구현

1. 페이지 이동 : UseNavigate를 활용
2. API 호출 : Axios.create 이용 - 좀더논의
3. 토큰 관리 : 토큰 유효성 검사를 할 수있는 로직 추가
4. 입력 유효성 검증 : response error 처리 - alert로 표시

---

## 리다이렉트

# 목표

- 로그인 여부에 따른 리다이렉트 처리를 구현해주세요
  - 로컬 스토리지에 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속한다면 `/todo` 경로로 리다이렉트 시켜주세요
  - 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/signin` 경로로 리다이렉트 시켜주세요

# 구현

1. 라우팅 및 리다이렉트 : 토큰 여부에 따라 페이지 이동을 관리하는 protectedRoute 컴포넌츠 생성 후 필요한 페이지 컴포넌츠를 감싸는 방식 채택

---

## Todo 리스트 목록과 체크박스

# 목표

- `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
- 목록에서는 TODO의 내용과 완료 여부가 표시되어야 합니다.
- TODO의 완료 여부는 `<input type="checkbox" />`를 통해 표현해주세요

# 구현

1. `useCallback` 사용 - 성능 최적화를 위해
2. 데이터를 가져오는 함수는 axios 사용, api 폴더에서 관리
3. `context api`에서 `useEffect` 를 사용해 데이터 최초 get,
   `todos` state 변수에 할당
4. 리스트 데이터는 CRUD 할때마다 get해온 리스트로 리스트업 하는방식
5. `TodoItems` 컴포넌트에서 `map()` 을 사용하여 `TodoItem` 컴포넌트를 뿌리고 props 전달

- 전달하는 props 값 : 키, 투두 내용, 수정 여부

6. `TodoItem` 컴포넌트는 수정 여부에 따라 EditingTodoItem(수정모드), DisplayTodoItem(디스플레이 모드)를 랜더링
7. `TodoItem` 컴포넌트는 `isCompleted` 속성을 checkbox `checked` 값에 할당
8. 완료된 리스트의 경우 ~~취소선~~이 그어진 효과 부여

---

## Todo 리스트 추가

# 목표

- 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요
- 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록 해주세요
- TODO를 추가 한 뒤 새로고침을 해도 추가한 TODO가 목록에 보여야 합니다

# 구현

1. 렌더링 최적화를 위하여 추가폼은 별도 컴포넌트 `TodoForm` 로 분리
2. `TodoContext` 에서 `todos`(투두 리스트) 를 props 로 받아옴
3. POST 요청이 성공하면 `getTodo`함수를 이용해 `TodoList`를 받아온후
   setTodoList를 사용해 state재할당 - 서버와의 데이터 일치성 확보를 위해
4. `form` 태그를 활용해 제출 버튼 타입을 `submit` 설정(버튼과 엔터 모두에서 작동)
5. 아무런 내용이 없을때 submit 은 작동 방지
6. 제출이 완료되면 input value 초기화

---

## Todo 리스트 삭제

# 목표

- TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요
- 투두 리스트의 삭제 기능을 구현해주세요
  - 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제되도록 해주세요

# 구현

1. TodoItem 컴포넌트에서 삭제 버튼 클릭 시 contextApi의 `removeTodo` 함수 호출,
   api 함수에 아이템 id 전달
2. DELETE 요청이 성공하면 `getTodoList` 를 사용해 state 재할당

---
