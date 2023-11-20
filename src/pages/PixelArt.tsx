import { useState } from "react";
import { DrawingColorContext } from "../hooks/useDrawingColor";
import PixelColorPicker from "../components/PixelArt/PixelColorPicker";
import Pixels from "../components/PixelArt/Pixels";

const PixelArt = () => {
  const [drawingColor, setDrawingColor] = useState("black");

  return (
    <DrawingColorContext.Provider value={{ drawingColor, setDrawingColor }}>
      <div>
        <h3>TASK</h3>
        <p>Build a pixel art drawing app</p>
        <ul>
          <li>
            When a color is clicked, that color becomes the drawing color. Then,
            when one of the grid squares is clicked, it should be colored in
            with the drawing color
          </li>
          <li>Use React Context to share state between your components</li>
        </ul>
        <PixelColorPicker />
        <Pixels />
      </div>
    </DrawingColorContext.Provider>
  );
};

export default PixelArt;
