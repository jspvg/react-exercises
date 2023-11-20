import { Link } from "react-router-dom";

const Home = () => {
  const cardRoutes = [
    "color-renderer",
    "shopping-cart",
    "focus-input",
    "simple-calculator",
    "pixel-art",
    "color-picker",
    "window-event",
    "score-keeper",
    "dog-pics",
    "form-validator",
    "dark-mode",
  ];

  return (
    <div className="card-container">
      {cardRoutes.map((task, index) => (
        <Link key={index} to={`/${task}`} style={{ textDecoration: "none" }}>
          <div className="card">
            <h3>{task}</h3>
            <p>Click to navigate</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
