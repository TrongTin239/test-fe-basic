import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layouts/MainLayout";

import Loading from "./components/commons/Loading";
const root = ReactDOM.createRoot(document.getElementById("root"));
const HomePage = lazy(() => import("./features/Home/pages/HomePage"));
root.render(
  <>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="" element={<MainLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
