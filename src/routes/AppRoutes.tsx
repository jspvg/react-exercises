import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ColorRenderer from "../pages/ColorRenderer";
import ShoppingCart from "../pages/ShoppingCart";
import FocusInput from "../pages/FocusInput";
import SimpleCalculator from "../pages/SimpleCalculator";
import PixelArt from "../pages/PixelArt";
import ColorPicker from "../pages/ColorPicker";
import ToggleWindowEvent from "../pages/ToggleWindowEvent";
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
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/focus-input" element={<FocusInput />} />
        <Route path="/simple-calculator" element={<SimpleCalculator />} />
        <Route path="/pixel-art" element={<PixelArt />} />
        <Route path="/color-picker" element={<ColorPicker />} />
        <Route path="/window-event" element={<ToggleWindowEvent />} />
        <Route path="/score-keeper" element={<ScoreKeeper />} />
        <Route path="/dog-pics" element={<DogPics />} />
        <Route path="/form-validator" element={<FormValidator />} />
        <Route path="/dark-mode" element={<DarkMode />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
