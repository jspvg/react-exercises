import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ColorRenderer from "../pages/ColorRenderer";
import ScoreKeeper from "../pages/ScoreKeeper";
import DogPics from "../pages/DogPics";
import FormValidator from "../pages/FormValidator";
import DarkMode from "../pages/DarkMode";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/color-renderer" element={<ColorRenderer />} />
        <Route path="/score-keeper" element={<ScoreKeeper />} />
        <Route path="/dog-pics" element={<DogPics />} />
        <Route path="/form-validator" element={<FormValidator />} />
        <Route path="/dark-mode" element={<DarkMode />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
