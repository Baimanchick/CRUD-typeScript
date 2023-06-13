import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage";

const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
