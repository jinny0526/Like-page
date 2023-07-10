import React, { useState } from "react";

const Selection = () => {
  const options = ["검은색바지", "파란색바지", "빨간색바지"];
  const [열린값, 보여진값] = useState(false);
  const [선택한값, 선택된값] = useState(null);
  //누를때 값이랑 다 하나하나씩 넣어주고
  const 클릭한값 = (option) => {
    선택된값(option);
    보여진값(false);
  };

  //선택한 값 옵션 보여주려고 넣고
  return (
    <div>
      <div>
        <div
          onClick={() => {
            보여진값(!열린값);
          }}
        >
          <span>{선택한값 || "선택해보세요 "}</span>

          {/* 이부분은 생각안나서 이전에 했던거.. 다시 봤어요... */}
        </div>
        {열린값 && (
          <div>
            {options.map((option) => (
              <div
                key={option}
                onClick={() => {
                  클릭한값(option);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Selection;
