import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ColorRenderer from "../pages/ColorRenderer";
import FormValidator from "../pages/FormValidator";
import DarkMode from "../pages/DarkMode";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/color-renderer" element={<ColorRenderer />} />
        <Route path="/form-validator" element={<FormValidator />} />
        <Route path="/dark-mode" element={<DarkMode />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
