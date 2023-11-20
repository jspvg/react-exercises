import Pixel from "./Pixel";

const Pixels = () => {
  const pixels = Array.from({ length: 100 }, (_, i) => <Pixel key={i} />);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(10, 1fr)",
        width: "210px",
        margin: "0 auto",
      }}
    >
      {pixels}
    </div>
  );
};

export default Pixels;
