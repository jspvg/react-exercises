import { useState } from "react";
import { useDrawingColor } from "../../hooks/useDrawingColor";

const Pixel = () => {
  const { drawingColor } = useDrawingColor();
  const [pixelColor, setPixelColor] = useState("lightGrey");

  const handlePixelClick = () => {
    setPixelColor(drawingColor);
  };

  return (
    <div
      style={{
        height: "20px",
        width: "20px",
        backgroundColor: pixelColor,
        margin: "1px",
      }}
      onClick={handlePixelClick}
    />
  );
};

export default Pixel;
