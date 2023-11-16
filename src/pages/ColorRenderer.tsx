/* TASK
Build a color renderer that will display color swatches on a user interface
Update the ColorRenderer component to display one instance of the 
Color component for each color in the array of colors
*/

import Color from "../components/Color";

type Color = {
  hex: string;
  name: string;
};

const colors: Color[] = [
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

const ColorRenderer = () =>
  colors.map((color) => <Color hex={color.hex} name={color.name} />);

export default ColorRenderer;
