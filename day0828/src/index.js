import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { Route } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import BookList from "./pages/BookList";
import RegistBook from "./pages/RegistBook";
import EditBookInfo from "./pages/EditBookInfo";
import App from "./App";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/list" element={<BookList />} />
      <Route path="/regist" element={<RegistBook />} />
      <Route path="/edit/:bookId" element={<EditBookInfo />} />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
