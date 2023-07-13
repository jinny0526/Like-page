import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Products({ products }) {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <div
        style={{
          marginTop: "56px",
          textAlign: "center",
        }}
      >
        <h2>🔥 여름 추천템 🔥</h2>
        <button
          onClick={() => {
            setSearchParams({
              sort: "price",
            });
          }}
        >
          가격순정렬
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {products.map((product) => (
            <Link to={`/products/${product.id}`}>
              {/* 하나로 합쳤을땐 아이디값을 받아와야하니가 `` 까먹지말기 이거써야 뭘쓰든 문제없이 돌아감*/}
              <div
                style={{
                  width: "200px",
                  height: "240px",
                  backgroundColor: "#068FFF",
                }}
              >
                <div>{product.name}</div>
                <div>{product.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
