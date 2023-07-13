import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Product({ products }) {
  const [선택한값, 선택된값] = useState("");
  const 클릭한값 = (e) => {
    선택된값(e.target.value);
  };
  const { id } = useParams();
  const product = products.find((product) => product.id === Number(id));
  //다섯가지의 단계를 거침 그래서 뭘해야 저게 뜨냐하다가.. 아이디값이 맞는건 맞는데 그거 뭔지 강의를 뒤지다
  //useParams에 있는 id 값과 products에 있는 아이디가 일치해야 가져올수 있다 이것땜에 fliter부터 뒤짐
  //배열에서 조건(return 우측의 연산자)에 만족하는 요소만 필터링하는게 필터인데.. (todos.filter((td) => td.id !== todo.id)) 이거 쓰려다 에러 코드보니 시작부터 뭔가 잘못된게 맞는것같아서 일단 접음
  //map은 더 아닌 것같고 일치값이니까 맞는거 같기도 하고 해서 다시 읽어보다 일치하는 것 중 가장 먼저 발견되서 가져오는 하나만 찾을 수 있는 find 배열 찾음
  // const 사보다큰숫자하나 = 숫자배열.find((숫자) => {return 숫자 > 4;}); 이부분 참고 했습니다
  //처음에 number 안넣고 또 뭐가 안뜨길래 전에 했던 과제 중에 비슷한 에러뜬적 있어서 뒤지다.. 아이디가 죄다 숫자라 number 넣었는데 아이디 그냥 나노로 바꾸면 저거 반드시 빼야됨..

  return (
    <>
      <div>
        <h1>상세 페이지</h1>
        <div
          style={{
            display: "flex",
            gap: "44px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "240px",
              backgroundColor: "#068FFF",
            }}
          >
            {product.name}
            {/* 상품 이름 각자의 값에 맞게 넣기 */}
          </div>

          <div key={product.id}>
            <h3>가격: {product.price}</h3>
            <h3>좋아요: {product.likes}</h3>
            <h3>구매옵션</h3>
            <select
              value={선택한값}
              onChange={클릭한값}
              style={{
                width: "100px",
              }}
              //value값이랑 onchange 값 넣는거 제발 좀 까먹지말기 이거 왜 맨날 까먹지?
            >
              {product.options.map((선택한값) => (
                <option value={선택한값}>{선택한값}</option>
                //이부분 해설해주신 부분이랑 전에 다른 과제에서 설명을 해주신 부분 참고해서 넣었는데 이해를 해서 한건지는 모르겠어요..
              ))}
            </select>
            <span>구매옵션: {선택한값}</span>
          </div>
        </div>
      </div>
    </>
  );
}
