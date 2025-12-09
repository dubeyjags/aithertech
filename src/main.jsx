import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import LayoutCenter from "./components/LayoutCenter.jsx";
import LayoutPage from "./components/LayoutPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>  
        <Route path="/" element={<LayoutCenter />}>
          <Route index element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="/details" element={<LayoutPage />}>
          <Route index element={<h2>Details Page</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
