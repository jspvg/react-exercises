/* TASK
Build a scorekeeping application
Usin localStorage to store data in the browser
- localStorage.getItem(key)
- localStorage.setItem(key, value)
Requirements:
-Use localStorage to store the score so that it persists when you come back
    to the page
-You should be able to refresh the page and still see the score from the
    previous render
*/

import { useEffect, useState } from "react";

const ScoreKeeper = () => {
  const initialScore = parseInt(localStorage.getItem("score") || "0");
  const [score, setScore] = useState(initialScore);

  useEffect(() => {
    localStorage.setItem("score", score.toString());
  }, [score]);

  return (
    <div>
      <h1>Your score is: {score}</h1>
      <button onClick={() => setScore((prevScore) => prevScore + 1)}>+</button>
      <button onClick={() => setScore((prevScore) => prevScore - 1)}>-</button>
    </div>
  );
};

export default ScoreKeeper;
