/* TASK
Add and remove effects within React
Requirements:
- When the WindowEvent component is active, add an event listener to
    the window that triggers an alert if the user double clicks on the page
- Make sure to remove the window event when the component is toggled off
*/

import { useState } from "react";
import WindowEvent from "../components/WindowEvent";

const ToggleWindowEvent = () => {
  const [windowEvent, setWindowEvent] = useState(false);
  return (
    <div>
      <button onClick={() => setWindowEvent((prevState) => !prevState)}>
        Toggle Window Event
      </button>
      {windowEvent && <WindowEvent />}
    </div>
  );
};

export default ToggleWindowEvent;
