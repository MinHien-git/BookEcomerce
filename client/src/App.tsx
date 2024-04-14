import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerLayout from "./layout/CustomerLayout/CustomerLayout";
import AdminLayout from "./layout/AdminLayout/AdminLayout";
import CategoriesPage from "./pages/Admin/CategoriesPage/CategoriesPage";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import ProductPage from "./pages/Admin/ProductsPage/ProductsPage";
import AuthorsPage from "./pages/Admin/AuthorsPage/AuthorsPage";
import OrdersPage from "./pages/Admin/OrdersPage/OrdersPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CustomerLayout />}></Route>
          <Route path="/admin/" element={<AdminLayout />}>
            <Route path="" element={<Dashboard />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="products" element={<ProductPage />} />
            <Route path="authors" element={<AuthorsPage />} />
            <Route path="orders" element={<OrdersPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
