/* TASK
Implement a component that allows you to change from light to 
dark mode and back again
*/

import { useState } from "react";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  const handleDarkMode = () => {
    setIsDark(true);
  };

  const handleLightMode = () => {
    setIsDark(false);
  };

  const pageClass = `page ${isDark ? "dark-mode" : ""}`;

  return (
    <div className={pageClass}>
      <button className="dark-mode-button" onClick={handleDarkMode}>
        Dark Mode
      </button>
      <button className="light-mode-button" onClick={handleLightMode}>
        Light Mode
      </button>
    </div>
  );
};

export default DarkMode;
