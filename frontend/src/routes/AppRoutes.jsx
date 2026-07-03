import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import History from "../pages/History";
import About from "../pages/About";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;