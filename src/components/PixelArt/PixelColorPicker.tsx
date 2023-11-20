import { useDrawingColor } from "../../hooks/useDrawingColor";

const PixelColorPicker = () => {
  const colors = ["red", "blue", "yellow", "green", "black", "white", "purple"];
  const { setDrawingColor } = useDrawingColor();
  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map((color) => (
        <button
          key={color}
          style={{ backgroundColor: color }}
          onClick={() => setDrawingColor(color)}
        />
      ))}
    </div>
  );
};

export default PixelColorPicker;
