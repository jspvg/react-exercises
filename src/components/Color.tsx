interface ColorProps {
  hex: string;
  name: string;
  onClick: () => void;
}

const Color = ({ hex, name, onClick }: ColorProps) => {
  return (
    <div className="color-square" style={{ backgroundColor: hex }} onClick={onClick}>
      <h2>{name}</h2>
    </div>
  );
};

export default Color;
