# Getting Started with React Simple Input

MIDAS API를 활용한 React Plugin 기본 프로젝트 입니다.

## 프로젝트 시작하기

프로젝트를 실행하기 위해서는, 기본적인 환경을 구성해야 합니다.

### 프로젝트 다운로드

현 페이지의 `Code`버튼을 클릭하여 Download ZIP 파일을 다운로드 하세요.\
압축을 푼 뒤, 아래 절차를 그대로 진행하면 됩니다.

### 프로젝트 환경 구성, `npm install`

`NodeJS`를 설치 할 때, node package manager (npm)가 함께 설치 됩니다.\
npm은 NodeJS에서 사용하는 다양한 라이브러리를 손쉽게 설치하고 관리할 수 있도록 도와주는 패키지 입니다.\
또한, npm은 VSCode 터미널 창에서 `npm 명령어`의 형태로 입력이 가능 합니다.\
[npm document](https://docs.npmjs.com/)에서 npm에 대한 다양한 자료를 확인해보세요.\
VSCode에서 현 프로젝트를 열고 터미널에 `npm install`을 입력해보세요.\
react를 구성하기 위한 다양한 패키지들이 자동으로 설치 됩니다.

### 테스트의 시작, `npm start`

react로 구현된 웹페이지를 테스트 해보기 위해 또 다른 명령어를 사용할 수 있습니다.\
`npm start`를 VSCode의 터미널에 입력해보세요.\
별도의 환경설정 없이 바로 웹페이지가 구동됩니다!\
(코드 변경 시, 자동으로 변경사항이 반영 됩니다.)\

### 테스트의 종료, `Ctrl + C`

테스트를 종료하고 싶다면, VSCode의 터미널에서 `Ctrl + C`를 눌러보세요.\
실행되던 웹페이지가 정상적으로 종료됩니다.

### Plugin 업로드를 위한 파일 변환, `npm build`

VSCode의 터미널 창에 `npm build`를 입력하면 /dist 폴더에 압축된 형태의 `.html`과 `.js`가 생성 됩니다.\
MIDAS API에서 제공하는 Plugin 업로드 사이트에 접속하여 해당 파일을 업로드 하면 됩니다.