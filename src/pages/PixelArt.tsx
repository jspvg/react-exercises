/* TASK
Build a pixel art drawing app
React Context 
-   Allows you to share data between components more easily. 
    Instead of having to pass a prop down multiple levels, you can use Context.
Requirements:
- When a color is clicked, that color becomes the drawing color. Then, when one of the grid
    squares is clicked, it should be colored in with the drawing color.
- Use React Context to share state between your components
*/

import { useState } from "react";
import { DrawingColorContext } from "../hooks/useDrawingColor";
import PixelColorPicker from "../components/PixelArt/PixelColorPicker";
import Pixels from "../components/PixelArt/Pixels";

const PixelArt = () => {
  const [drawingColor, setDrawingColor] = useState("black");

  return (
    <DrawingColorContext.Provider value={{ drawingColor, setDrawingColor }}>
      <div>
        <PixelColorPicker />
        <Pixels />
      </div>
    </DrawingColorContext.Provider>
  );
};

export default PixelArt;
