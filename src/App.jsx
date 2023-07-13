import { Route, Routes } from "react-router";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Mean from "./pages/Mean";
import Signup from "./pages/Signup";
import { Layout } from "./common/Layout";
import { Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "멋진 바지",
      price: "20000",
      likes: "100개",
      options: ["28", "30", "32"],
    },
    {
      id: 2,
      name: "멋진 셔츠",
      price: "10000",
      likes: "200개",
      options: ["small", "medium", "large"],
    },
    {
      id: 3,
      name: "멋진 신발",
      price: "30000",
      likes: "300개",
      options: ["230", "240", "250"],
    },
  ]);

  return (
    //props 좀 잊지말기, 가져오는 값이 없는데 무슨 값이 나오는지 생각좀 하기
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main products={products} />} />
        <Route path="/products" element={<Products products={products} />} />
        <Route path="/products/:id" element={<Product products={products} />} />
        <Route path="/mean" element={<Mean />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route
        path="*"
        element={
          <>
            <div>없는 페이지입니다.</div>
            <Link to="/">홈으로 이동</Link>
          </>
        }
      />
    </Routes>
  );
}

export default App;
