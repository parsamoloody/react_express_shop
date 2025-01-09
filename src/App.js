import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import ManClothing from './pages/ManClothing/category';
import CategoryPage from './pages/category/Category'
import client from './api/apolloClient';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route index element={<Home />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="/man-clothing/:categoryName" element={<CategoryPage />} />
      <Route path="man-clothing" element={<ManClothing />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;