import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn.jsx";
import LayoutCenter from "./components/LayoutCenter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>  
        <Route path="/" element={<LayoutCenter />}>
          <Route index element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
