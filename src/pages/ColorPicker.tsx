/* TASK
Create a color picking app so the user can select the page's background color
Requirements:
- Upon clicking a color, change the whole page's background to be that color
- Make sure to use the Color subcomponent
*/

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
  }

  return (
    <div className="page" style={{ backgroundColor }}>
      {colors.map((color) => (
        <Color key={color.hex} hex={color.hex} name={color.name} onClick={() => handleClick(color.hex)}/>
      ))}
    </div>
  );
}
