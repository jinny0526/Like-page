import React, { useState } from "react";

const Selection = () => {
  const options = ["검은색바지", "파란색바지", "빨간색바지"];

  const [여는값, 열릴때값] = useState(false);
  const [선택한값, 선택된값] = useState(null);
  return (
    <div>
      <select>
        <div
          onClick={() => {
            열릴때값(!여는값);
          }}
        >
          {선택한값 || "선택하세요"}
        </div>
      </select>
    </div>
  );
};

export default Selection;
