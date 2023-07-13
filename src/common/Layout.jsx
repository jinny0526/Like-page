import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#000000",
          color: "white",
        }}
      >
        <div>
          <Link to="/">로고</Link>
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          <div>
            <Link to="/mean">로그인</Link>
          </div>
          <div>
            <Link to="/signup">회원가입</Link>
          </div>
        </div>
      </header>
      <Outlet />
      <footer
        style={{
          marginTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#EEEEEE",
          color: "black",
        }}
      >
        <div>문의하기</div>
        <div>SNS 채널들</div>
      </footer>
    </>
  );
};
