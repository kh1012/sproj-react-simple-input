import React from 'react';
import ReactDOM from 'react-dom/client';

// API를 사용하기 위한 기본적인 변수 및 함수
const baseUrl = 'https://api-beta.rpm.kr-dv-midasit.com:443';
const programType = 'gen';
function getMapiKey() {
  // url에서 params를 가져오고 mapikey를 get 합니다.
  const params = new URLSearchParams(window.location.search);
  return params.get("mapikey");
}

// QueryString을 만드는 함수
function makeQueryString() {
  const inputValue = document.getElementById('querystring-input').value;
  const queryString = '?mapikey=' + inputValue;
  document.getElementById('querystring-output').textContent = queryString;
}

// 만들어진 QueryString을 주소창에 적용 시켜주는 함수
function queryStringToURL() {
  const href = window.location.href;
  if (!href.includes('?mapikey=')) {
    window.location.href = 
      window.location.origin + document.getElementById('querystring-output').textContent;
  }
}

// MAPI-Key가 올바른지 확인하는 함수
async function checkMapiKey() {
  // mapikey를 QueryString으로부터 가져 옵니다.
  const mapikey = getMapiKey();

  const response = await fetch(`${baseUrl}/mapikey/verify`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'MAPI-Key': mapikey
    }
  });

  // 응답 결과를 getnode-output id를 가진 DOM 객체에 전달합니다.
  document.getElementById('status-output').textContent = 
    JSON.stringify(await response.json(), null, 2);
}

// GET NODE 버튼 클릭 시 동작을 정의해준 함수
async function getNodeFetch() {
  // mapikey를 QueryString으로부터 가져 옵니다.
  const mapikey = getMapiKey();

  // NODE를 가져오는 요청을 보냅니다.
  const response = await fetch(`${baseUrl}/${programType}/db/node`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'MAPI-Key': mapikey
  }});

  // 응답 결과를 getnode-output id를 가진 DOM 객체에 전달합니다.
  document.getElementById('getnode-output').textContent = 
    JSON.stringify(await response.json(), null, 2);
}

// "/public/index.html"의 <div>중 id="root"를 찾아옵니다.
const root = ReactDOM.createRoot(document.getElementById('root'));
// id="root"를 가진 div에 아래 html 코드를 렌더링 해줍니다.
root.render(
  <div>
    {/* TITLE */}
    <h1>HTML SIMPLE INPUT</h1>

    {/* EXAMPLE */}
    <ul>
      <li style={{marginBottom: "10px"}}>
        아래 Edit Box에 MAPI-Key를 넣고 <b>QueryString을 만들어 보세요.</b>
        <div style={{marginTop: "10px", marginBottom: "10px"}}>
          <input type="text" id="querystring-input" />
          <button type="button" style={{marginLeft: "10px"}} onClick={makeQueryString}>QueryString 만들기</button>
          <pre id='querystring-output' style={{marginBottom: "10px"}} />
          위 문자열을 복사해서 주소창에 직접 붙여넣기 + Enter 하시거나 <button type="button" onClick={queryStringToURL}>QueryString 적용하기 (To URL)</button>를 눌러주세요.
          <p>브라우저의 주소창을 보시면 mapikey가 적용된 걸 보실 수 있습니다.</p>
        </div>
      </li>
      <li style={{marginBottom: '10px'}}>
        MAPI-Key가 올바른 형태인지 확인하세요.
        <div style={{marginTop: "10px"}}>
          <button type="button" onClick={checkMapiKey}>MAPI-Key 확인</button>
          <pre id='status-output' />
        </div>
      </li>
      {/* CLIENT의 NODE 정보를 가져와서 출력 */}
      <li style={{marginBottom: "10px"}}>
        03. <b>"GET"</b> 아래 버튼을 클릭하시면 NODE 정보를 가져옵니다.
        <div style={{marginTop: "10px"}}>
          <button type="button" onClick={getNodeFetch}>GET NODE</button>
          <pre id="getnode-output" />
        </div>
      </li>
    </ul>
  </div>
);