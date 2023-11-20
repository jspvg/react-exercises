import { useState } from "react";
import Color from "../components/Color";

const colors = [
  {
    hex: "#91A6FF",
    name: "Cornflower Blue",
  },
  {
    hex: "#FF88DC",
    name: "Persian Pink",
  },
  {
    hex: "#80FF72",
    name: "Screamin Green",
  },
  {
    hex: "#FF5154",
    name: "Tart Orange",
  },
];

export default function ColorPicker() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleClick = (hex: string) => {
    setBackgroundColor(hex);
  };

  return (
    <>
      <h3>TASK</h3>
      <p>
        Create a color picking app so the user can select the page's background
        color
      </p>
      <h4>Requirements</h4>
      <ul>
        <li>
          Upon clicking a color, change the whole page's background to be that
          color
        </li>
        <li> Make sure to use the Color subcomponent</li>
      </ul>
      <div className="page" style={{ backgroundColor }}>
        {colors.map((color) => (
          <Color
            key={color.hex}
            hex={color.hex}
            name={color.name}
            onClick={() => handleClick(color.hex)}
          />
        ))}
      </div>
    </>
  );
}
