import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import { createBrowserRouter } from "react-router-dom";
// import { createRoutesFromElements } from "react-router-dom";
// import { Route } from "react-router-dom";
// import { RouterProvider } from "react-router-dom";
// import UserList from "./pages/UserList";
// import RegistUser from "./pages/RegistUser";
// import EditUserInfo from "./pages/EditUserInfo";
// import Header from "pages/Header";
// import LoginForm from "pages/LoginForm";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/" element={<App />} />
//       <Route path="/list" element={<UserList />} />
//       <Route path="/regist" element={<RegistUser />} />
//       <Route path="/edit/:userId" element={<EditUserInfo />} />
//       <Route path="/loginForm" element={<LoginForm/>}/>
//     </>
//   )
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <>
  //   <Header/>
  //   <RouterProvider router={router} />
  // </>
  <React.StrictMode>
    <App />
  </React.StrictMode>  
);
