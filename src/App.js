import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/products/Product";

const Home = React.lazy(() => import("./pages/home/Home"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading.....</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
