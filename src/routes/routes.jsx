import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../containers/Home/Index";
import Users from "../containers/Users/Index";

function Router() {
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/usuarios" element={<Users />} />
    </Routes>
    
  );
}

export default Router;
