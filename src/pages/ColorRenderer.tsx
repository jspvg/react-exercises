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

const ColorRenderer = () => (
  <>
    <h3>TASK</h3>
    <p>
      Update the ColorRenderer component to display one instance of the Color
      component for each color in the array of colors
    </p>
    {colors.map((color) => (
      <Color
        key={color.hex}
        hex={color.hex}
        name={color.name}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    ))}
  </>
);

export default ColorRenderer;
