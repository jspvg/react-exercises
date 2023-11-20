import { useEffect, useState } from "react";

const ScoreKeeper = () => {
  const initialScore = parseInt(localStorage.getItem("score") || "0");
  const [score, setScore] = useState(initialScore);

  useEffect(() => {
    localStorage.setItem("score", score.toString());
  }, [score]);

  return (
    <div>
      <h3>TASK</h3>
      <p>
        Build a scorekeeping application using localStorage to store data in the
        browser
      </p>
      <h4>Requirements</h4>
      <ul>
        <li>
          Use localStorage to store the score so that it persists when you come
          back to the page
        </li>
        <li>
          You should be able to refresh the page and still see the score from
          the previous render
        </li>
      </ul>
      <h1>Your score is: {score}</h1>
      <button onClick={() => setScore((prevScore) => prevScore + 1)}>+</button>
      <button onClick={() => setScore((prevScore) => prevScore - 1)}>-</button>
    </div>
  );
};

export default ScoreKeeper;
